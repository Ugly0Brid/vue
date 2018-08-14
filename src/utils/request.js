import Vue from 'vue'
import axios from 'axios'
import {Base64} from 'js-base64'
// function parseJSON (response) {
//   return response.data
// }
//
// // 将ajax请求封装
// function checkStatus (response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response
//   }
//   const error = new Error(response.statusText)
//   error.response = response
//   throw error
// return axios(params).then(checkStatus).then(parseJSON).then(data => ({data})).catch(err => ({err}))
// return new Promise(() => {
//   axios(params).then(checkStatus).then(parseJSON).then(data => ({data})).catch(err => ({err}))
// })
// }
const error = (rest) => {
  switch (rest.code) {
    case 401:
      location.href = '/'
      break
    case 500:
      Vue.prototype.$Message.error({content: rest.msg + '！', duration: 3})
      break
  }
}
const request = (params) => {
  let headers = {}
  headers.Authorization = 'Basic ' + Base64.encode(localStorage.getItem('username') + ':' + localStorage.getItem('token'))
  params.headers = headers
  return new Promise((resolve, reject) => {
    axios(params).then(function (rest) {
      rest = rest.data
      if (rest.code === 0) {
        resolve(rest)
      } else {
        error(rest)
      }
    }).catch(rest => {
      if (rest.response) {
        error(rest.response.data)
      }
    })
  })
}
export default request
