#!/usr/bin/env python3
"""Check public TVBox resource entry points and emit machine-readable status."""
from __future__ import annotations

import base64
import json
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "public-resources.json"
OUTPUT = ROOT / "data" / "public-resource-status.json"


def looks_like_config(payload: bytes) -> bool:
    text = payload.decode("utf-8", "ignore").strip()
    candidates = [text]
    try:
        candidates.append(base64.b64decode(text, validate=False).decode("utf-8", "ignore"))
    except Exception:
        pass
    return any(token in candidate for candidate in candidates for token in ('"urls"', '"sites"', '"spider"'))


def check(item: dict) -> dict:
    started = time.perf_counter()
    request = urllib.request.Request(item["url"], headers={"User-Agent": "TVBox-Knowledge-Portal/1.0"})
    result = {"id": item["id"], "name": item["name"], "type": item["type"]}
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            payload = response.read(2 * 1024 * 1024)
            valid = looks_like_config(payload) if item.get("expect") == "config" else bool(payload)
            result.update(status="ok" if valid else "degraded", httpStatus=response.status, bytes=len(payload), finalUrl=response.url)
            if not valid:
                result["reason"] = "response does not match expected format"
    except urllib.error.HTTPError as exc:
        result.update(status="failed", httpStatus=exc.code, reason=str(exc))
    except Exception as exc:
        result.update(status="failed", reason=f"{type(exc).__name__}: {exc}")
    result["latencyMs"] = round((time.perf_counter() - started) * 1000)
    return result


def main() -> None:
    source = json.loads(SOURCE.read_text(encoding="utf-8"))
    report = {
        "schemaVersion": 1,
        "checkedAt": datetime.now(timezone.utc).isoformat(),
        "results": [check(item) for item in source["resources"] if item.get("public", False)],
    }
    OUTPUT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False))


if __name__ == "__main__":
    main()

