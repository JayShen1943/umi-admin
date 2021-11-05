/*
 * @Descripttion:keepAlive功能演示
 * @Author: JayShen
 * @Date: 2021-11-03 15:46:04
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-05 11:47:50
 */
import {
  history,
  KeepAlive,
  useActivate,
  useUnactivate,
  autoFixContext,
} from 'umi';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import CommonBox from '@/components/CommonBox';
const Home = (props: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  }, []);
  useActivate(() => {
    console.log('进入keepAlive');
  });
  useUnactivate(() => {
    console.log('离开keepAlive');
  });
  return (
    <>
      <CommonBox>
        <div>
          <p>count: {count}</p>
          <Button onClick={() => setCount((count) => count + 1)} type="primary">
            Add
          </Button>
        </div>
      </CommonBox>
    </>
  );
};
export default () => (
  // saveScrollPosition="screen" 保存容器滚动位置
  <KeepAlive>
    <Home />
  </KeepAlive>
);
