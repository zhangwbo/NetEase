/**
 * vuex核心管理对象store
 */

import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import category from './modules/category'
import topic from './modules/topic'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    category,
    topic,
    search
  }

})
