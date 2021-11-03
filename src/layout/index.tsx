/*
 * @Descripttion: Layout最外层布局文件
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-03 19:08:04
 */
import { useEffect, useState } from 'react';
import { Layout, Menu, message, Spin } from 'antd';
import { AliveScope } from 'react-activation';
import Routes from '@/routers';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { connect } from 'dva';
import Home from '@/pages/home';
import Demo from '@/pages/demo';
import './index.less';
import { history, Link, KeepAlive, Route, Switch } from 'umi';
const routerList = [
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
    <AliveScope>
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
                {routerList.map((item: any, index) => {
                  if (item.children) {
                    return (
                      <SubMenu key={index} title={item.name} icon={item.icon}>
                        {item.children &&
                          item.children.map(
                            (KidItem: any, kidIndex: number) => {
                              return (
                                <Menu.Item key={KidItem.path}>
                                  {' '}
                                  <Link to={KidItem.path}>{KidItem.name}</Link>
                                </Menu.Item>
                              );
                            },
                          )}
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
                <Switch>
                  <KeepAlive when={true}>
                    <Route path="/demo" component={Demo} exact={true} />

                    <Route path="/home" component={Home} exact={true} />
                  </KeepAlive>
                </Switch>
                {/* {
                Routes.map((item, index) => {
                  item.routes.map(t => {
                    return (
                      <div>{props.children}</div>
                    )
                    if (t.path === history.location.pathname) {
                      if (t.isKeepAlive) {
                        return (
                          <KeepAlive when={true}>
                            <Content className="content">
                              {props.children}
                            </Content>
                          </KeepAlive>
                        )
                      } else {
                        return (
                          <div>{props.children}</div>
                        )
                      }
                    }
                  })
                })
              } */}
              </Content>
              {/* <Spin size="large" spinning={pageLoading}>
              <Content className="content">

                {
                  history.location.pathname === '/home' ? (<KeepAlive when={true}>
                    <Home />
                  </KeepAlive>) : (<Demo />)
                }


              </Content>
            </Spin> */}
            </Layout>
          </Layout>
        </Layout>
      </Spin>
    </AliveScope>
  );
};
export default connect((index) => index)(LayoutPage);
