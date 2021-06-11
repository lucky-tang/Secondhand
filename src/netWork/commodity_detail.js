// 商品详情页面

import {request} from './request'

// 获取指定id商品
export function get_goods_detail(commodity_id){
    return request({
        method:'get',
        url:`/flea/market/app/commodity/info/${commodity_id}`,
    })
}

export function collect_goods(goods_id,user_id){
    console.log(goods_id);
    console.log(user_id);
    return request({
        method:'post',
        url:'/flea/market/app/collect/commodity',
        data:{
            commodity_id:goods_id,
            user_id:user_id
        }
    })
}

// 加入购物车
export function add_shoppingCar(){
    
}