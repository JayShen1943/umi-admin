/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-03 14:41:11
 */
import { defineConfig } from 'umi';
import theme from './src/theme/baseStyle';
import Routes from './src/routers';

export default defineConfig({
  title: '得体云',
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    //配置浏览器最低版本兼容ie11
    ie: 11,
  },
  routes: Routes,
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
  theme: {
    'primary-color': '#4086FF',
  },
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs',
    },
    {
      bar: 'foo',
    },
  ],
});
