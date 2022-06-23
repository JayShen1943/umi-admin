/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-11-01 10:43:43
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-23 09:43:10
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    indent: 0, // 缩进风格
    'no-plusplus': 0, // 禁止使用++，--
    'no-redeclare': 2, // 禁止重复声明变量
    'no-unused-expressions': 2, // 禁止无用的表达式
    'no-const-assign': 2, // 禁止修改const声明的变量
    camelcase: 2, // 强制驼峰法命名
    'default-case': 2, // switch语句最后必须有default
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'prefer-const': 2, // 首选const
    'id-length': 0, // 变量名长度
    eqeqeq: 2, // 必须使用全等
    'no-var': 2, // 禁用var，用let和const代替
    'no-console': 1, // 禁止使用console
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 2, // 检查 effect 的依赖
    'no-unused-vars': 1, // js从未使用的变量
    '@typescript-eslint/no-unused-vars': ['off'], // ts从未使用的变量
    'prettier/prettier': 'off', // 关闭prettier
    '@typescript-eslint/no-shadow': 'off', // 关闭ts禁止变量声明与外层作用域的变量同名
    'react/no-array-index-key': 'off', //关 闭react禁止使用数组索引作为key
    'no-unused-expressions': 'off', // 关闭禁止无用的表达式
    '@typescript-eslint/no-unused-expressions': 'off', // 关闭ts禁止无用的表达式
    '@typescript-eslint/no-invalid-this': 'off',// 在类或类似类的对象之外禁止this
  },
};
