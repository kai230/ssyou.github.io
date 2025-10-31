const fs = require('fs');
const yaml = require('js-yaml');

function checkYamlFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\nChecking ${filePath}...`);
    // 尝试解析YAML
    const result = yaml.load(content);
    console.log(`${filePath}: YAML is valid`);
    
    // 检查plugins配置是否存在
    if (result.plugins) {
      console.log('Plugins configuration exists:', result.plugins);
    } else {
      console.log('No plugins configuration found');
    }
  } catch (error) {
    console.error(`\nERROR in ${filePath}:`);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // 尝试定位错误行
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    // 显示可能的错误位置
    console.log('\nLast few lines of the file:');
    const lastLines = lines.slice(-20);
    lastLines.forEach((line, index) => {
      console.log(`${lines.length - 20 + index + 1}: ${line}`);
    });
  }
}

// 检查主要配置文件
console.log('Detailed YAML Check Started...');
checkYamlFile('./_config.yml');
checkYamlFile('./_config.butterfly.yml');
console.log('\nDetailed Check Completed.');