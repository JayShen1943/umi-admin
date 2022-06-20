/*
 * @Descripttion:外部基础布局卡片盒子
 * @Author: JayShen
 * @Date: 2021-11-03 15:46:04
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-20 11:49:38
 */
import React from 'react';
import './index.less';
interface Props {
  height?: string; // 高度
  minHeight?: string; // 最小高度（支持calc模式）
  marginGroup?: string; // margin
  paddingGroup?: string; // padding
  popperClass?: string; // 自定义类名
  children?: any;
}
const CommonBox: React.FC<Props> = (props) => {
  const {
    height,
    minHeight,
    marginGroup,
    paddingGroup = '10px',
    popperClass,
  } = props;
  return (
    <>
      {props.children && (
        <div
          className={'common-box' + ' ' + `${popperClass}`}
          style={{
            height: height,
            minHeight: minHeight,
            margin: marginGroup,
            padding: paddingGroup,
          }}
        >
          {props.children}
        </div>
      )}
    </>
  );
};
export default CommonBox;
