import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../../store/index'

const Search = () => import('../../common/Search.vue')
const Search_result=()=>import('../Search_result.vue')
const Login = () => import('../Login.vue')
const Register = () => import('../Register')

const Index = () => import('../Index.vue')
const Sale = () => import('../Sale.vue')
const My = () => import('../My.vue')
const UserInfo = () => import('../User_info')

const Publish_detail = () => import('../Publish_detail.vue')
const Type_list = () => import('../Type_list.vue')
const Address = () => import('../Address.vue')
const MoreType = ()=>import('../MoreType.vue')

// 发布商品时的选择商品类型
const Phone = () => import('../type_list_item/Phone.vue')
const Book = () => import('../type_list_item/Book.vue')
const Digital = () => import('../type_list_item/Digital.vue')
const Antique = () => import('../type_list_item/Antique.vue')
const Car = () => import('../type_list_item/Car.vue')
const Clothes = () => import('../type_list_item/Clothes')
const Other = () => import('../type_list_item/Other')
const Labtop = () => import('../type_list_item/Labtop')
const Toy_musical = () => import('../type_list_item/Toy_musical')
const Luxury = () => import('../type_list_item/Luxury')
const Jewelry = () => import('../type_list_item/Jewelry')
const Vehicle = () => import('../type_list_item/Vehicle')
const Outdoor = () => import('../type_list_item/Outdoor')
const Indoor = () => import('../type_list_item/Indoor')

// index页面的商品类型
const Phones = () => import('../goods/Phones')
const Computers=()=>import('../goods/Computers')
const Digitals = () => import('../goods/Digitals')
const Books = () => import('../goods/Books')
const Antiques =()=>import('../goods/Antiques')
const Cars = () => import('../goods/Cars')
const Clothings = () => import('../goods/Clothings')
const Jewelrys = () => import('../goods/Jewelrys')
const Indoors = () => import('../goods/Indoors')
const Outdoors = () => import('../goods/Outdoors')
const Luxurys = () => import('../goods/Luxurys')
const Toy_musicals = () => import('../goods/Toy_musicals')
const Others = () => import('../goods/Others')

// 我的页面下的几个页面
const Shopping_car =()=>import('../manages/ShoppingCar')
const Footprint=()=>import('../manages/Footprint')
const Bill=()=>import('../manages/Bill')
//我的页面下的我的交易模块的几个页面
const Published =()=>import('../manages/deal/Published')
const Saled =()=>import('../manages/deal/Saled')
const Bought=()=>import('../manages/deal/Bought')
const Selected =()=>import('../manages/deal/Selected')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'index',
        component: Index,
        meta:{
            showTab:true,
        }
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        component: UserInfo,
        meta: {
            showTab: false,
        }
    }
    ,
    {
        path: '/search',
        name: 'search',
        component: Search,
        meta:{
            showTab:false,
        },
        // beforeEnter(to,from,next){
        //     if(to.path==='/search'){
        //         store.commit("set_showTab", false);
        //         next();
        //     }
        // }
    },
    {
        path:'/search_result',
        name:'search_result',
        component:Search_result,
        //设置props为ture，代表将path后面的参数作为值，传递到组件中，组件中通过props属性接受这个值
        // props:true,
    },
    {
        path: '/sale',
        name: 'sale',
        component: Sale,
        meta: {
            showTab: false,
        }
    },
    {

        path: '/moreType',
        name: 'moreType',
        component: MoreType,
        children:[
             {
                path: 'phone',
                component: ()=>import('../more_type_list_item/Phone'),
            },
            {
                path: 'book',
                component: ()=>import('../more_type_list_item/Book'),
               
            },
            {
                path: 'digital',
                component: ()=>import('../more_type_list_item/Digital'),
              
            },
            {
                path: 'antique',
                component: ()=>import('../more_type_list_item/Antique'),
               
            }, {
                path: 'car',
                component: ()=>import('../more_type_list_item/Car'),
               
            },
            {
                path: 'other',
                component: ()=>import('../more_type_list_item/Other'),
              
            }
            ,
            {
                path: 'clothes',
                component: ()=>import('../more_type_list_item/Clothes'),
              
            }
            ,
            {
                path: 'labtop',
                component: ()=>import('../more_type_list_item/Labtop'),
               
            }
            ,
            {
                path: 'luxury',
                component: ()=>import('../more_type_list_item/Luxury'),
              
            },
            {
                path: 'vehicle',
                component: ()=>import('../more_type_list_item/Vehicle'),
               
            },
            {
                path: 'toy_musical',
                component: ()=>import('../more_type_list_item/Toy_musical'),
                
            },
            {
                path: 'jewelry',
                component: ()=>import('../more_type_list_item/Jewelry'),
            
            },
            {
                path: 'outdoor',
                component: ()=>import('../more_type_list_item/Outdoor.vue'),
             
            }
            ,
            {
                path: 'indoor',
                component: ()=>import('../more_type_list_item/Indoor.vue'),
            
            }
        ]

    },
    
    {
        path: '/publishDetail',
        name: 'publishDetail',
        component: Publish_detail
    },
    {
        path: '/my',
        name: 'my',
        component: My,
        meta:{
            showTab:true
        }
    },
    {
        path:'/indexManage',
        name:'indexManage',
        redirect:'contentManage',
        component:()=>import('../manager/Index_manage.vue'),
        children:[
    {
        path:'/contentManage',
        name:'contentManage',
        component:()=>import('../manager/Content_manage.vue')
    },
    {
        path:'/userManage',
        name:'userManage',
        component:()=>import('../manager/User_manage.vue')
    },
    {
        path:'/removeManage',
        name:'removeManage',
        component:()=>import('../manager/Remove_manage.vue')
    },
        ]

    },
    
    {
        path: '/commodityDetails',
        name: 'commodityDetails',
        component: ()=>import('../Commodity_details.vue'),
    },
    
    {
        path: '/login',
        name: 'login',
        component: Login,
         meta: {
            showTab: false,
        }
    }, {

        path: '/address',
        name: 'address',
        component: Address,
        meta: {
            showTab: false,
        }

    }, {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            showTab: false,
        }
    }, {
        path: '/type_list',
        name: 'type_list',
        component: Type_list,
        meta: {
            showTab: false,
        },
        children: [
            {
                path: 'phone',
                component: Phone,
            },
            {
                path: 'book',
                component: Book,
            },
            {
                path: 'digital',
                component: Digital,
            },
            {
                path: 'antique',
                component: Antique,
            }, {
                path: 'car',
                component: Car,
            },
            {
                path: 'other',
                component: Other,
            }
            ,
            {
                path: 'clothes',
                component: Clothes,
            }
            ,
            {
                path: 'labtop',
                component: Labtop,
            }
            ,
            {
                path: 'luxury',
                component: Luxury,
            },
            {
                path: 'vehicle',
                component: Vehicle,
            },
            {
                path: 'toy_musical',
                component: Toy_musical,
            },
            {
                path: 'jewelry',
                component: Jewelry,
            },
            {
                path: 'outdoor',
                component: Outdoor,
            }
            ,
            {
                path: 'indoor',
                component: Indoor,
            }
        ]
    },
     {
        path: '/phones',
        name: 'phones',
        component: Phones,
         meta: {
             showTab:false,
         }
    },
    {
        path: '/computers',
        name: 'computers',
        component: Computers
    },
    {
        path: '/digitals',
        name: 'digitals',
        component: Digitals
    },
    {
        path: '/books',
        name: 'books',
        component: Books
    },
    {
        path: '/antiques',
        name: 'antiques',
        component: Antiques
    },
    {
        path: '/cars',
        name: 'cars',
        component: Cars
    },
    {
        path: '/clothings',
        name: 'clothings',
        component: Clothings
    },
    {
        path: '/jewelrys',
        name: 'jewelrys',
        component: Jewelrys
    },
    {
        path: '/indoors',
        name: 'indoors',
        component: Indoors
    },
    {
        path: '/outdoors',
        name: 'Outdoors',
        component: Outdoors
    },
    {
        path: '/luxurys',
        name: 'luxurys',
        component: Luxurys
    },
    {
        path: '/toy_musicals',
        name: 'Toy_musicals',
        component: Toy_musicals
    },
    {
        path: '/others',
        name: 'others',
        component: Others
    },{
        path:'/shopping_car',
        name:'Shopping_car',
        component:Shopping_car,
    }
    ,{
        path:'/footprint',
        name:'Footprint',
        component:Footprint,
    },
    {
        path: '/bill',
        name: 'Bill',
        component: Bill,
    },
    {
        path: '/published',
        name: 'Published',
        component: Published,
    },
    {
        path: '/saled',
        name: 'Saled',
        component: Saled,
    },
    {
        path: '/bought',
        name: 'Bought',
        component: Bought,
    },
    {
        path: '/selected',
        name: 'Selected',
        component: Selected,
    },
    {
        path:'/interaction',
        name:'Interaction',
        component:()=>import('../Interaction')
    },
    {
        path:'/try',
        name:'Try',
        component:()=>import('../../common/try.vue')
    },{
        path:'/deal_detail',
        name:'Deal_detail',
        component:()=>import('../Deal_detail')
    },{
        path:'/find_password',
        name:'Find_password',
        component:()=>import('../Find_password')
    },{
        path:'/commodity_edit',
        name:'Commodity_edit',
        component:()=>import('../Commodity_edit')
    }

]
const router = new VueRouter({
    mode: 'hash',//路由配置默认是hash，也是HbuildX手机运行时模式
    routes,
    // linkActiveClass: 'is-active'
})

export default router