---
title: TVBox 复刻与资源工程
---

<div class="hero">
  <h1>TVBox 复刻与资源工程</h1>
  <p>面向长期维护的影视仓复刻、饭太硬逆向、接口治理与直播源健康检查知识库。</p>
</div>

## 知识地图

<div class="grid cards" markdown>

-   :material-shield-search:{ .lg .middle } **饭太硬逆向**

    ---

    固化工具版本、输入哈希、反编译步骤、调用链与桌面等效实现，避免每次更新从零开始。

    [:octicons-arrow-right-24: 查看逆向手册](reverse/fantaiying.md)

-   :material-monitor-dashboard:{ .lg .middle } **影视仓复刻**

    ---

    从 TVBoxOS Android 架构映射到 SimpleTools PC 交互，持续维护功能矩阵与兼容缺口。

    [:octicons-arrow-right-24: 查看复刻报告](reproduction/index.md)

-   :material-access-point-network:{ .lg .middle } **资源健康中心**

    ---

    统一记录影视接口、直播源、解析器和多仓入口的有效性、最后检查时间与失败原因。

    [:octicons-arrow-right-24: 查看资源状态](resources/index.md)

-   :material-tools:{ .lg .middle } **脚本与维护**

    ---

    同步、解码、反编译、差异比较、接口探测和发布检查全部脚本化。

    [:octicons-arrow-right-24: 查看工具索引](tooling/index.md)

</div>

## 当前基线

| 项目 | 当前状态 |
| --- | --- |
| PC 产品 | SimpleTools `main` / `tvbox` 双分支 |
| Android 参考实现 | TVBoxOS，源码位于本地独立工作树 |
| 饭太硬归档 | 原始配置、JAR/DEX、CFR 与 `javap` 证据已固化 |
| 资源治理 | 多仓同步和分类已完成，正在补齐定时健康检查 |
| 发布策略 | 标准版与 TVBOX 版分别输出安装包和免安装包 |

!!! warning "公开边界"
    本站只展示可公开的技术文档和统计结果。完整配置、原始逆向产物、密钥、Cookie 与未脱敏接口保存在私有知识库，不通过 GitHub Pages 发布。

