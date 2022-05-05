/*
 * @Descripttion: Layout最外层布局文件
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-05-05 15:28:13
 */
import { useEffect, useState } from 'react';
import { Layout, Menu, message, Spin, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import CommonBox from '@/components/CommonBox';
import './index.less';
import { history, Link, Route, Switch, KeepAlive, connect } from 'umi';
import { autoFixContext } from 'react-activation';
import LogoText from '@/assets/iconImage/logoText.png';
import LogoOnly from '@/assets/iconImage/logoOnly.png';
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
  const [leftSiderCollapsed, setLeftSiderCollapsed] = useState(false);
  const goDtail = (url: string) => {
    history.push(url);
  };

  return (
    <Spin spinning={layoutLoading}>
      <Layout className="layout-warp">
        <Header
          className={
            'header' + ' ' + `${leftSiderCollapsed ? 'header__collapsed' : ''}`
          }
        >
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
          <div
            className={
              'sider-warp' +
              ' ' +
              `${leftSiderCollapsed ? 'sider-warp__collapsed' : ''}`
            }
          ></div>
          <Sider
            className="sider"
            collapsed={leftSiderCollapsed}
            collapsedWidth="50"
            onCollapse={() => setLeftSiderCollapsed((t) => !t)}
          >
            {leftSiderCollapsed ? (
              <div className="logo-warp is-center">
                <img src={LogoOnly} alt="logo" className="logo-only" />
              </div>
            ) : (
              <div className="logo-warp">
                <img src={LogoText} alt="logo" className="logo-text" />
              </div>
            )}

            <Menu
              theme="light"
              defaultSelectedKeys={['1']}
              mode="inline"
              className="left-menu"
            >
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
            <div
              className="button-wapr"
              onClick={() => setLeftSiderCollapsed((t) => !t)}
            >
              <Button type="primary" size="middle" className="bottom-btn">
                {leftSiderCollapsed ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )}
              </Button>
            </div>
          </Sider>

          <Layout className="layout-right">
            <Content className="content">{props.children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </Spin>
  );
};
export default connect((index) => index)(LayoutPage);
