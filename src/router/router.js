
import Product from '../views/product/product.vue'
import List from '../views/list.vue'
import Shopping from '../pages/shopping/shopping.vue'
import Index from '../pages/index/index.vue'
import Category from '../pages/category/view.vue'
import My from '../pages/my/view.vue'
import CommentList from '../views/comment/view'
import Login from '../pages/login/login'
import Settings from '../pages/my/settings/view.vue'
import Address from '../pages/my/settings/address'
import AddressDetail from '../pages/my/settings/addressDetail'
import AccountPwd from '../pages/my/settings/accountpwd'
const  OrderListAll=()=> import('../pages/my/orderlist/all');
import OrderListMain from '../pages/my/orderlist/view'
const OrderListUnPlay= ()=> import('../pages/my/orderlist/unplay');
const OrderListUnReceive = ()=> import( '../pages/my/orderlist/unreceive');
const OrderListFinished = ()=> import('../pages/my/orderlist/finished');
const OrderListCanceled = ()=> import('../pages/my/orderlist/canneled');
const routers=[
    {
        path:'/product/:id',
        meta:{
            title:'商品详情',
        },
        component: Product
    }, {
        path:'/login',
        meta:{
            title:'登陆',
        },
        component: Login
    },{
        path: '/list',
        meta:{
            title: '商品列表'
        },
        component: List
    },
    {
        path:'/shopping',
        meta:{
            title:'购物车',
          showFooter:true,
          index:'shopping'
        },
        component: Shopping
    }, {
        path:'/index',
        meta:{
            title:'首页',
          showFooter:true,
          index:'index'
        },
        component: Index
    },{
        path:'/category',
        meta:{
            title:'分类',
          showFooter:true,
          index:'category'
        },
        component: Category
    },{
        path:'/commentlist',
        meta:{
            title:'我的评论',
        },
        component: CommentList
    },{
        path:'/myself',
        meta:{
            title:'我的',
          showFooter:true,
          index:'myself'
        },
        component: My
  },
  {
    path:'/settings',
    meta:{
      title:'我的设置',
    },
    component: Settings

  },
  {
    path: '/address',
    meta:{
      title:'地址管理',
    },
    component: Address
  }, {
    path: '/addressDetail',
    meta:{
      title:'地址编辑',
    },
    component: AddressDetail
  },
  {
    path: '/accountSecurity',
    meta:{
      title:'账户安全',
    },
    component: AccountPwd
  },
  {
    path:'/orders/:id',
    meta:{
      title:'订单'
    },
    component: OrderListMain,
    children: [  //这里就是二级路由的配置
      {
        path: '/orderlist/all',
        name: 'all',
        component: OrderListAll
      },{
        path: '/orderlist/unplay',
        name: 'unplay',
        component: OrderListUnPlay
      },{
        path: '/orderlist/unreceive',
        name: 'unreceive',
        component: OrderListUnReceive
      },{
        path: '/orderlist/finished',
        name: 'finished',
        component: OrderListFinished
      }
      ,{
        path: '/orderlist/cannceled',
        name: 'cannceled',
        component: OrderListCanceled
      }

    ]
  },
  {
  path:'/*',
    redirect:'/index'
  }
];
export default routers;
