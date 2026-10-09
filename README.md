# Annie 的个人博客

> 纯 AI 构建

一个使用原生 HTML、CSS 和 JavaScript 编写的静态个人博客，无需安装依赖或执行构建。

## 项目结构

```text
.
├── index.html                 # 博客入口：包含首页、文章列表、文章详情、内嵌电影页、内嵌关于页
├── movie.html                 # 独立视频播放页，视频列表配置在 VIDEO_LIST 数组
├── favicon.svg                # 网站图标
├── css/
│   └── style.css              # 博客样式及响应式布局
├── js/
│   ├── script.js              # 文章数据、标签筛选和页面导航逻辑
│   ├── theme.js               # 深色模式的适配
│   ├── background-music.js    # 首页背景音乐卡片及播放逻辑
│   ├── copyToClipboard.js     # 联系方式复制功能
│   └── music-player.js        # 旧版播放器脚本（当前首页未加载）
└── project_subpage/           # 子页面（可根据自己需求来存放）
    ├── building.html          # 没做完的项目导航到这里
    ├── rh_studio_appeal_guide/
    │   └── index.html         # 误踢申诉指南——RH工作室
    └── rh_studio_studio/
        └── download.html      # 直链下载站
```

## 功能

- 首页、文章列表、文章详情、电影和关于页面
- 根据文章标签筛选，支持置顶文章
- 文章卡片的更多菜单可打开文章详情及文章配置的网页 / 独立 HTML 页面；文章详情也支持内嵌独立 HTML 页面
- 适配移动端的导航和页面布局
- 点击图标复制微信号、QQ 号和邮箱地址（优先使用 Clipboard API，兼容旧浏览器）
- 首页背景音乐卡片，提供播放/暂停、音量、进度和收起控制；用户的音乐启用状态保存在浏览器本地
- 独立视频播放页 `movie.html`：视频列表配置在 `VIDEO_LIST` 数组，支持侧边播放列表面板、加载动画、左上角水印，以及针对验证码、地区限制、解码失败、资源禁用等情况的详细错误提示与"重新加载 / 换一个视频"操作
- 子页面 `project_subpage/`：直链下载站（`rh_studio_studio/download.html`）与误踢申诉指南（`rh_studio_appeal_guide/index.html`）
- 关于页在 `index.html` 的 `view-about` 视图内展示（RH 工作室介绍），由 `data-nav="about"` 触发切换

## 修改内容

- **个人资料和页面文字**：编辑 `index.html`，包括姓名、简介、所在地、职业、头像、社交联系方式及关于页面内容。首页"最新文章"标签筛选默认为 `置顶 / 社交 / 阅读 / 随笔`，可在 `js/script.js` 的 `renderTagPills` 中调整。
- **文章**：编辑 `js/script.js` 中的 `blogPosts` 数组。文章可设置标题、日期、摘要、标签和 HTML 正文；将 `pinned` 设为 `true` 可置顶。`embeddedPage` 可将独立 HTML 页面嵌入博客文章详情；`externalPage` 可配置跳转到独立页面。卡片二级菜单统一配置在 `articleMenus` 中，以文章 `id` 为键；未单独配置的文章默认显示“查看文章”。菜单项支持 `article`（站内文章）、`externalPage`（文章的独立页面）和 `link`（自定义网址）。
- **背景音乐**：编辑 `js/background-music.js` 中的 `musicList` 数组；每项包含歌曲标题、艺术家和音频地址。当前配置为单曲循环。
- **电影列表**：编辑 `movie.html` 中的 `VIDEO_LIST` 数组，为视频填写名称和播放链接。
- **样式**：编辑 `css/style.css`。
- **子页面**：`project_subpage/rh_studio_studio/download.html`（直链下载站）与 `project_subpage/rh_studio_appeal_guide/index.html`（误踢申诉指南）均为独立页面，可直接修改各自 HTML 内容。

## 本地运行

在项目根目录启动静态文件服务器：

```bash
python -m http.server 8000
```

然后访问 <http://localhost:8000>。也可以直接在浏览器中打开 `index.html`。浏览器可能会限制页面自动播放音乐，需要用户交互后才能开始播放。

## 部署

本项目是静态网站，可部署到 GitHub Pages 或其他静态托管服务。无需后端服务或构建步骤。

## 许可证

保留所有权利。
