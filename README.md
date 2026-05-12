# Annie 的个人博客

这是一个现代化(AI写的 除了中文不是AI)的个人博客，使用纯 AI 构建。

## 项目结构

```
images2/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── script.js       # 主脚本（博客逻辑）
│   ├── copyToClipboard.js  # 复制功能
│   └── music-player.js # 音乐播放器
└── .vscode/
    └── launch.json     # VS Code 配置
```

## 功能特性

- 单页应用架构
- 响应式设计
- 文章标签过滤
- 移动端适配
- 复制到剪贴板功能
- 🎵 **音乐播放器** - 固定在页面右下角的背景音乐播放器

## 音乐播放器

博客现在包含一个内置的音乐播放器：

- **位置**: 固定在页面右下角
- **功能**: 播放/暂停、上一首/下一首、进度控制、音量调节
- **播放列表**: 支持多个音乐轨道
- **交互**: 点击音乐图标展开/收起播放器

### 自定义音乐

编辑 `js/music-player.js` 中的 `playlist` 数组来添加您的音乐：

```javascript
const playlist = [
    {
        title: "歌曲名称",
        artist: "艺术家",
        src: "音乐文件URL", // 支持在线音频链接
        duration: "时长"
    }
    // 添加更多歌曲...
];
```

## 自定义内容

### 修改文章
编辑 `js/script.js` 中的 `blogPosts` 数组。

### 修改个人信息
编辑 `js/script.js` 中的 `siteConfig` 对象。

### 修改样式
编辑 `css/style.css`。

## 运行方式

直接在浏览器中打开 `index.html`，或使用本地服务器：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署

可以部署到任何静态托管服务，如：
- GitHub Pages
- Vercel
- Netlify

## 许可证

保留所有权利。
