import axios from 'axios' // 封装axios
import { Toast } from 'vant';


const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16045780211039210286940161","bc":"310100"}'
  }
})

//拦截器intercetptor 作用是 axios请求的时候拦截一次，结束的时候拦截一次
http.interceptors.request.use(function (config) {
  // 显示loading
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    overlay: true,
    duration: 0 // 值为 0 时，toast 不会消失
  })

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // 停止加载
  Toast.clear()

  return response
}, function (error) {
 // 隐藏loading
  // 停止加载
  Toast.clear()
 
  return Promise.reject(error)
})

export default http
