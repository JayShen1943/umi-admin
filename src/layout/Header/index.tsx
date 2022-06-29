/*
 * @Descripttion: Header Ldayout
 * @Author: JayShen
 * @Date: 2022-06-29 10:25:22
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 18:39:19
 */
import React, { useEffect, useState } from "react";
import { Layout, Menu, Dropdown } from 'antd';
import { history, useStore } from 'umi';
import defaultImg from '@/assets/image/defaultImg.png'
import classNames from 'classnames';
import {
    DownOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import style from "./index.module.less"
type TProps = {
    leftSiderCollapsed: boolean
}
const Header: React.FC<TProps> = ({ leftSiderCollapsed }) => {
    const state = useStore();
    const { userInfo = {} } = state.getState().globalModel;
    const [userState, setUserState] = useState({} as any);
    // const [visible, setVisible] = useState(false);
    // 下拉菜单
    const init = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.replace('/login');
        }
        setUserState(userInfo);
    };
    // 退出登录
    const signOut = () => {
        localStorage.clear();
        history.replace('/login');
    };
    // 修改密码
    const updatePwdClick = () => {
        // setVisible(true);
    };
    useEffect(() => {
        init();
    }, []);
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
    return (
        <Layout.Header
            className={
                classNames(style.header, leftSiderCollapsed ? style.header__collapsed : '')
            }
        >
            <div className={style["nav-warp"]} />

            <Dropdown overlay={downMenu}>
                <div className={style["user-warp"]} onClick={(e) => e.preventDefault()}>
                    <img className={style.avatar} src={defaultImg} alt="avatar" />
                    <div className={style.username}>{userState.username}</div>
                    <DownOutlined className={style["down-icon"]} />
                </div>
            </Dropdown>
        </Layout.Header>
    )
}
export default Header