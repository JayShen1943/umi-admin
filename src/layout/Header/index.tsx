/*
 * @Descripttion: Header Ldayout
 * @Author: JayShen
 * @Date: 2022-06-29 10:25:22
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 17:55:09
 */
import React from "react";
import { Layout, Menu, Dropdown } from 'antd';
import { useStore } from 'umi';
import defaultImg from '@/assets/image/defaultImg.png'
import classNames from 'classnames';
import {
    DownOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import style from "./index.module.less"
import { signOut } from "@/utils/tools"
type TProps = {
    leftSiderCollapsed: boolean
}
const Header: React.FC<TProps> = ({ leftSiderCollapsed }) => {
    const state = useStore();
    const { userInfo = {} } = state.getState().global;
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
                    <div className={style.username}>{userInfo.username || '默认姓名'}</div>
                    <DownOutlined className={style["down-icon"]} />
                </div>
            </Dropdown>
        </Layout.Header>
    )
}
export default Header