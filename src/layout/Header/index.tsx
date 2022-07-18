/*
 * @Descripttion: Header Ldayout
 * @Author: JayShen
 * @Date: 2022-06-29 10:25:22
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 18:17:17
 */
import React from "react";
import { Layout, Menu, Dropdown } from 'antd';
import { useSelector, useLocation, history, useDispatch } from 'umi';
import defaultImg from '@/assets/image/defaultImg.png'
import classNames from 'classnames';
import {
    DownOutlined,
    CloseOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import style from "./index.module.less"
import { signOut } from "@/utils/tools"
import type { MenuItem } from "@/typings/models/menu"
type TProps = {
    leftSiderCollapsed: boolean
}
const Header: React.FC<TProps> = ({ leftSiderCollapsed }) => {
    const store = useSelector((state: DVA.Models) => state);
    const { userInfo } = store.global
    const { historyMenu } = store.menu
    const location = useLocation()
    const dispatch: DVA.Action = useDispatch()
    // const [visible, setVisible] = useState(false);
    // 修改密码
    const updatePwdClick = () => {
        // setVisible(true);
    };
    const downOptions = [
        {
            label: '修改密码',
            key: 'changePassword',
        },
        {
            label: '退出登录',
            key: 'signOut',
        },
    ]
    // 菜单点击 
    const menuClick: MenuProps['onClick'] = e => {
        if (e.key === 'changePassword') {
            updatePwdClick()
        } else if (e.key === 'signOut') {
            signOut()
        }
    };
    const downMenu = (
        <Menu items={downOptions} onClick={menuClick} />
    );
    // 历史栏点击
    const navClick = (item: MenuItem) => {
        if (location.pathname !== item.path) {
            history.push(item.path);
        }
    }
    const closeNav = (item: MenuItem) => {
        dispatch({
            type: 'menu/setHistoryMenu',
            payload: {
                type: 'del',
                path: item.path,
            }
        })

    }
    return (
        <Layout.Header
            className={
                classNames(style.header, leftSiderCollapsed ? style.header__collapsed : '')
            }
        >
            {/* 历史栏 */}
            <div className={style['top-bar']}>
                {
                    historyMenu.map((item: any) => {
                        return (
                            <div
                                onClick={() => menuClick(item)}
                                key={item.key}
                                className={classNames(style.nav, location.pathname === item.path ? style.nav__active : '')}
                            >
                                <span className={style.label} onClick={() => navClick(item)}>
                                    {item.label}
                                </span>
                                {
                                    item.path !== '/home' && <CloseOutlined onClick={() => closeNav(item)} className={style.close} />
                                }

                            </div>
                        )
                    })
                }

            </div>
            <div className={style["nav-warp"]} />
            <Dropdown overlay={downMenu}>
                <div className={style["user-warp"]} onClick={(e) => e.preventDefault()}>
                    <img className={style.avatar} src={defaultImg} alt="avatar" />
                    <div className={style.username}>{userInfo.username || '默认姓名'}</div>
                    <DownOutlined className={style["down-icon"]} />
                </div>
            </Dropdown>
        </Layout.Header>
    )
}
export default Header