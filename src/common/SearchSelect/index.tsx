/*
 * @Descripttion: 二次封装Antd下拉框，支持模糊音搜索
 * @Author: JayShen
 * @Date: 2022-07-13 14:46:25
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-14 14:09:30
 */
import React from "react";
import { Select } from 'antd'
import type { SelectProps } from 'antd'
import PinyinMatch from "pinyin-match";
type TProps = {
    width?: string
}
// const options: SelectProps['options'] = [];
// for (let i = 0; i < 5000; i++) {
//     const value = `${i.toString(36)}${i}`;
//     options.push({
//         label: value,
//         value,
//     });
// }
const SearchSelect: React.FC<SelectProps & TProps> = (props) => {
    const {
        width = '160px',
        showSearch = true,
        allowClear = true,
        options = [
            { label: '张三', value: 1 },
            { label: '李四', value: 2 }
        ]
    } = props
    return (
        <Select
            showSearch={showSearch}
            allowClear={allowClear}
            {
            ...props
            }
            filterOption={(input, option) => {
                // 首字母、模糊搜索
                return PinyinMatch.match(option?.label as string, input) ? true : false
            }
            }
            options={options}
            style={{ width: width }}
         />
    )
}

export default SearchSelect