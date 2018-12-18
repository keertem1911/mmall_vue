import ajax from '../common/httputil.js'
const BASE_URL='/api';
/**
 * 获取首页轮播图
 * {
 *     code:0,
 *     data:[
 *         {
 *         id:'',// 商品id
 *         image_url:''
 *         }
 *     ]
 * }
 */
export const reqBanners = ()=>ajax(`${BASE_URL}/banners`);
/**
 * 获取首页推荐item
 * {
 *     code:0,
 *     data: [
 *            {
 *              id:
 *             image_path: //图片
 *             name: //名称
 *             rating:// 评价
 *             recent_order_num://销售量
 *            }
 *         ]
 *
 * }
 */
export const reqIndexItems= ()=>ajax(`${BASE_URL}/indexItems`);
/**
 * 获取分类类别
 * {
 *     code:0,
 *     data:[
 *         {
 *             id:
 *             name:
 *         }
 *     ]
 * }
 */
export const reqCategorys= ()=>ajax(`${BASE_URL}/categorys`);
/**
 * 根据分类信息获取item
 * @param category
 * resp
 * {
 *     code:0,
 *     data:[
 *          {
 *              id:
 *             image_path: //图片
 *             category_id:
 *             name: //名称
 *             rating:// 评价
 *             recent_order_num://销售量
 *            }
 *     ]
 * }
 */
export const reqShopsByCategoryId= (categoryId)=>ajax(`${BASE_URL}/shops`,{categoryId});
/**
 * 发送短信验证码
 * @param phone 手机号码
 * success
 * {
 *     code:0
 * }
 * error
 * {
 *     code:101,
 *     msg:''
 * }
 */
export const reqSmsCode= (phone)=>ajax(`${BASE_URL}/login/sms_code`,{phone});
/**
 *短信验证码登陆
 * @param info
 * {
 *     phone:
 *     smsCode:
 * }
 * resp
 * {
    "code": 0,
    "data": {
      "id": "5a9cd9c6ad5b2d34d42b385d",
      "phone": ""
    }
  }
 */
export const reqLoginSms= (phone,smsCode)=> ajax(`${BASE_URL}/login_sms`,
  {
    phone,
    smsCode
  },'POST');

/**
 * 密码登陆
 * @param info
 * {
 *     name
 *     pwd
 *     captcha
 * }
 *
 * {
    "code": 0,
    "data": {
      "id": "5a9cd9c6ad5b2d34d42b385d",
      "name": "aaa"
    }
  }
 */
export const reqLoginPwd=(name,pwd,captcha)=>ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},'POST');

/**
 * 获取图片验证码
 * @param uuid 用户id
 * <svg>
 */
export const reqCaptcha= (uuid)=>ajax(`${BASE_URL}/captcha`,{uuid});

/**
 * 根据会话获取用户信息
 * * 获取成功
 {
    "code": 0,
    "data": {
      "_id": "5a9cd9c6ad5b2d34d42b385d",
      "phone": "13716962779"
    }
  }
 * 获取失败
 {
    "code": 1,
    "msg": "请先登陆"
  }
 */
export const reqUserInfo=()=>ajax(`${BASE_URL}/user/info`);

/**
 * 用户登出
 * {code: 0}
 */
export const reqLogOut = ()=>ajax(`${BASE_URL}/user/logout`);

/**
 * 添加购物车
 * {
 *    products:[
 *        {
 *          id:
 *          num:
 *          }
 *    ]
 * }
 * resp
 * s
 * {code:0}
 * e
 * {
 *  code:101,
 *  msg:"添加失败"
 *  }
 */
export const reqAddCar=(products)=>ajax(`${BASE_URL}/car`,{products},'post');
/**
 * 删除购物车
 * {
 *     products:["id1","id2"]
 * }
 */
export const reqRemoveCar= (products)=>ajax(`${BASE_URL}/car`,{products},'delete');
/**
 * 修改购物车数量
 * {
 *    products:[
 *        {
 *          id:
 *          num:
 *          }
 *    ]
 * }
 */
export const reqUpdateCar= (products)=>ajax('/api/car',products,'put');

/**
 * 获取购物车列表
 */
export const reqCars=()=>ajax('/api/car');

/**
 * 清空购物车信息
 */
export const reqClearCar=()=>ajax('/api/car/clear');
/**
 *
 * 更改密码
 * resp
 * {
 *     data:0
 * }
 * e
 * {
 *     data:10,
 *     msg:'原密码不正确'
 * }
 */
export const reqChangePwd=(oldPwd,newPwd)=>ajax('/api/changepwd',{oldPwd,newPwd},'put');
/**
 * 更改用户名
 * @param newname
 */
export const reqChangeName=(name)=>ajax('/api/user/name',{name},'put');

/**
 * 下单
 */
export const reqAddOrder=()=>ajax('/api/order',{},'post');
/**
 *
 * @param province 省份编码
 * @param city 城市编码
 * @param area 区域编码
 * @param text 详细地址
 * @param tag 标签 家 公司 .....
 * @param name 收件人
 * @param phone 电话
 * @param isdefault 是否默认
 */
export const reqAddAddress=(
  province,
  city,
  area,
  text,
  tag,
  name,
  phone,
  isdefault
)=>ajax('/api/address',
  {
    province,city,area,text,tag,name,phone,isdefault
  },'post');
