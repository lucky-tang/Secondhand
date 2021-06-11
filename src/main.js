import Vue from 'vue'
import App from './App.vue'
import router from './components/Router/index'
import store from './store/index'
import MintUI from 'mint-ui'
import mui from 'vue-awesome-mui'

import 'mint-ui/lib/style.css'
// 引入normalize.css
import './assets/css/normalize.css'
Vue.use(MintUI);
Vue.use(mui)

Vue.config.productionTip = false

// 设置自定义指令
Vue.directive('dir2', {
  inserted(el) {
    console.log(el);
  }
})
Vue.directive('dir3', {
  inserted(el) {
    el.style.width = "200px";
    el.style.height = "200px";
    el.style.background = "red";
  }
})


/**
 * 双击或双滑动退出App
 * 
 */
// mui.init({
//     keyEventBind: {
//         backbutton: true  //关闭back按键监听
//     }
// });
// //首页返回键处理
// //处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {
    //首次按键，提示‘再按一次退出应用’
    if (!first) {
        first = new Date().getTime();//记录第一次按下回退键的时间
        mui.toast('再按一次退出应用');//给出提示
        history.go(-1)//回退到上一页面
        setTimeout(function() {//1s中后清除
            first = null;
        }, 1000);
    } else {
        if (new Date().getTime() - first < 1000) {//如果两次按下的时间小于1s，
            plus.runtime.quit();//那么就退出app
} } };



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



// 路由钩子函数练习
router.beforeEach((to, from, next) => {
  // if (to.path !== '/search') {
  //   store.commit("set_showTab", true);
  //   console.log('tosearch')
  // }
  next() //如果要跳转的话，一定要写上next(),不写的话，不会跳转
  //next(false) //取消了导航
})
