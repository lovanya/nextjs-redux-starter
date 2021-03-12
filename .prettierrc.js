// https://prettier.io/docs/en/options.html

module.exports = {
  printWidth: 100, // 换行字符串阈值
  singleQuote: true, // 是否使用单引号，这个地方需要跟 eslint 的规则保持一致
  semi: true, // 是否在末尾加分号，这个地方需要跟 eslint 的规则保持一致
  trailingComma: 'none', //禁止随时添加逗号, 这个很重要
  arrowParens: 'avoid', // 箭头函数单个参数不加分号
};
