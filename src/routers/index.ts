/*
 * @Descripttion: 路由配置文件
 * @Author: JayShen
 * @Date: 2021-11-02 16:08:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-04 18:59:24
 */
// import Home from '../pages/home'
const routes = [
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
        isKeepAlive: false,
        // customComponent: Demo
      },
      {
        title: 'home',
        path: '/home',
        exact: true,
        component: '@/pages/home',
        // customComponent: Home,
        isKeepAlive: false,
      },
    ],
  },
  // {
  //   title: 'demo',
  //   path: '/demo',
  //   exact: true,
  //   component: '@/pages/demo',
  //   // customComponent: Demo
  // },
  // {
  //   title: 'home',
  //   path: '/home',
  //   exact: true,
  //   component: '@/pages/home',
  //   // customComponent: Home,
  //   isKeepAlive: true,
  // },
];
export default routes;
