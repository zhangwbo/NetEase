
import {RECEIVE_CATEGORY} from '../mutatin-type'
import {reqCategory} from '../../api'



const state ={
  category:[]
}

const actions = {
  async getCategory ({commit,state},callback){
    const result = await reqCategory()

    if(result){
      const category = result
      commit(RECEIVE_CATEGORY,category)
      typeof callback === 'function' && callback()
    }
  }
}

const mutations = {
  [RECEIVE_CATEGORY](state, category){
    state.category = category
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
