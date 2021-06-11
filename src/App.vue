<template>
  <div id="app">
    <router-view />
    <Tabbar v-show="$route.meta.showTab"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./common/Tabbar";
// import { debounce, debounce1 } from "./common/common.js";
export default {
  name: "App",
  data() {
    return {
      msgFromApp: "小米",
      msgChild: "",
    };
  },
  created() {
    this.saveInfo();
  },
  methods: {
   

    saveInfo() {
      /*
          Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
          用法：Object.assign(target, ...sources)；
    */
      //在页面加载时读取sessionStore里的状态信息
      if (sessionStorage.getItem("store")) {
        this.$store.replaceState(
          //修改刷新后的state内容
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(sessionStorage.getItem("store"))
          )
        );
      }
      //在页面刷新时将vuex里的信息保存到sessionStorege里
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("store", JSON.stringify(this.$store.state));
      });
    },
    // pClick(msg) {
    //   this.msgChild = msg[0].name;
    // },
    // a() {
    //   console.log("防抖");
    // },
    // useDebounce() {
    //   debounce1(this.a, 1000);
    // }
  },
  components: {
    Tabbar,
  },
};
</script>

<style>
#app {
  font-size: 10px;
}
.is-active {
  color: #d5111b;
}
</style>
