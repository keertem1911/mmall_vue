import Vue from 'vue'
import App from './app.vue'
import './style.css'
import store from './store'
import router from './router'
import {Button,Tabbar, TabItem,Header,Navbar  } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Button.name,Button);
Vue.component(Header .name,Header );
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);


new Vue({
    el: '#app',
    router,
    store,
    render: h=> h(App)
});
