/*
 * @Descripttion: Layout最外层布局文件
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-28 17:37:44
 */
import React, { useState } from 'react';
import { Layout, Menu, Spin, Button } from 'antd';
import type { MenuProps } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.less';
import { connect, history } from 'umi';
import { autoFixContext } from 'react-activation';
import LogoText from '@/assets/image/logoText.png';
import LogoOnly from '@/assets/image/logoOnly.png';
import globalConfig from "./globalConfig"
// 自动修复特定版本Context数据共享问题 (勿删！！！)
autoFixContext(
  [require('react/jsx-runtime'), 'jsx', 'jsxs', 'jsxDEV'],
  [require('react/jsx-dev-runtime'), 'jsx', 'jsxs', 'jsxDEV'],
);

const menuList = [
  {
    label: '菜单1',
    path: '/',
    key: '/',
    icon: <DesktopOutlined />,
    children: [
      {
        label: '子菜单1',
        path: '/keepAliveDemo',
        key: '/keepAliveDemo',
      },
    ],
  },
  {
    label: '菜单2',
    path: '/demo',
    key: '/demo',
    icon: <PieChartOutlined />,
  },
];
const navList = [
  {
    label: 'nav1',
    path: '/demo',
    key: '/nav1',
  },
  {
    label: 'nav2',
    path: '/demo',
    key: '/nav2',
  },
]
const { Content, Sider, Header } = Layout;
interface Iprops {
  children: any
}
const LayoutPage: React.FC<Iprops> = (props) => {
  globalConfig()
  const layoutLoading = false;
  const [leftSiderCollapsed, setLeftSiderCollapsed] = useState(false);
  // 菜单点击 
  const menuClick: MenuProps['onClick'] = e => {
    history.push(e.key);
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
            items={navList}
          />
        </Header>
        <Layout>
          <div
            className={
              'sider-warp' +
              ' ' +
              `${leftSiderCollapsed ? 'sider-warp__collapsed' : ''}`
            }
          />
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
              onClick={menuClick}
              theme="light"
              defaultSelectedKeys={['1']}
              mode="inline"
              className="left-menu"
              items={menuList}
            >
              {/* 此写法新版本报警告 */}
              {/* {menuList.map((item: any, index) => {
                if (item.children) {
                  return (
                    <SubMenu key={index} title={item.name} icon={item.icon}>
                      {item.children &&
                        item.children.map((KidItem: any) => {
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
              })} */}
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
