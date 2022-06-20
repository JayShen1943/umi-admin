/*
 * @Descripttion: 路由配置文件
 * @Author: JayShen
 * @Date: 2021-11-02 16:08:09
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-20 11:16:40
 */
// import Home from '../pages/home'
const routes = [
  {
    title: '登录',
    path: '/login',
    component: '@/pages/login',
  },
  {
    title: '首页',
    path: '/',
    component: '@/layout/index',

    // 所有路由都写到routes里面
    routes: [
      {
        title: 'demo',
        path: '/demo',
        exact: true,
        component: '@/pages/demo',
        // customComponent: Demo
      },
      {
        title: 'keepAliveDemo',
        path: '/keepAliveDemo',
        exact: true,
        component: '@/pages/keepAliveDemo',
        // customComponent: Home,
      },
    ],
  },
];
export default routes;
