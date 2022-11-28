import axios from "axios";

const http = axios.create({
  // 通用请求的地址前缀
  baseURL: '/api',
  timeout: 10000,//超时时间
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (err) {
  // 对请求错误做些什么
  return Promise.reject(err)
});
// 添加响应拦截器
http.interceptors.response.use(function (response) {
  return response
}, function (err) {
  return Promise.reject(err)
})

export default http