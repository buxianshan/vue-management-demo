import Vue from 'vue'
import App from './App.vue'
import { Button } from 'element-ui'
import router from '../router'

Vue.config.productionTip = false
Vue.use(Button)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
