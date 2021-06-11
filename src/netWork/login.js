import {request} from './request'

export function login(phone_number,pwd){
    return request({
        method:'post',
        url:'/flea/market/app/login',
        data:{
            count:phone_number,
            password:pwd
        }
    })
}

export function find_pwd(phone_number,check_code){
    return request({
        method:'',
        url:'',
        data:{
            phone_number:phone_number,
            check_code:check_code,
        }
    })

}

export function get_check_code(phone_number){
    return request({
        method:'',
        url:'',
        data:{
             phone_number:phone_number,
        }
    })
}