/*
 * @Descripttion: dva 菜单模块
 * @Author: JayShen
 * @Date: 2022-07-16 10:44:46
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-16 12:05:38
 */
import type { ImmerReducer, Effect, Subscription } from 'umi';

type TMenuItem = {
    label: string;
    key: string;
    path: string;
    icon?: React.ReactNode | string;
    children?: Omit<TMenuItem, 'icon'>;
    [key: string]: any;
}

export type TMenuModelState = {
    menu: TMenuItem[]
    historyMenu: TMenuItem[];
}

export type TMenuModelType = {
    namespace: string;
    state: TMenuModelState;
    effects: {
        getMenu: Effect;
    };
    reducers: {
        // 启用 immer 之后
        setMenu: ImmerReducer<TMenuModelState>
    };
    // subscriptions: { setup: Subscription };
    subscriptions: any
}
