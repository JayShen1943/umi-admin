/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-11-03 15:46:04
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-03 19:45:54
 */
import './home.less';
import { KeepAlive } from 'umi';
import { useEffect, useState } from 'react';
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="top">筛选框</div>
      <div className="main">
        主体
        <h1 style={{ margin: '190px 0px' }}>dva数据管理:</h1>
        <h1 style={{ margin: '190px 0px' }}>dva数据管理:</h1>
        <h1 style={{ margin: '190px 0px' }}>dva数据管理:</h1>
        <h1 style={{ margin: '190px 0px' }}>dva数据管理:</h1>
        <h1 style={{ margin: '190px 0px' }}>dva数据管理:</h1>
      </div>

      {/* <div>
                <p>count: {count}</p>
                <button onClick={() => setCount(count => count + 1)}>Add</button>
            </div> */}
    </>
  );
};
export default Home;
