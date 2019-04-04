
/*
* 包含多个请求函数的模块
*/
import ajax from './ajax'


export const reqHomeData = () => ajax('/home')
export const reqCategory = () => ajax('/item')

export const reqTopicNav = () => ajax('/api/topic/v1/find/getTabs.json')
export const reqTopicContent = () => ajax('/api/topic/v1/find/recManual.json')
export const reqSearchContent = () => ajax('/api/xhr/search/init.json')
export const reqSearch = (url) => ajax('/api'+ url)


