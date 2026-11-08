# 架构映射

| TVBoxOS 层 | 主要职责 | SimpleTools 对应层 |
| --- | --- | --- |
| Activity / Fragment | 页面与焦点交互 | WebView 路由与 PC 组件 |
| SourceViewModel | 配置、首页、详情与播放请求 | Rust 命令 + 前端状态管理 |
| Spider / SpiderApi | 片源统一接口 | JVM/Python/JS 宿主与本地适配器 |
| OkHttp / OkGo | 网络、Cookie、Header | Rust HTTP 与宿主网络桥 |
| PlayerActivity | 点播控制 | libmpv 原生窗口与控制层 |
| LivePlayActivity | 直播与线路 | 独立直播播放器状态机 |
| Drive/Pan | 网盘目录与播放 | 云盘服务层和二维码授权 |

复刻重点是保持协议语义和用户任务，不复制 Android 生命周期、遥控器焦点和窗口实现。

