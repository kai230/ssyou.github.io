---
title: 如何使用Hexo更新博客文章
date: 2025-10-31 09:51:45
categories: 教程
tags: [Hexo, 博客, 教程, 使用指南]
description: 详细介绍如何使用Hexo框架创建、编辑和发布博客文章的完整教程。
---

# 如何使用Hexo更新博客文章

本文将详细介绍如何在Hexo博客中创建、编辑和发布新文章，帮助您轻松维护个人博客。

## 一、创建新文章

使用Hexo提供的命令行工具可以快速创建新文章：

```bash
hexo new "文章标题"
```

这个命令会在`source/_posts`目录下创建一个新的Markdown文件，并自动添加基本的前置元数据（front-matter）。

## 二、编辑文章内容

### 1. 前置元数据（Front-matter）

每个Hexo文章都以YAML格式的前置元数据开始，包含以下信息：

- `title`: 文章标题
- `date`: 文章日期
- `categories`: 文章分类
- `tags`: 文章标签（数组格式）
- `description`: 文章描述（用于SEO）

### 2. 文章正文

前置元数据后，可以使用Markdown语法编写文章内容。支持的语法包括：

- 标题（使用#号）
- 段落
- 列表（有序和无序）
- 代码块（使用```）
- 链接和图片
- 强调（粗体和斜体）

## 三、本地预览

编辑完成后，可以在本地预览文章效果：

```bash
hexo server
```

这个命令会启动一个本地服务器，通常运行在 http://localhost:4000，您可以在浏览器中访问并查看文章效果。

## 四、发布文章

确认文章内容无误后，可以发布到GitHub Pages：

```bash
hexo clean  # 清理之前生成的文件
hexo build  # 生成静态网站文件
hexo deploy # 部署到GitHub Pages
```

## 五、更新现有文章

要更新现有文章，只需：

1. 直接编辑`source/_posts`目录下的对应Markdown文件
2. 保存更改后，执行上述的发布命令

## 六、注意事项

- 文章保存为Markdown格式（.md）
- 图片可以放在文章同名的文件夹中（需启用post_asset_folder）
- 定期备份您的博客源文件
- 发布前最好先在本地预览效果

希望这篇教程对您管理Hexo博客有所帮助！
