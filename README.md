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
│   ├── touch-hover.js         # 触屏悬停修正：避免手指点过的按钮保持常亮
│   ├── background-music.js    # 首页背景音乐卡片及播放逻辑
│   └── copyToClipboard.js     # 联系方式复制功能
├── project_subpage/           # 子页面（可根据自己需求来存放）
│   ├── blog/                  # 博客自带页面
│   │   ├── building.html      # 没做完的项目导航到这里
│   │   ├── article_unavailable.html # 未开放文章的提示页
│   │   ├── feedback.html      # 反馈表单，提交后跳到 thanks.html
│   │   ├── thanks.html        # 反馈提交成功页
│   │   └── guide.html         # 博客使用指南（自己生成）
│   └── projects/              # 自己的项目页
│       ├── appeal-guide/
│       │   └── index.html     # 误踢申诉指南——RH工作室（自己生成）
│       └── download/
│           └── index.html     # 直链下载站（自己生成）
└── archive/                   # 归档文件，不参与网页显示
    ├── music-player.js        # 旧版播放器脚本（已被 background-music.js 取代）
    └── feedback-tx.html       # 腾讯问卷版反馈页（已改用 blog/feedback.html）
```

## 功能

- 首页、文章列表、文章详情、电影和关于页面
- 根据文章标签筛选，支持置顶文章
- 文章卡片二级菜单支持三种类型：打开站内文章、跳转到文章配置的独立页面（`externalPage`）、或自定义链接（`link`）
- 文章详情支持内嵌独立 HTML 页面（`embeddedPage`），自动调整高度并适配主题
- 文章分享：打开文章时地址栏带上 `?article=<id>`，文章页顶部的「分享」按钮和卡片菜单均可复制该链接；别人打开链接直达对应文章，链接失效时自动回到首页
- 微信内分享：微信内置浏览器（UA 含 `MicroMessenger`）不支持 Web Share API，也没有让网页主动唤起「分享给朋友」面板的接口，因此点击分享按钮会先复制链接、再弹出指向右上角「···」的引导浮层；鸿蒙 NEXT 版微信（ArkWeb 内核）同样按微信内处理；其它浏览器仍走系统分享面板/复制链接
- 单篇文章可通过 `isPublic: false` 暂停正文访问，点击文章或打开其直达链接会在文章区域嵌入 `project_subpage/blog/article_unavailable.html` 提示页；将其改为 `true` 即可重新开放
- 关于页面可通过 `?view=about` 直达，无需添加分享按钮
- 所有 HTML 页面使用根目录的 `favicon.svg` 作为浏览器图标
- 分享卡片封面：当前 `og:image` 用的是 CDN 头像地址 `https://1837491863.cdn.123clouddisk.com/1837491863/46000074`（按站点主人的要求先试这个）。**注意该 CDN 开了 Referer 鉴权**，实测不带 Referer 或空 Referer 均返回 403，只有带 `Referer: https://annie106.github.io/annie106/` 才返回 200；微信抓取时不带本站 Referer，所以很可能抓不到。若卡片仍是灰图标，把 `index.html` 里 `og:image` / `twitter:image` / `link rel="image_src"` 三处换回仓库内的 `https://annie106.github.io/annie106/share_cover.jpg`（500×500 头像裁切图，已随仓库提供）。换图后微信有缓存，旧链接可能仍显示旧图
- 反馈表单支持文章问题、Bug 反馈、功能建议、排版样式和其他类型
- 新增博客使用指南文章，提供完整的项目配置、修改和部署教程
- 页面状态记忆：离开文章、切换标签页或关闭页面后返回时，自动恢复之前的视图、滚动位置和筛选状态
- 适配移动端的导航和页面布局
- 点击图标复制微信号、QQ 号和邮箱地址（优先使用 Clipboard API，兼容旧浏览器）
- 首页背景音乐卡片，提供播放/暂停、音量、进度和收起控制；用户的音乐启用状态保存在浏览器本地
- 独立视频播放页 `movie.html`：视频列表配置在 `VIDEO_LIST` 数组，支持侧边播放列表面板、加载动画、左上角水印，以及针对验证码、地区限制、解码失败、资源禁用等情况的详细错误提示与"重新加载 / 换一个视频"操作
- 子页面：博客自带页面在 `project_subpage/blog/`（没做完的项目、未开放文章提示页、反馈表单、反馈成功页、使用指南），自己的项目页在 `project_subpage/projects/`（直链下载站 `projects/download/index.html` 与误踢申诉指南 `projects/appeal-guide/index.html`）
- 关于页在 `index.html` 的 `view-about` 视图内展示（RH 工作室介绍），由 `data-nav="about"` 触发切换

## 修改内容

- **个人资料和页面文字**：编辑 `index.html`，包括姓名、简介、所在地、职业、头像、社交联系方式及关于页面内容。首页"最新文章"标签筛选默认为 `置顶 / 社交 / 阅读 / 随笔`，可在 `js/script.js` 的 `renderTagPills` 中调整。
- **文章**：编辑 `js/script.js` 中的 `blogPosts` 数组。文章可设置标题、日期、摘要、标签和 HTML 正文；将 `pinned` 设为 `true` 可置顶。设 `isPublic: false` 时，文章详情会嵌入 `project_subpage/blog/article_unavailable.html`；如需修改未开放提示的内容和样式，直接编辑该文件即可。文章标题、元信息和正文会隐藏；改为 `true` 或删除该字段即可恢复开放。此开关只控制页面显示，不是安全措施：静态站点的文章正文仍可从公开的 `js/script.js` 源码中读取。`embeddedPage` 可将独立 HTML 页面嵌入博客文章详情（自动调整高度并适配深色模式）；`externalPage` 可配置跳转到独立页面。卡片二级菜单统一配置在 `articleMenus` 中，以文章 `id` 为键；未单独配置的文章默认显示“复制文章链接”“查看评论”和“问题反馈”三个选项。菜单项支持：
  - `article`：打开站内文章详情
  - `externalPage`：打开该文章数据中的 `externalPage` 链接
  - `link`：打开指定的 URL 或 HTML 页面
- **分享文章**：每篇文章的链接形式为 `index.html?article=<id>`。打开文章时地址栏会自动带上该参数，返回列表时自动清除；开放文章页顶部有「分享」按钮（微信内先复制链接并弹出引导浮层，其它移动端唤起系统分享面板，桌面端复制链接），卡片「⋯」菜单里也有「复制文章链接」。未开放文章的直达链接会在文章区域显示提示。链接中的 `id` 不存在时会清掉参数并回到首页。**改动文章 `id` 会使已分享的链接失效。**

  > **为什么微信里不能一键分享？** 微信内置浏览器不实现 Web Share API，也没有任何公开接口能让网页主动弹出「分享给朋友」面板。官方微信 JS-SDK 只能**配置**分享卡片的标题、摘要和缩略图，真正发起分享仍需用户手动点右上角「···」；且 JS-SDK 要求认证公众号、HTTPS 域名以及后端签名服务（用 `appId` + `secret` 换 `jsapi_ticket`），纯静态的 GitHub Pages 站点无法满足。所以本站采用「复制链接 + 引导浮层」的方案。
- **关于页面链接**：在博客首页链接后加上 `?view=about`，例如 `https://你的网址/?view=about`，即可直接打开内置关于页。
- **网站图标**：根目录的 `favicon.svg` 是所有 HTML 页面的浏览器图标。子目录页面通过相对路径引用它；新建或移动页面时，记得检查 `<link rel="icon">` 的路径。
- **背景音乐**：编辑 `js/background-music.js` 中的 `musicList` 数组；每项包含歌曲标题、艺术家和音频地址。当前配置为单曲循环。
- **电影列表**：编辑 `movie.html` 中的 `VIDEO_LIST` 数组，为视频填写名称和播放链接。
- **样式**：编辑 `css/style.css`。
- **子页面**：博客自带页面在 `project_subpage/blog/`，项目页在 `project_subpage/projects/`，均为独立页面，可直接修改各自 HTML 内容。移动或重命名这些页面后，记得同步 `js/script.js` 里的 `embeddedPage` 和 `articleMenus` 路径。
- **归档文件**：`archive/` 里的文件不参与网页显示，仅作留存。`music-player.js` 是旧版播放器（已由 `background-music.js` 取代），`feedback-tx.html` 是腾讯问卷版反馈页（已改用 `blog/feedback.html`）。
- **页面状态记忆**：通过 `script.js` 自动实现。离开文章、切换标签页或关闭浏览器时，当前视图、标签筛选、滚动位置等状态会被自动保存；返回时自动恢复，无需额外配置。

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
