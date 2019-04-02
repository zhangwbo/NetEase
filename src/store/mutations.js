/**
 *包含n个直接更新状态数据的对象
 */

import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORY
} from './mutatin-type'

export default {
  [RECEIVE_HOMEDATA](state,homeData){
    state.homeData = homeData
  },
  [RECEIVE_CATEGORY](state,category){
    state.category = category
  }
}
