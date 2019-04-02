/**
 *包含n个间接更新状态数据的对象
 */

import {
  reqHomeData,
  reqCategory
} from '../api'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORY
} from './mutatin-type'

export default {
  async getHomeData ({commit,state}){
    const result = await reqHomeData()

    if(result){
      const homeData = result
      commit(RECEIVE_HOMEDATA,homeData)
    }
  },

  async getCategory ({commit,state}){
    const result = await reqCategory()

    if(result){
      const category = result
      commit(RECEIVE_CATEGORY,category)
    }
  },
}
