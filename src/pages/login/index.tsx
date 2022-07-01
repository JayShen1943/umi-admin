/*
 * @Descripttion:登录页
 * @Author: JayShen
 * @Date: 2022-06-29 12:49:15
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 18:34:04
 */
import { useState } from 'react';
// import { SwapOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import style from './index.module.less';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { history, useDispatch } from 'umi';
import { loginUser } from '@/services/users';
import { rsaEncrypt } from '@/utils/tools';
interface PostData {
  telephone: string;
  password: string;
}
const Login = () => {
  const dispatch = useDispatch();
  // const [cutover, setCutover] = useState<Boolean>(true);
  const [postData, setPostData] = useState<PostData>({
    telephone: '',
    password: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  // 登录注册切换
  // const switchClick = () => {
  //   setCutover(!cutover);
  // };

  const submit = async () => {
    if (!postData.telephone) {
      message.error('请输入密码');
      return;
    }
    if (!postData.password) {
      message.error('请输入手机号');
      return;
    }
    const res = await loginUser({
      username: postData.telephone,
      password: rsaEncrypt(postData.password) as string,
    });
    if (res.code === 200) {
      dispatch({
        type: 'global/setUserInfo',
        payload: res.data,
      });
      dispatch({
        type: 'global/setToken',
        payload: res.data.token,
      });
      history.push('/');
      message.success('登录成功');
    } else {
      message.error(res.message);
    }
  };

  return (
    <div className={style.login}>
      <div className={style['login-warp']}>
        <div>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key='Login'
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames="fade"
            >
              <h2>{'Login'}</h2>
            </CSSTransition>
          </SwitchTransition>
          <form>
            <div className={style["input-warp"]}>
              <input
                type="text"
                name="telephone"
                onChange={onChange}
                autoComplete="off"
              />
              <label>Telephone</label>
            </div>
            <div className={style["input-warp"]}>
              <input
                type="password"
                name="password"
                onChange={onChange}
                autoComplete="off"
              />
              <label>Password</label>
            </div>
            <div className={style['btn-warp']}>
              <Button onClick={submit} className={style.btn}>
                Submit
              </Button>
              {/* <div className="icon" onClick={() => switchClick()}>
                {' '}
                <SwapOutlined />
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};
export default Login;
