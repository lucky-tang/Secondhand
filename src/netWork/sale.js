// 这是买二手页面的请求
import {request} from './request'

export function upload_image(image){
    return request({
        method:'',
        url:'',
        data:{
            image:image
        }
    })
}


export function upload_info(appearance,sale_reason,feel,type,name,price){
    return request({
        method:'',
        url:'',
        data:{
            appearance:appearance,
            sale_reason:sale_reason,
            feel:feel,
            type:type,
            name:name,
            price:price
        }
    })
}