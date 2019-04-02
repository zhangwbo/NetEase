
/*
* 包含多个请求函数的模块
*/
import ajax from './ajax'

export const reqHomeData = () => ajax('/home')
export const reqCategory = () => ajax('/item')
