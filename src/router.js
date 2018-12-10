
import Product from './views/product.vue'
import List from './views/list.vue'
import Cart from './views/cart.vue'
import Index from './views/index.vue'
import Category from './views/category/view.vue'
import OrderList from './views/orderlist/view.vue'
import My from './views/my/view.vue'
const routers=[
    {
        path:'/product/:id',
        meta:{
            title:'商品详情'
        },
        component: Product
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
            title:'购物车'
        },
        component: Cart
    }, {
        path:'/index',
        meta:{
            title:'首页'
        },
        component: Index
    },{
        path:'/category',
        meta:{
            title:'分类'
        },
        component: Category
    },{
        path:'/myself',
        meta:{
            title:'我的'
        },
        component: My
    },{
        path:'/orderlist/:id',
        meta:{
            title:'我的订单'
        },
        component: OrderList
    }
];
export default routers;
