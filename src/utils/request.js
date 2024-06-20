import axios from 'axios'
// import {getToken} from './auth'
import Cookies from 'js-cookie'


const service = axios.create({
  baseURL:process.env.BASE_API,
  timeout:20000
})

service.defaults.withCredentials = false

service.interceptors.request.use(
  config =>{
    config.headers['x-header']=Cookies.get('x-header');
    console.log(Cookies.get('x-header'))
    return config;
  }
)


// respone拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
      const cookie = response.headers['Set-Cookie'];
    console.log(response.headers)
      if(cookie){
        document.cookie = cookie;
      }
      return response.data
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service

export function pageMessage(){
  return service.get("/test/query")
}


export function queryImg(){
  return service.get("/test/listFiles")
}

export function add(code,msg){
  return service.get("/test/add?code="+code+"&name="+msg)
}

export function login(data){
  return service.post("/user/registerOrLogin",data)
}



