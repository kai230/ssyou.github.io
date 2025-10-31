# AI好工具 - 免费AI工具推荐与中文教程

这是一个基于 Hexo 的静态博客网站，专注于推荐免费、开源的 AI 工具，涵盖写作、图像、编程、办公等多个领域，并提供详细的中文使用指南。

## 项目结构

```
ssyou.github.io/
├── .github/          # GitHub Actions 配置和依赖更新
├── scaffolds/        # Hexo 文章模板
├── source/           # 网站内容（Markdown 文件）
│   ├── _posts/       # 博客文章
│   ├── about/        # 关于页面
│   ├── 教程/         # 教程页面
│   ├── 免费资源/     # 资源页面
│   └── favicon.svg   # 网站图标
├── themes/           # 网站主题
│   └── butterfly/    # Butterfly 主题
├── theme-patches/    # 自定义主题补丁
├── _config.yml       # Hexo 主配置文件
├── _config.butterfly.yml # Butterfly 主题配置
└── package.json      # 项目依赖
```

## 快速开始

### 1. 环境准备

确保已安装 Node.js 和 npm。

### 2. 安装依赖

```bash
npm install
```

### 3. 本地开发

启动本地服务器进行预览：

```bash
hexo clean
hexo server
```

访问 http://localhost:4000 查看网站。

### 4. 构建与部署

构建静态网站：

```bash
hexo clean
hexo generate
```

使用 GitHub Actions 自动部署（推荐）或手动部署：

```bash
hexo deploy
```

## 主要功能

- 📝 **AI 写作工具**：推荐并详细介绍免费 AI 写作助手
- 🎨 **图像生成工具**：Stable Diffusion 等 AI 图像生成器使用指南
- 📚 **教程资源**：从入门到精通的 AI 工具使用教程
- 💡 **精选资源**：汇集高质量的免费 AI 学习资源和素材

## 自定义开发

### 添加新文章

```bash
hexo new "文章标题"
```

文章将创建在 `source/_posts/` 目录下。

### 主题自定义

主题自定义通过两种方式实现：
1. 修改 `_config.butterfly.yml` 配置文件
2. 使用 `theme-patches/head-patch.js` 自动化补丁脚本（详见该目录 README）

## 网站特色

- ✨ 响应式设计，适配各种设备
- 🔍 内置搜索功能
- 📱 移动端优化
- 🔒 安全头部配置
- ⚡ 性能优化

## 贡献指南

欢迎提交 Issue 或 Pull Request 来改进网站内容和功能。

## 许可证

[MIT](LICENSE)