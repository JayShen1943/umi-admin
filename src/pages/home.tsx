/*
 * @Descripttion:keepAlive功能演示
 * @Author: JayShen
 * @Date: 2021-11-03 15:46:04
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-09 11:35:48
 */
import { history, KeepAlive, useActivate, useUnactivate } from 'umi';
import { useEffect, useState, createContext } from 'react';
import { Button } from 'antd';
import CommonBox from '@/components/CommonBox';
const { Provider, Consumer } = createContext();
const Home = (props: any) => {
  const [show, setShow] = useState(true);
  const toggle = () => setShow((show) => !show);
  return (
    <>
      <div>
        <Provider value={'接受到参数'}>
          {show && (
            <KeepAlive name="Test">
              <Consumer>
                {(context) => <Test contextValue={context} />}
              </Consumer>
              {/* <Test /> */}
            </KeepAlive>
          )}
          <button onClick={toggle}>显示/隐藏</button>
        </Provider>
      </div>
    </>
  );
};
function Test({ contextValue = null }) {
  const [count1, setCount1] = useState(0);
  return (
    <div>
      <p>count: {count1}</p>
      <Button onClick={() => setCount1((count) => count + 1)} type="primary">
        Add
      </Button>
      <p>contextValue: {contextValue}</p>
    </div>
  );
}
export default () => (
  // <KeepAlive>
  <Home />
  // </KeepAlive>
);
