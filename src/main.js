import Vue from 'vue'
import App from './app.vue'
import './style.css'
import store from './store'
import router from './router'
import {Button,Tabbar, TabItem,Header,Navbar,Radio,Cell,Field,Switch,Picker,Popup    } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mockServer'
Vue.component(Button.name,Button);
Vue.component(Header .name,Header );
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);
Vue.component(Radio.name, Radio );
Vue.component(Cell.name, Cell  );
Vue.component(Field.name, Field   );
Vue.component(Switch.name, Switch   );
Vue.component(Picker.name, Picker    );
Vue.component(Popup.name, Popup    );

new Vue({
    el: '#app',
    router,
    store,
    render: h=> h(App)
});
