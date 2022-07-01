/*
 * @Descripttion: 各种demo范例
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-01 17:57:00
 */
import CommonBox from '@/common/CommonBox';
import { getObjTest } from '@/services/users';
import { getLocale, setLocale, useDispatch, useIntl, useSelector } from 'umi';
import style from "./demo.module.less"
import { debounce, formatImg } from '@/utils/tools';
import SvgIcon from '@/common/SvgIcon';
import ZoomImg from '@/common/ZoomImg';
import { Button, Input, Switch } from "antd"
const Demo = () => {
  const intl = useIntl();
  // connect写法
  // const { dispatch } = props;

  // hooks写法 获取model
  const dispatch = useDispatch();
  const store: any = useSelector(state => state)
  const { userInfo, primaryColor } = store.global
  const getData = debounce(() => {
    getObjTest({
      code: 0
    }).then((res) => {
      if (res.code === 200) {
      }
    });
  }, 0)

  // 主题颜色切换
  const changeColor = (value: string) => {
    dispatch({
      type: 'global/setPrimaryColor', //指定哪个 model 层里面的哪个 方法
      payload: value
      //需要传递到 model 层里面的参数。
    });
  };
  // 语言切换
  const clickLang = () => {
    if (getLocale() === 'zh-CN') {
      setLocale('en-US', false);
    } else {
      setLocale('zh-CN', false);
    }
  };
  const globalClick = () => {
    if (userInfo.name === '周杰伦') {
      dispatch({
        type: 'global/setUserInfo',
        payload: {
          name: '张国荣',
          age: 40,
          phone: 888888,
        },
      });
    } else {
      dispatch({
        type: 'global/setUserInfo',
        payload: {
          name: '周杰伦',
          age: 30,
          phone: 66666,
        },
      });
    }
  };
  const colorList = [
    {
      label: '默认蓝',
      value: '#1890FF'
    },
    {
      label: '宝强绿',
      value: '#25b864'
    },
    {
      label: '高级黑',
      value: '#040404'
    },
    {
      label: "迷人粉",
      value: '#F286AD'
    },
    {
      label: "基佬紫",
      value: '#A960C2'
    },
    {
      label: '柿子红',
      value: "#ff6a00"
    }
  ]
  const srcList = ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp']
  return (
    <div>
      <CommonBox marginGroup='20px 0px'>
        ZoomImg组件使用:
        <ZoomImg src={srcList[0]} marginGroup='0px 10px' isText={true} >
          <span className={style.view}>
            点击看图
          </span>
        </ZoomImg>
        <ZoomImg src={''} marginGroup='0px 10px' width={60} />
        <ZoomImg src={srcList[1]} srcList={srcList} width={160} />
      </CommonBox>
      <CommonBox marginGroup='20px 0px'>
        svg使用方式:
        <SvgIcon name='ceshi' />
      </CommonBox>
      <CommonBox marginGroup="20px 0px">
        <img src={formatImg('')} alt="" />
        <Button type='primary' onClick={() => getData()}>调取接口</Button>
      </CommonBox>
      <CommonBox >
        当前颜色：{primaryColor}
        <div>
          {
            colorList.map(item => {
              return (
                <div key={item.value} className={style.bgcolor} style={{ background: item.value }} onClick={() => changeColor(item.value)}>
                  <span className={style.text}>
                    {item.label}
                  </span>
                </div>
              )
            })
          }
        </div>
      </CommonBox>
      <CommonBox>
        主题组件展示：
        <div className='box'>
          <Input defaultChecked />
        </div>
        <div className='box'>
          <Switch defaultChecked />
          <Switch size="small" defaultChecked />
        </div>
        <div className='box'>
          <h1 className={style.view}>主题变色：</h1>
          <Button type='primary'>按钮</Button>
          <Button>无背景色</Button>
        </div>
      </CommonBox>
      <CommonBox marginGroup="20px 0px">
        <h1>dva数据管理（hooks）:</h1>
        <Button onClick={() => globalClick()}>个人信息修改</Button>
        <div>name：{userInfo.name}</div>
        <div>age：{userInfo.age}</div>
        <div>phone：{userInfo.phone}</div>
      </CommonBox>
      <CommonBox marginGroup="20px 0px" height="80px">
        <h1>国际化:</h1>
        <Button onClick={() => clickLang()}>换语言</Button>
        {intl.formatMessage(
          { id: 'WELCOME_TO_UMI_WORLD' },
          {
            name: '变量：',
          },
        )}
      </CommonBox>
    </div>
  );
};
const Warp = (props: any) => {
  // saveScrollPosition="screen" 保存容器滚动位置
  return (
    // <KeepAlive>
    <Demo {...props} />
    // </KeepAlive>
  );
};

export default Warp;

// 写法一 ：
// export default connect((all) => all)(Warp);

// 写法二
// export default connect(({ index, global }: any) => ({
//   index,
//   global,
// }))(Warp);

// 写法三
// function mapStateToProps(state: any) {
//   return {
//     primaryColor: state.global.primaryColor,
//     userInfo: state.global.userInfo
//   };
// }
// export default connect(mapStateToProps)(Warp);
