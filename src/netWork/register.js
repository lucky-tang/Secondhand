import {request} from './request'

export function register(phone_number,pwd,userName){
    return request({
        method:'post',
        url:'/flea/market/app/register',
        data:{
            user_name:userName,
            count:phone_number,
            password:pwd,
        }
    })
}