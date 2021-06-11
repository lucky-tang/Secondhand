import {request} from '../netWork/request'

export function upload_info( describe,type,price,name){
    return request({
        method:'',
        url:'',
        data:{
            commodity_describe:describe,
            commodity_type:type,
            price:price,
            commodity_name:name
        }
    })
}