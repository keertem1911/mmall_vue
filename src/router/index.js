import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './router.js'
Vue.use(VueRouter);

const RouterConfig= {
  mode:'history',
  routes: Routers
};
const router= new VueRouter(RouterConfig);

router.beforeEach((to,from,next)=>{
  window.document.title= to.meta.title;
  next();
});

router.afterEach((to,from,next) =>{
  window.scrollTo(0,0);
});
export default router;
