

import {request} from './request'


export function searchByWord(word){
    return request({
        method:'get',
        url:'/flea/market/app/select/commodity',
        params:{
            name:word
        }
        
    })
}