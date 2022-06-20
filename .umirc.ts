/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-20 19:58:36
 */
import { defineConfig } from 'umi';
import Routes from './src/routers';
import theme from './src/styles/theme/variables';
import path from 'path';
export default defineConfig({
  // 别名配置
  // alias: {
  //   "@": resolve(__dirname, "./src"),
  // },
  title: '得体智造前台',
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
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
  theme: theme,
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs',
    },
  ],
  routes: Routes,
  // chainWebpack(config: any) {
  //   // 暂不可用！
  //   // 用svg-sprite-loader制作 svg-symbol，让我们可以直接使用 svg-use。
  //   config.module.rule('svg')
  //     .test(/\.svg$/i)
  //     .use('svg-sprite-loader')
  //     .loader(require.resolve('svg-sprite-loader'))
  // }
});
