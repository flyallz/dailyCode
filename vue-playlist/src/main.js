// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
// import Users from './components/Users'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)


// 配置路由
const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/helloword", component: HelloWorld },
  ],
  mode: "history"
})

// 全局注册组件
// Vue.component("uses", Users);


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})

// indexedDB.html->main.js->App.vue