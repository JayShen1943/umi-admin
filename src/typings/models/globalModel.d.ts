import type { ImmerReducer } from 'umi';
export type TGlobalModelState = {
    userInfo: Record<string, any>
    token: string;
    primaryColor: string
}

export type TGlobalModelType = {
    namespace: string;
    state: TGlobalModelState;
    effects: {
        // query: Effect;
    };
    reducers: {
        // 启用 immer 之后
        setUserInfo: ImmerReducer<TGlobalModelState>;
        setToken: ImmerReducer<TGlobalModelState>;
        setPrimaryColor: ImmerReducer<TGlobalModelState>
    };
    subscriptions: any;
}
