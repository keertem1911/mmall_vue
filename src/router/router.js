
import Product from '../views/product/product.vue'
import List from '../views/list.vue'
import Shopping from '../pages/shopping/shopping.vue'
import Index from '../pages/index/index.vue'
import Category from '../pages/category/view.vue'
import My from '../pages/my/view.vue'
import CommentList from '../views/comment/view'
import Login from '../pages/login/login'
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
  },{
    path:'/orders/:name',
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
        name: 'unreceive',
        component: OrderListFinished
      },{
        path: '/orderlist/cannceled',
        name: 'unreceive',
        component: OrderListCanceled
      },
      {
        path: '',
        redirect: '/orderlist/all'
      }
    ]
  },{
  path:'/*',
    redirect:'/index'
  }
];
export default routers;
