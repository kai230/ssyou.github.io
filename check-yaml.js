const fs = require('fs');
const yaml = require('js-yaml');

try {
  const content = fs.readFileSync('_config.yml', 'utf8');
  const data = yaml.load(content);
  console.log('YAML格式正确！');
} catch (e) {
  console.error('YAML解析错误:', e.message);
  if (e.mark) {
    console.error('错误位置: 行', e.mark.line + 1, '列', e.mark.column + 1);
    // 显示错误行附近的内容
    const lines = content.split('\n');
    const errorLine = e.mark.line;
    const startLine = Math.max(0, errorLine - 2);
    const endLine = Math.min(lines.length - 1, errorLine + 2);
    
    console.error('\n错误行附近内容:');
    for (let i = startLine; i <= endLine; i++) {
      const prefix = i === errorLine ? '> ' : '  ';
      console.error(`${prefix}${i + 1}: ${lines[i]}`);
    }
  }
}