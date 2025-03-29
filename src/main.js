import Vue from 'vue'
import App from './App.vue'
import Router from '@/router'
import ElementUI from 'element-ui';
import store from '@/store'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/app.less'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  store,
  router: Router
}).$mount('#app')
