import { MenuModelType } from "@/typings/models/menu"
import { users } from '@/services';
import { history } from 'umi';

const menuList = [
    {
        label: '菜单1',
        path: '/',
        key: '/',
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
    },
];
const HistoryNav: MenuModelType = {
    namespace: 'menu',
    state: {
        /** 菜单栏 */
        menu: menuList,
        /** 历史菜单栏 */
        historyMenu: [
            {
                label: '首页',
                path: '/home',
                key: '/hemo',
            },
        ]
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
        },
        // 插入历史菜单
        setHistoryMenu(state, action) {
            if (action.payload) {
                const path = action.payload.path
                const type = action.payload.type
                // 1.判断是否已有
                let repeat = false
                let delCurrent = 0
                state.historyMenu.forEach((item, index) => {
                    if (item.path === path) {
                        repeat = true
                        delCurrent = index
                    }
                })
                // 2.插入historyMenu中
                if (type === 'add') {
                    if (!repeat) {
                        const menu = state.menu
                        menu.forEach((item) => {
                            if (item?.children?.length) {
                                item.children.forEach((t: any) => {
                                    if (t.path === path) {
                                        state.historyMenu.push(t)
                                    }
                                })
                            } else {
                                if (item.path === path) {
                                    state.historyMenu.push(item)
                                }
                            }
                        })
                    }
                    // 3.删除选择的   
                } else if (type === 'del') {
                    state.historyMenu.splice(delCurrent, 1)
                    const jumpPath = state.historyMenu[state.historyMenu.length - 1]
                    history.push(jumpPath.path)
                }
            }

        }
    }
}

export default HistoryNav