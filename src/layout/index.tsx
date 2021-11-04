/*
 * @Descripttion: Layout最外层布局文件
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-04 20:06:09
 */
import { useEffect, useState } from 'react';
import { Layout, Menu, message, Spin } from 'antd';
import Routes from '@/routers';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { connect } from 'dva';
import CommonBox from '@/components/CommonBox';
// import Demo from '@/pages/demo';
// import Home from '@/pages/home'
import './index.less';
import { history, Link, Route, Switch } from 'umi';
import {
  KeepaliveRouterSwitch,
  KeepaliveRoute,
  addKeeperListener,
} from 'react-keepalive-router';
import { BrowserRouter as Router } from 'react-router-dom';
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
            <Content className="content">
              {props.children}
              {/* <KeepaliveRouterSwitch>
                  <Route key={'123'} path={'/demo'} exact={true} component={Home}></Route>
                </KeepaliveRouterSwitch> */}
              {/* <KeepaliveRouterSwitch withoutRoute>
                  {
                    Routes[0].routes.map((item, index) => {
                      if (item.isKeepAlive) {
                        return <KeepaliveRoute key={index} path={item.path} component={item.component} exact={item.exact} />
                      } else {
                        return (<Route key={index} path={item.path} exact={item.exact} component={() => require(item.component)}></Route>)
                      }
                    })
                  }
                </KeepaliveRouterSwitch> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Spin>
  );
};
export default connect((index) => index)(LayoutPage);
