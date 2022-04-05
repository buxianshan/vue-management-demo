import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Container, Header, Main, Aside, Menu, Submenu, MenuItem, MenuItemGroup} from 'element-ui'
import router from '../router'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
