// 这里是确定商品信息及下单页面

import {request} from './request'

// export function get_goods_info(goods_id)  此方法在commodity_detail中有

export function buy(address,good_id,customer_phone,saler_phone){
    return request({
        method:'post',
        url:'',
        data:{
        address:address,
        good_id:good_id,
        customer_phone:customer_phone,
        saler_phone:saler_phone
        }
        
    })
}