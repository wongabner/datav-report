module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,

  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    node: true
  },

  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果使用vscode应该可以避免出错
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'key-spacing': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': 'off',
    'indent': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'comma-spacing': 'off',
    'quotes': 'off',
    'padded-blocks': 'off',
    'object-curly-spacing': 'off',
    'prefer-const': 'off',
    'space-infix-ops': 'off',
  }
}
