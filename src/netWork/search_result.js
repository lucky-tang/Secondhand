import {request} from '../netWork/request'

export function search(name){
    return (request({
        method:'get',
        url:'/flea/market/app/select/commodity',
        params:{
            name:name,
        }
    }))
}