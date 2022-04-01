import Vue from 'vue'
import App from './App.vue'
// 1.引入路由模块
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import { store } from './store/store.js'


// 2.使用路由
Vue.use(VueRouter)

// 配置全局默认路径
axios.defaults.baseURL = 'https://pizza-72f59-default-rtdb.firebaseio.com/';

// 配置Vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios;

// 4.实例化
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    // return { x: 0, y: 100 }
    // return { selector: '.btn' }
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})


new Vue({
  el: '#app',
  // 5.使用路由
  router,
  store,
  render: h => h(App)
})
