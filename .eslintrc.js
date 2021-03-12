// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true,
    es6: true,
    node: true
  },

  parser: 'babel-eslint',
  // 配置解析器支持的语法
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  // required to lint *.vue files 使用 html参数
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // 开启 prettier 检查
    'generator-star-spacing': 'off', // 生成器函数*的前后空格
    'no-undef': 'error', // 禁止使用未定义的变量
    'no-unused-vars': 1,
    semi: ['error', 'always'], // 在结尾使用分号
    'no-extra-semi': 'error', // 不在尾部追加额外的分号，这个地方需要跟 prettier 的规则保持一致
    'space-before-function-paren': [
      // 函数的“(”前是否需要添加空格
      'error',
      {
        anonymous: 'never', // 匿名函数不需要
        named: 'never', // 有名函数不需要
        asyncArrow: 'always' // 箭头函数需要
      }
    ],
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    // 'no-console': 'error', // 禁止直接调用 console 系列函数
    'no-alert': 'error', // 禁止调用 alert 函数
    'no-debugger': 'error', // 禁止调用 debugger
    'no-implied-eval': 'error', // 在setTimeout(), setInterval() or execScript()中消除隐式eval的使用，如 setTimeout('alert("Hi!")', 100);
    'no-eval': 'error', // 禁止调用 eval 函数
    'no-empty': 'error', // 不允许出现空的代码块
    'no-unreachable': 2, // 禁止有执行不到的代码
    'nonblock-statement-body-position': ['error', 'below'], // 条件控制语句，执行部分必须另起一行
    curly: 'error', // if while 等条件控制语句后面必须有大括号
    'no-labels': [2, { allowLoop: false, allowSwitch: false }], // 禁止使用label语句，以避免无限循环
    'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'all', nestedBinaryExpressions: false }], // 禁止非必要的括号
    radix: 2, // parseInt必须指定第二个参数
    'no-restricted-syntax': [
      // 自定义规则，不允许直接调用 setTimeout， setInterval， execScript
      'error',
      // {
      //   selector: "CallExpression[callee.name='setTimeout']",
      //   message: 'Unexpected setTimeout.'
      // },
      // {
      //   selector: "CallExpression[callee.name='setInterval']",
      //   message: 'Unexpected setInterval.'
      // },
      {
        selector: "CallExpression[callee.name='execScript']",
        message: 'Unexpected execScript.'
      }
    ],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-target-blank': 1
  }
};
