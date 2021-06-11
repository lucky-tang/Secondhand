import { request } from './request'

// export function sendMsg(msg) {
//     return request({
//         methods: '',
//         url: '',//后端对应接口名
//         data: {
//             msg:msg
//         }
//     })
// }

export function download_goods_info(){
    
    return request({
        method:'get',
        url:'/flea/market/app/commodity/home',
        // data:{}
    })
}