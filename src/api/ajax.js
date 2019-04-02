
/**
 * 发送ajax请求的函数模块
 */

import axios from 'axios'

export default function ajax (url,data={},type='GET') {
  return new Promise((resolve,reject)=>{
    let promise
    if(type==='GET'){
      promise = axios.get(url,{
        params:data
      })
    }else {
      promise = axios.post(url,data)
    }

    promise.then(response =>{
      resolve(response.data)
    }).catch(error=>{
      console.log(error.message)
    })
  })
}





