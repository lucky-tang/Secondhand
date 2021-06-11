import {request} from '../netWork/request'

export function get_one_commodity(commodity_id){
    return(request({
        method:'get',
        url:`/flea/market/app/commodity/info/${commodity_id}`,
        params:{
            commodity_id:commodity_id
        }
    }))
}