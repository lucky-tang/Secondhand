import {request} from './request'

// 购物车
export function get_shoppingCar_info(user_id,commodity_id){ //phone_number:用户id
return request({
    method:'post',
    url:'/flea/market/app/cart/commodity',
    data:{
        user_id:user_id,
        commodity_id:commodity_id
    }
})
}

export function get_browsing_history(phone_number){ //phone_number:用户id
return request({
    method:'',
    url:'',
    data:{
        phone_number:phone_number
    }
})
}
export function get_deal_record(phone_number){ //phone_number:用户id
return request({
    method:'',
    url:'',
    data:{
        phone_number:phone_number
    }
})
}
export function get_publish_record(phone_number){ //phone_number:用户id
return request({
    method:'get',
    url:'/flea/market/app/public/commodity',
    params:{
        user_id:phone_number
    }
})
}
export function get_purchase_record(phone_number){ //phone_number:用户id
return request({
    method:'',
    url:'',
    data:{
        phone_number:phone_number
    }
})
}

export function get_collections(phone_number){ //phone_number:用户id
return request({
    method:'get',
    url:`/flea/market/app/user/collect/get/${phone_number}`,
   
})
}


export function get_score(phone_number){ //phone_number:用户id,image:头像照片数据
return request({
    method:'',
    url:'',
    data:{
        phone_number:phone_number,
    }
})
}

// 获取用户信息
export function get_oneUser(userId){
    return request({
        method:'get',
        url:`/flea/market/app/personal/info/get/${userId}`,
    })
}

// 修改用户信息
export function fix_oneUser(user_id,user_name,user_age,user_gender,telephone,school){
    return request({
        method:'post',
        url:'/flea/market/app/update/personal/info',
        data:{
            user_id:user_id,
            user_name:user_name,
            user_age:user_age,
            user_gender:user_gender,
            telephone:telephone,
            school:school
        }
    })
}