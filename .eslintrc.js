module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint' //使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范，需要放在最后一项。
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser' //ESLint的解析器，用于解析TypeScript，从而检查和规范TypeScript代码。
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/dist/**', 'docs/*'],
      env: {
        jest: true
      }
    }
  ]
}
