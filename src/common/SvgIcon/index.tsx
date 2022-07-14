/*
 * @Descripttion: SvgIcon组件
 * @Author: JayShen
 * @Date: 2022-06-23 17:55:58
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-14 16:37:34
*/
import React from 'react';
import classNames from 'classnames';
import style from "./index.module.less"
try {
    // 利用 webpack 提供的 require.context API 来创建自己的 context module 动态引入 icon
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    importAll(require.context('@/assets/svg', true, /\.svg$/));
} catch (error) {
    /* eslint-disable */
    console.error('importAll:', error);
}
type IconProps = {
    /** svg名称 */
    name: string;
    onClick?: () => void;
    color?: string;
    className?: string;
    size?: number;
    /** 鼠标移入为手 */
    pointer?: boolean
};
const SvgIcon: React.FC<IconProps> = ({ name, color, size = 30, onClick, className, pointer = false }) => {
    return (
        <svg
            onClick={onClick}
            className={classNames(style['svg-icon'], className)}
            style={{ color, fontSize: size && `${size}px`, cursor: pointer ? 'pointer' : 'auto' }}
        >
            <use xlinkHref={'#' + name} />
        </svg>
    );
};
export default SvgIcon;