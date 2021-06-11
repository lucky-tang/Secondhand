import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin:false,
        // 用户账号
        user_id:'',
        // 数据库的id
        ID:'',
        // showTab:'',//通过变量确定tabbar是否显示,默认true
        type_choise:'选择分类',//发布商品时的类型选择
        search_log:[],
    
    },
    getters: {},
    mutations: {
        set_isLogin(state,isLogin){
            state.isLogin = isLogin;
        },
        
        set_userId(state,userId){
            state.user_id = userId;
        },
         set_ID(state,ID){
            state.ID = ID;
        },

        get_typeChoise(state,choise){
            state.type_choise=choise;
        },
        // set_showTab(state,isShow){
        //     state.showTab=isShow;
        // }
        add_search_log(state,search_log){
            state.search_log.push(search_log);
        },
        clear_search_log(state){
            state.search_log=[];
        }
    },
    actions: {
        // addAsync(context,n) {
        //     setTimeout(() => {
        //         context.commit('add',n)
        //     }, 2000)
        // },
        // reduAsync(context,n){
        //     setTimeout(()=>{
        //         context.commit('redu',n);
        //     },2000)
        // }
    },
    modules: {}

})
export default store