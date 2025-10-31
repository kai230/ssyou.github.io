// 自定义头部补丁脚本
// 用于在Hexo构建过程中自动应用安全头部和其他优化

const fs = require('fs');
const path = require('path');

hexo.extend.filter.register('after_generate', function() {
  // 修复所有HTML文件中的安全头部
  const publicDir = this.public_dir;
  
  function addSecurityHeaders(htmlPath) {
    try {
      let content = fs.readFileSync(htmlPath, 'utf8');
      
      // 确保有正确的X-Content-Type-Options头部
      if (!content.includes('X-Content-Type-Options')) {
        content = content.replace(
          /<meta http-equiv="X-UA-Compatible" content="IE=edge">/, 
          '<meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta http-equiv="X-Content-Type-Options" content="nosniff">'
        );
      }
      
      // 确保有正确的Cache-Control头部
      if (!content.includes('Cache-Control')) {
        content = content.replace(
          /<meta http-equiv="X-Content-Type-Options" content="nosniff">/, 
          '<meta http-equiv="X-Content-Type-Options" content="nosniff">\n    <meta http-equiv="Cache-Control" content="max-age=3600, public">'
        );
      }
      
      // 修复viewport元标签格式
      if (content.includes('viewport') && !content.includes('viewport-fit=cover')) {
        content = content.replace(
          /<meta name="viewport" content="[^"]*">/, 
          '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">'
        );
      }
      
      // 确保favicon链接正确
      if (content.includes('shortcut icon') && !content.includes('/favicon.svg')) {
        content = content.replace(
          /<link rel="shortcut icon" href="[^"]*">/, 
          '<link rel="shortcut icon" href="/favicon.svg">'
        );
      }
      
      fs.writeFileSync(htmlPath, content, 'utf8');
      console.log(`安全头部已应用到: ${htmlPath}`);
    } catch (error) {
      console.error(`应用安全头部失败: ${htmlPath}`, error);
    }
  }
  
  // 递归处理所有HTML文件
  function processDirectory(dir) {
    try {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        try {
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            processDirectory(filePath);
          } else if (file.endsWith('.html')) {
            addSecurityHeaders(filePath);
          }
        } catch (err) {
          console.error(`处理文件失败: ${filePath}`, err);
        }
      });
    } catch (err) {
      console.error(`读取目录失败: ${dir}`, err);
    }
  }
  
  // 开始处理
  processDirectory(publicDir);
}, 10);

// 记录补丁信息
console.log('主题安全补丁已加载');