# 主题补丁说明文档

本文档记录了对Butterfly主题进行的关键修改，以解决网页性能、安全和兼容性问题。这些修改通过两种方式实现：直接修改主题文件和使用自动化补丁脚本。

## 已解决的问题

### 1. 安全头部缺失
- 添加了 `X-Content-Type-Options: nosniff` 响应头
- 添加了 `Cache-Control: max-age=3600, public` 响应头

### 2. Viewport元标签问题
- 修复了viewport元标签格式，确保 `viewport-fit=cover` 参数正确设置

### 3. Favicon链接异常
- 修复了favicon链接显示为 `[object Object]` 的问题
- 确保正确加载 `/favicon.svg` 图标文件

## 修改方法

### 1. 直接修改主题文件（临时方案）

我们修改了主题的head.pug文件：

```pug
// 修改前
!=favicon_tag(theme.favicon || config.favicon)

// 修改后
link(rel="shortcut icon" href=url_for(theme.favicon && theme.favicon.small || config.favicon || '/favicon.svg'))
```

同时在head.pug中添加了安全头部：

```pug
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="Cache-Control" content="max-age=3600, public">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

### 2. 自动化补丁脚本（推荐方案）

为了防止主题更新导致修改丢失，我们创建了自动化补丁脚本：

1. 在 `source/theme-patches/head-patch.js` 中实现了自动应用安全头部的功能
2. 在 `_config.yml` 中添加了脚本引用，确保每次构建时自动执行

## 如何处理主题更新

当你更新Butterfly主题后，直接的主题文件修改将会丢失。此时自动化补丁脚本将继续工作，在每次构建时自动应用所需的修改。

### 验证补丁是否工作

构建网站后，检查生成的HTML文件头部是否包含以下元素：

```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="Cache-Control" content="max-age=3600, public">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<link rel="shortcut icon" href="/favicon.svg">
```

### 更新补丁脚本

如果未来需要添加新的头部标签或修改现有设置，请更新 `head-patch.js` 文件中的相应逻辑。

## 注意事项

1. 保持 `source/theme-patches/` 目录下的文件不要删除，这些包含了重要的定制化逻辑
2. 在更新主题前备份你的修改，以防自动化补丁脚本需要调整
3. 定期检查补丁脚本是否正常工作，特别是在Hexo或主题版本更新后

## 技术细节

补丁脚本使用Hexo的 `after_generate` 过滤器在生成静态文件后自动处理所有HTML文件，确保安全头部和其他优化正确应用。