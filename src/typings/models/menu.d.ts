/*
 * @Descripttion: dva 菜单模块
 * @Author: JayShen
 * @Date: 2022-07-16 10:44:46
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 17:09:23
 */
import type { ImmerReducer, Effect, Subscription } from 'umi';

type MenuItem = {
    label: string;
    key: string;
    path: string;
    icon?: React.ReactNode | string;
    children?: Omit<MenuItem[], 'icon'>;
    // children?: any;
    [key: string]: any;
}

export type MenuModelState = {
    menu: MenuItem[]
    historyMenu: MenuItem[];
}

export type MenuModelType = {
    namespace: string;
    state: MenuModelState;
    effects: {
        getMenu: Effect;
    };
    reducers: {
        // 启用 immer 之后
        setMenu: ImmerReducer<MenuModelState>
        setHistoryMenu: ImmerReducer<MenuModelState>
    };
    // subscriptions: { setup: Subscription };
    subscriptions: any
}
