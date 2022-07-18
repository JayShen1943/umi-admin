/*
 * @Descripttion: 自定义DVA声明
 * @Author: JayShen
 * @Date: 2022-07-18 10:45:01
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 15:04:59
 */

import { GlobalModelState, GlobalModelType } from './global'
import { MenuModelState, MenuModelType } from './menu'
declare namespace DVA {
    /** DVA模块名称声明 */
    type Models = {
        global: GlobalModelState;
        menu: MenuModelState;
    }

    /** DVA Action声明 */
    type Action<T = any> = (action:
        {
            type: `global/${keyof (GlobalModelType['reducers'] & GlobalModelType['effects'])}`;
            payload?: T;
            [key: string]: any;
        } |
        {
            type: `menu/${keyof (MenuModelType['reducers'] & MenuModelType['effects'])}`;
            payload?: T;
            [key: string]: any;
        }
    ) => any;

}

export = DVA
export as namespace DVA

