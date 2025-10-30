# AI好工具网站部署文件

此文件夹包含需要推送到 GitHub 仓库 `ssyou.github.io` 的所有文件。

## 文件夹内容

- **配置文件**：`_config.yml`、`_config.landscape.yml` - 网站主要配置
- **依赖配置**：`package.json`、`package-lock.json` - 项目依赖
- **内容文件**：`source/` 目录 - 包含文章和 CNAME 文件
- **模板文件**：`scaffolds/` 目录 - 文章模板
- **主题文件**：`themes/` 目录 - 网站主题
- **GitHub 配置**：`.github/` 目录 - 依赖更新配置
- **版本控制**：`.gitignore` - Git 忽略配置

## 推送步骤

1. 进入此文件夹：`cd e:\验证2\push-to-repo`
2. 初始化 Git（如果尚未初始化）：`git init`
3. 添加远程仓库：`git remote add origin https://github.com/ssyou/ssyou.github.io.git`
4. 添加所有文件：`git add .`
5. 提交更改：`git commit -m "初始化 Hexo 博客并添加首篇文章"`
6. 推送代码：`git push -u origin main`

## 部署静态网站

推送完成后，运行以下命令生成并部署静态网站：

```bash
npm install
hexo clean
hexo generate
hexo deploy
```

## 注意事项

- 确保已在 GitHub 上创建 `ssyou.github.io` 仓库
- 确保在 Cloudflare 中正确配置了 DNS 记录
- 首次部署需要 GitHub 个人访问令牌（PAT）