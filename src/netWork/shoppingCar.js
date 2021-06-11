import {request} from './request'

export function remove(commodity_id){
    return request({
    method:'get',
    url:`/flea/market/app/down/commodity/${commodity_id}`,
    params:{
        commodity_id:commodity_id,
    }
})
}