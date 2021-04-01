import Vue from "vue";
import VueRouter from "vue-router";
import Mui from 'vue-awesome-mui';

// import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(Mui)

const routes = [
  {
    path: "/index",
    name: "Index",
    component: ()=>import("../components/Index_manage.vue"),
  },
  {
    path:'/',
    name:'Phone',
    component:()=>import('../components/phone.vue')
  }

];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
