/*
 * @Descripttion: Layout最外层布局文件
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 17:47:53
 */
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Spin, ConfigProvider } from 'antd';
import type { MenuProps } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import Header from "./Header"
import style from './index.module.less';
import { history, useDispatch, useSelector } from 'umi';
import { autoFixContext } from 'react-activation';
import LogoText from '@/assets/image/logoText.png';
import Logo from '@/assets/image/logo.png';
import globalConfig from "@/utils/globalConfig"
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
const { Content, Sider } = Layout;
const LayoutPage: React.FC = (props) => {
  const store = useSelector((state: DVA.Models) => state);
  const { primaryColor } = store.global
  const dispatch: DVA.Action = useDispatch();
  ConfigProvider.config({
    theme: { primaryColor: primaryColor, },
  });
  const layoutLoading = false;
  const [leftSiderCollapsed, setLeftSiderCollapsed] = useState(false);// 侧边栏是否收缩
  useEffect(() => {
    globalConfig()
  }, [])
  // 菜单点击 
  const menuClick: MenuProps['onClick'] = e => {
    history.push(e.key);
    dispatch({
      type: 'menu/setHistoryMenu',
      payload: {
        type: 'add',
        path: e.key,
      }
    })
  };
  return (
    <Spin spinning={layoutLoading}>
      <Layout className={style['layout-warp']}>
        <Header leftSiderCollapsed={leftSiderCollapsed} />
        <Layout>
          <div
            className={
              classNames(
                style['sider-warp'],
                leftSiderCollapsed ? style['sider-warp__collapsed'] : ''
              )
            }
          />
          <Sider
            className={style.sider}
            collapsed={leftSiderCollapsed}
            collapsedWidth="50"
            onCollapse={() => setLeftSiderCollapsed((t) => !t)}
          >
            {leftSiderCollapsed ? (
              <div className={classNames(style["logo-warp"], style["is-center"])}>
                < img src={Logo} alt="logo" className={style["logo-only"]} />
              </div>
            ) : (
              <div className={style["logo-warp"]}>
                <img src={LogoText} alt="logo" className={style["logo-text"]} />
              </div>
            )}

            <Menu
              onClick={menuClick}
              theme="light"
              defaultSelectedKeys={['1']}
              mode="inline"
              className={
                style["left-menu"]
              }
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
              className={style["collapsed-wapr"]}
              onClick={() => setLeftSiderCollapsed((t) => !t)}
            >
              <div className={style["collapsed-flex"]}>
                {leftSiderCollapsed ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )}
              </div>
            </div>
          </Sider>

          <Layout className={style["layout-right"]}>
            <Content className={style.content}>{props.children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </Spin >
  );
};
export default LayoutPage
// export default connect((global) => global)(LayoutPage);
