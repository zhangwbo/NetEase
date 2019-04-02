
import {RECEIVE_HOMEDATA} from '../mutatin-type'
import {reqHomeData,} from '../../api'



const state ={
  homeData:[]
}

const actions = {

  async getHomeData ({commit,state}){
    const result = await reqHomeData()

    if(result){
      const homeData = result
      commit(RECEIVE_HOMEDATA,homeData)
    }
  }

}

const mutations = {

  [RECEIVE_HOMEDATA](state,homeData){
    state.homeData = homeData
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
