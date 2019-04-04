
import {
  RECEIVE_TOPICNAV,
  RECEIVE_TOPICCONTENT
} from '../mutatin-type'

import {
  reqTopicNav,
  reqTopicContent
} from '../../api'



const state ={
  topicNav:{},
  topicContent:{}
}

const actions = {

  async getTopicNav ({commit,state},callback){
    const result = await reqTopicNav()

    if(result.code==='200'){
      const topicNav = result.data
      commit(RECEIVE_TOPICNAV,topicNav)
      typeof callback === 'function' && callback()
    }
  },

  async getTopicContent ({commit,state},callback){
    const result = await reqTopicContent()

    if(result.code==='200'){
      const topicContent = result.data
      commit(RECEIVE_TOPICCONTENT,topicContent)

      typeof callback === 'function' && callback()
    }
  }
}

const mutations = {

  [RECEIVE_TOPICNAV](state, topicNav){
    state.topicNav = topicNav
  },

  [RECEIVE_TOPICCONTENT](state, topicContent){
    state.topicContent = topicContent
  }
}
const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
