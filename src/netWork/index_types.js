// 这是点击主页的各大分类的请求
import {request} from './request'

// 搜索物品
export function search_goods(goods_name){
    return request({
         method:'',
        url:'',
        data:{
            goods_name:goods_name
        }
    })
}

// 加载浏览的物品信息
export function download_goods_info(){
    return request({
        method:'',
        url:'',
        data:{}
    })
}

