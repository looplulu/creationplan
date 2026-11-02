# 100 天造物计划（历史作品）

本仓库保留 2026 年造物计划的网页作品。造物计划已从当前 Loop Lulu 主站移除，
不是当前生产站点的完整源码，不再部署已退役的旧域名。
主站现由私有 `looplulu/home` 仓库维护；当前文本工具入口为
[FixFlow](https://loop-lulu.com/fixflow/word/)。

## 内容

| 目录或入口 | 作品 |
| --- | --- |
| `index.html`、`about/` | 计划首页与介绍 |
| `repositories/worldcup2026/` | 世界杯赛程推荐 |
| `repositories/wordgood/` | 标点整理台 |
| `repositories/yourmoney/` | 你最能赚钱啦 |
| `repositories/duanwuguoxue/` | 端午诗词挑战 |
| `repositories/aiclean/` | AI 回答清洗 |
| `repositories/myfather/` | 那天，他第一次当爸爸 |
| `repositories/tenyears/` | 十年显影 |
| `repositories/regretpill/` | 给你一粒后悔药 |
| `repositories/life11/` | 人生 11 人 |

造物库另有“摸鱼神器”（飞书链接）与“你的文本搭子”（FixFlow 链接），
共 11 个作品入口，并非 11 个独立 GitHub 仓库。

## 预览与依赖

纯静态作品可以在仓库根目录执行 `python3 -m http.server 8000`，
再直接访问对应目录，例如 `http://localhost:8000/repositories/aiclean/`。
首页和造物库使用历史 `/creationplan/` 绝对路径，依赖主站公共 `/assets/`、
`/creationplan/api/` 和部分项目后端；这些依赖未包含在本仓库。
部分作品只保留构建产物，不包含原始前端工程。
单独克隆不能恢复原生产站，不应把页面里历史的“已建”状态当作在线可用性证明。

保留作品与提交历史供查阅；没有新增开源许可证或改变原素材的使用授权。
