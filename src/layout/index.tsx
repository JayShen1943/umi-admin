/*
 * @Descripttion: Layout最外层布局文件
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-05 17:21:38
 */
import { useEffect, useState } from 'react';
import { Layout, Menu, message, Spin } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { connect } from 'dva';
import CommonBox from '@/components/CommonBox';
import './index.less';
import { history, Link, Route, Switch, KeepAlive } from 'umi';
import { autoFixContext } from 'react-activation';
// 自动修复特定版本Context数据共享问题 (勿删！！！)
autoFixContext(
  [require('react/jsx-runtime'), 'jsx', 'jsxs', 'jsxDEV'],
  [require('react/jsx-dev-runtime'), 'jsx', 'jsxs', 'jsxDEV'],
);

const menuList = [
  {
    name: '菜单1',
    path: '/',
    icon: <DesktopOutlined />,
    children: [
      {
        name: '子菜单1',
        path: '/home',
      },
      {
        name: '子菜单2',
        path: '/demo',
      },
    ],
  },
  {
    name: '菜单2',
    path: '/demo',
    icon: <PieChartOutlined />,
  },
];
const { Content, Footer, Sider, Header } = Layout;
const { SubMenu } = Menu;
const LayoutPage = (props: any) => {
  const layoutLoading = false;
  const pageLoading = false;
  const [leftSiderCollapsed, setLeftSiderCollapsed] = useState(false);
  const { dispatch } = props;
  const { color } = props.index;
  const goDtail = (url: string) => {
    history.push(url);
  };

  return (
    <Spin spinning={layoutLoading}>
      <Layout className="layout-warp">
        <Header className="header">
          <div className="logo" />
          <Menu
            className="header-menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider
            className="sider"
            collapsed={leftSiderCollapsed}
            onCollapse={() => setLeftSiderCollapsed((t) => !t)}
          >
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {menuList.map((item: any, index) => {
                if (item.children) {
                  return (
                    <SubMenu key={index} title={item.name} icon={item.icon}>
                      {item.children &&
                        item.children.map((KidItem: any, kidIndex: number) => {
                          return (
                            <Menu.Item key={KidItem.path}>
                              {' '}
                              <Link to={KidItem.path}>{KidItem.name}</Link>
                            </Menu.Item>
                          );
                        })}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item key={index} icon={item.icon}>
                      <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          </Sider>
          <Layout className="layout-right">
            <KeepAlive when={true}>
              <Content className="content">{props.children}</Content>
            </KeepAlive>
          </Layout>
        </Layout>
      </Layout>
    </Spin>
  );
};
export default connect((index) => index)(LayoutPage);
