/*
 * @Descripttion: 路由配置文件
 * @Author: JayShen
 * @Date: 2021-11-02 16:08:09
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 16:44:22
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
    wrappers: ['@/utils/authRouter'],
    // 所有路由都写到routes里面
    routes: [
      {
        title: '子菜单1',
        path: '/demo',
        exact: true,
        component: '@/pages/demo',
        // customComponent: Demo
      },
      {
        title: '子菜单2',
        path: '/keepAliveDemo',
        exact: true,
        component: '@/pages/keepAliveDemo',
        // customComponent: Home,
      },
    ],
  },
];
export default routes;
