// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入at-ui
import AtComponents from 'at-ui'
import 'at-ui-style'
Vue.use(AtComponents)
//引入axios
import axios from 'axios'
Vue.prototype.$ajax = axios
// 引入随机字符串库
import randomstring  from 'randomstring'
Vue.prototype.randomstring = randomstring

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
