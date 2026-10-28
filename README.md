# Annie 的个人博客

> 纯 AI 构建

原生 HTML + CSS + JavaScript 的静态博客，无依赖、无构建。

完整配置教程在站内「使用指南」文章（`project_subpage/blog/guide.html`），本文件只做速查。

## 目录

```text
index.html                  入口：首页 / 文章列表 / 文章详情 / 电影 / 关于
movie.html                  独立视频页（列表见 VIDEO_LIST）
favicon.svg                 站点图标
share_cover.jpg             分享卡片封面，1080×1080
images/manor_photos/        归宿照图集（文章 id 11 用）
css/style.css               全部样式与响应式
js/script.js                文章数据、筛选、搜索、路由、页面状态
js/theme.js                 深色模式
js/touch-hover.js           触屏悬停修正
js/background-music.js      首页背景音乐
js/copyToClipboard.js       联系方式复制
js/image-loading.js         图片占位与清晰化
project_subpage/blog/       站点页：building / article_unavailable ...
project_subpage/projects/   项目页：appeal-guide / download ...
archive/                    归档，不参与显示
```

## 功能

- 首页、文章列表、文章详情、电影、关于五个视图，移动端导航自适应
- 标签筛选，支持置顶文章
- 全站搜索（<kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> 或 <kbd>/</kbd>）：搜标题、摘要、标签、正文；多关键词按「与」匹配，命中高亮，空状态给最近搜索与标签入口
- 文章卡片「⋯」菜单支持三类：站内文章、独立页面（`externalPage`）、自定义链接（`link`）
- 文章可内嵌独立 HTML（`embeddedPage`），自动调高并跟随主题
- 分享链接形如 `index.html?article=<id>`；微信内改为复制链接 + 右上角引导，其它端走系统分享
- `isPublic: false` 关闭单篇正文，改为 `true` 恢复
- 页面状态记忆：离开文章、切标签、关页后返回，恢复视图与滚动位置
- 正文链接加 `class="gated-link"` 后点击弹出「链接已停止访问」提示
- 独立视频页：侧边播放列表、加载动画、水印，附验证码 / 地区限制 / 解码失败等错误提示
- 点击图标复制微信号、QQ 号、邮箱
- 反馈表单：文章问题、Bug、功能建议、排版样式、其他

## 修改

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名、简介、头像、联系方式、关于页 | `index.html` 与 `js/script.js` 的 `siteConfig` |
| 文章 | `js/script.js` 的 `blogPosts` 数组 |
| 文章卡片菜单 | `js/script.js` 的 `articleMenus`（按文章 id） |
| 背景音乐 | `js/background-music.js` 的 `musicList` |
| 视频列表 | `movie.html` 的 `VIDEO_LIST` |
| 样式 | `css/style.css` |
| 分享封面 | 换图后同步 `index.html` 里的三处地址与宽高 |

几个注意点：

- 分享封面必须写绝对地址，如 `https://annie106.github.io/annie106/share_cover.jpg`；相对路径抓不到，带 Referer 鉴权的 CDN 也抓不到。
- 全站共用一个 `index.html?article=N` 页面，微信不执行 JS，所以所有文章共用同一张封面。
- 改文章 `id` 会让已分享的链接失效。
- 首页标签在 `js/script.js` 的 `renderTagPills` 里，目前是「置顶 / 社交 / 随笔」。
- 移动或重命名子页面后，同步 `embeddedPage` 与 `articleMenus` 的路径。

## 本地预览

```bash
python -m http.server 8000
```

访问 <http://localhost:8000>，或直接打开 `index.html`。背景音乐需用户交互后才能播放。

## 部署

静态站，放到 GitHub Pages 或任意静态托管即可，无需后端与构建。

## 许可证

保留所有权利。
