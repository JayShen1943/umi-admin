/*
 * @Descripttion:keepAlive功能演示
 * @Author: JayShen
 * @Date: 2021-11-03 15:46:04
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-28 17:46:52
 */
import { KeepAlive, } from 'umi';
import { useState, createContext } from 'react';
import { Button } from 'antd';
const { Provider, Consumer } = createContext({} as any);
const Home = () => {
  const [show, setShow] = useState(true);
  const toggle = () => setShow((show) => !show);
  return (
    <>
      <div>
        <Provider value={'接受到参数'}>
          {/* mfsu下会报错 */}
          {/* {show && (
            <KeepAlive name="Test">
              <Consumer>
                {(context) => <Test contextValue={context} />}
              </Consumer>
            </KeepAlive>
          )} */}
          {show}
          <Consumer>
            {(context) => <Test contextValue={context} />}
          </Consumer>
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
  <KeepAlive>
    <Home />
  </KeepAlive>
);
