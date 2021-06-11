<template>
  <div>
    <mt-header title="宝贝分类" class="header">
      <router-link to="/publishDetail" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <section class="list">
      <div class="type">
        <ul>
          <li><router-link to="/type_list/phone">手机</router-link></li>
          <li><router-link to='/type_list/book'>图书</router-link></li>
          <li><router-link to='/type_list/digital'>数码</router-link></li>
          <li><router-link to='/type_list/clothes'>服装鞋帽</router-link></li>
          <li><router-link to='/type_list/vehicle'>交通工具</router-link></li>
          <li><router-link to='/type_list/indoor'>家具家电</router-link></li>
          <li><router-link to='/type_list/labtop'>平板电脑</router-link></li>
          <li><router-link to='/type_list/toy_musical'>玩具乐器</router-link></li>
          <li><router-link to='/type_list/jewelry'>珠宝配饰</router-link></li>
          <li><router-link to='/type_list/outdoor'>户外运动</router-link></li>
          <li><router-link to='/type_list/antique'>文玩玉翠</router-link></li>
          <li><router-link to='/type_list/car'>汽车</router-link></li>
          <li><router-link to='/type_list/luxury'>奢侈品</router-link></li>
          <li><router-link to='/type_list/other'>其他</router-link></li>
        </ul>
      </div>
       
      <div class="type_detail">
       <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {

  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style  scoped>
.header {
  /* height: 30vh; */
  background-color:#fff;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  padding-top: 3vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9;
}
.list {
  display: flex;
  margin-top:5vh;
}
li {
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
  margin: 4vw 1vw ;
}
.type {
  margin-top:5vh;
  display: block;
  height: 100vh;
  width: 35vw;
  overflow: scroll;
  background-color: rgb(250, 251, 251);
 
}
.type_detail {
  display: inline-block;
  width: 65vw;
   background-color: #fff;
  margin-top: 5vh;
  overflow: scroll;
}
</style>