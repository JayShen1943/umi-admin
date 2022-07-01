import type { ImmerReducer } from 'umi';
export interface GlobalModelState {
    userInfo: Record<string, any>
    token: string;
    primaryColor: string
}

export interface GlobalModelType {
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
