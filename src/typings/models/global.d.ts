/*
 * @Descripttion: 全局主要数据
 * @Author: JayShen
 * @Date: 2022-07-01 10:39:14
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 13:27:10
 */
import type { ImmerReducer } from 'umi';
export type GlobalModelState = {
    userInfo: Record<string, any>
    token: string;
    primaryColor: string
}

export type GlobalModelType = {
    namespace: string;
    state: GlobalModelState;
    effects: {
        // query: Effect;
    };
    reducers: {
        // 启用 immer 之后
        setUserInfo: ImmerReducer<GlobalModelState>;
        setToken: ImmerReducer<GlobalModelState>;
        setPrimaryColor: ImmerReducer<GlobalModelState>
    };
    subscriptions: any;
}
