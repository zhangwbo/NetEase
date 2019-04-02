
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'

import store from './store'
import './mock/mockServer.js'

import Header from './components/Header/Header.vue'
import Swiper from './components/Swiper/Swiper.vue'

Vue.component('Header', Header)
Vue.component('Swiper', Swiper)

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router,// 配置路由
  store // Vuex管理仓库
})
