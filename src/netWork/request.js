import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios=axios//通过vue的原型来应用axios

// axios.defaults.withCredentials = false //允许跨域携带cookie信息
/*
  (一) 当前端配置withCredentials=true时, 后端配置Access-Control-Allow-Origin不能为*, 必须是相应地址

(二) 当配置withCredentials=true时, 后端需配置Access-Control-Allow-Credentials

(三) 当前端配置请求头时, 后端需要配置Access-Control-Allow-Headers为对应的请求头集合
 */

export function request(config){
    const instance=axios.create({
        baseURL:'http://192.168.137.215',
        timeout:6000,
        // axios默认是json数据
    })
    return instance(config)//instance 返回一个promise对象
}
/*
config包含如下：
{
    method:'post',
    url:'/flea/market/app/cart/commodity',
    data:{
        user_id:user_id,
        commodity_id:commodity_id
    }
}
=》
axios.create(
{
  baseURl:'http://xxxx',
  timeout:1000,
},
{
  methos:'post',
  url:/flea/mark/commodity,
  data:{//post用请求体，get用params
    user_id:user_id
}
})

*/