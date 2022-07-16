import { TMenuModelType } from "@/typings/models/menu"
import { users } from '@/services';
const HistoryNav: TMenuModelType = {
    namespace: 'menu',
    state: {
        /** 菜单栏 */
        menu: [],
        /** 历史菜单栏 */
        historyMenu: []
    },

    effects: {
        //方法，一般用来发请求，有两个参数，第一个为传递过来的参数，第二参数对应操作
        // call：执行异步函数
        // put：发出一个 Action，类似于 dispatch
        *getMenu({ payload }, { call, put }) {
            const res = yield call(users.getObjTest, { username: 111, password: 222 })
            if (res.code === 200) {
                yield put({ type: 'setMenu', payload: res.data })
            }
        }
    },
    subscriptions: {}, // 订阅数据源
    reducers: {
        setMenu(state, action) {
            state.menu = action.payload
        }
    }
}

export default HistoryNav