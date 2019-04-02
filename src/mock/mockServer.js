/**
 * 使用mockjs定义mock数据接口
 * */

import Mock from 'mockjs'
import homeData from './homeData.json'
import category from './category.json'
// import categoryList from './categoryList.json'
// import category from './category.json'

Mock.mock('/home', homeData)
Mock.mock('/item', category)
// Mock.mock('/goods', category)

console.log('mockserver')
