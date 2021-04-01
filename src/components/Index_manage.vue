<template>
  <div>
    <section id='tabbar'>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">管理员页面</a>
          </div>

          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a @click="$router.push('/contentManage')">商品审核</a></li>
              <li><a @click="$router.push('/userManage')" >用户管理</a></li>
               <li><a @click="$router.push('/removeManage')" >下架商品</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    <router-view></router-view>
    <!-- <content-manage v-if="first" class='content'></content-manage>
    <user-manage v-else class='user'></user-manage> -->
  </div>
</template>

<script>
import contentManage from "./Content_manage";
import userManage from "./User_manage";

export default {
  data() {
    return {

    };
  },

  components: {
    contentManage,
    userManage,
  },

  computed: {},

  mounted() {},

  methods: {

  },
};
</script>
<style  scoped>
.red{
    background-color: red;
}
#tabbar{
    position: fixed;
    z-index: 10;
    top:0;
    width: 100vw;
}
.content{
    padding-top: 10vh;
}
.user{
    margin-top:6vh;
}
.active{
    background-color: red;
}
</style>