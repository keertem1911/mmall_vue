
import Product from '../views/product.vue'
import List from '../views/list.vue'
import Shopping from '../pages/shopping/shopping.vue'
import Index from '../pages/index/index.vue'
import Category from '../pages/category/view.vue'
import OrderList from '../views/orderlist/view.vue'
import My from '../pages/my/view.vue'
import CommentList from '../views/comment/view'
import Login from '../pages/login/login'
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
        path:'/myself',
        meta:{
            title:'我的',
          showFooter:true,
          index:'myself'
        },
        children:[{
          path:'orderlist/:id',
          meta:{
            title:'我的订单'
          },
          component: OrderList
        },{
          path:'commentlist',
          meta:{
            title:'我的评论'
          },
          component: CommentList
        }],
        component: My
    },{
      path:'*',
      redirect:'/index'
  }
];
export default routers;
