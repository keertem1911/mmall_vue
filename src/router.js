const routers=[
    {
        path:'/product/:id',
        meta:{
            title:'商品详情'
        },
        component: (resolve)=>require(['./views/product.vue'],resolve)
    },{
        path: '/list',
        meta:{
            title: '商品列表'
        },
        component:(resolve)=>require(['./views/list.vue'],resolve)
    },
    {
        path:'/shopping',
        meta:{
            title:'购物车'
        },
        component: (resolve)=>require(['./views/cart.vue'],resolve)
    }, {
        path:'/index',
        meta:{
            title:'首页'
        },
        component: (resolve)=>require(['./views/index.vue'],resolve)
    },{
        path:'/category',
        meta:{
            title:'分类'
        },
        component: (resolve)=>require(['./views/category/view.vue'],resolve)
    },{
        path:'/myself',
        meta:{
            title:'我的'
        },
        component: (resolve)=>require(['./views/my.vue'],resolve)
    }
];
export default routers;
