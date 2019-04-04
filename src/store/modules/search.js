import {RECEIVE_SEARCH} from '../mutatin-type'
import {reqSearchContent} from '../../api'



const state ={
  searchContent:[]
}

const actions = {
  async getSearchContent ({commit,state}){
    const result = await reqSearchContent()

    if(result.code==='200'){
      const searchContent = result.data
      commit(RECEIVE_SEARCH,searchContent)

    }
  }
}

const mutations = {
  [RECEIVE_SEARCH](state, searchContent){
    state.searchContent = searchContent
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
