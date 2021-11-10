/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-10 11:56:41
 */
import { defineConfig } from 'umi';
import Routes from './src/routers';
import theme from './src/styles/theme/variables';
import path from 'path';
console.log(theme);

export default defineConfig({
  // 别名配置
  // alias: {
  //   "@": resolve(__dirname, "./src"),
  // },
  title: '得体云',
  plugins: ['@alitajs/plugin-theme'],
  dynamicTheme: {
    type: 'antd',
    // varFile: path.join(__dirname, '../src/default.less'),
    themeVariables: ['@brand-primary'],
  },
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    //配置浏览器最低版本兼容ie11
    ie: 11,
  },
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: true, // ant国际化
    title: true, // 页面标题国际化
  },
  antd: {},
  dva: {
    immer: true, // 方便修改 reducer
    hmr: true, // 热更新,
  },
  // theme: {
  //   '@brand-primary': 'green'
  // },
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs',
    },
  ],
  routes: Routes,
});
