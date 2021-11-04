/*
 * @Descripttion:外部基础布局卡片盒子
 * @Author: JayShen
 * @Date: 2021-11-03 15:46:04
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-04 18:03:35
 */
import { history } from 'umi';
import { useEffect, useState } from 'react';
import { string } from 'yargs';
import { keepaliveLifeCycle, addKeeperListener } from 'react-keepalive-router';
import { Button } from 'antd';
import CommonBox from '@/components/CommonBox';
const Home = (props: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  }, []);
  addKeeperListener((history: any) => {
    if (history.location.pathname === '/home') {
      console.log('当前激活状态缓存组件：' + history, '1次');
    }
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
export default Home;
