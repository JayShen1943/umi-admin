/*
 * @Descripttion: 路由配置文件
 * @Author: JayShen
 * @Date: 2021-11-02 16:08:09
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-23 14:16:23
 */
// import Home from '../pages/home'
// import authRoute from "@/utils/authRoute";
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
    wrappers: ['@/routers/authRouter'],
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
