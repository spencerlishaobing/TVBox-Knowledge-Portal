# 饭太硬逆向总览

## 目标

把依赖 Android JAR 的片源能力拆成可维护的协议、数据结构和桌面实现，而不是无限扩充 Android API 桩。每次上游更新都保留输入、哈希、工具链、反编译快照和差异报告。

## 已归档证据

- 多仓与饭太硬单仓原始配置快照。
- 伪装图片分发的 JAR/DEX 原件及 MD5、SHA-256。
- dex2jar 转换结果、CFR Java 输出和 `javap` 失败兜底。
- Spider、Pan、Cloud、ProxyOrigin、InitOrigin 等核心调用链。
- PC 端 Java 宿主、Android API 兼容层和已翻译 JavaScript 适配器。

## 维护原则

1. 原始输入不可覆盖，以时间和哈希建立快照。
2. CFR 输出不是唯一真相，必须与字节码和真实请求交叉验证。
3. 能翻译为稳定协议的功能优先脱离 JAR。
4. Android UI、WebView、Service 和 JNI 能力按业务效果实现 PC 等价物。
5. 任何接口变更必须记录最后验证时间、测试输入和失败类型。

