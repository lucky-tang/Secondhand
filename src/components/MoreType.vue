<template>
  <div class="all">
    <section id="top">
      <mt-header class="header">
        <span slot="left" class="back" @click="goBack()">
          <mt-button icon="back"></mt-button>
        </span>
      </mt-header>
      <mt-search
        v-model="inputValue"
        cancel-text="取消"
        placeholder="输入你正在寻找的宝贝"
        class="search"
      ></mt-search>
    </section>

    <section class="list">
      <div class="type">
        <ul>
          <li><router-link to="/moreType/phone">手机</router-link></li>
          <li><router-link to="/moreType/book">图书</router-link></li>
          <li><router-link to="/moreType/digital">数码</router-link></li>
          <li><router-link to="/moreType/clothes">服装鞋帽</router-link></li>
          <li><router-link to="/moreType/vehicle">交通工具</router-link></li>
          <li><router-link to="/moreType/indoor">家具家电</router-link></li>
          <li><router-link to="/moreType/labtop">平板电脑</router-link></li>
          <li>
            <router-link to="/moreType/toy_musical">玩具乐器</router-link>
          </li>
          <li><router-link to="/moreType/jewelry">珠宝配饰</router-link></li>
          <li><router-link to="/moreType/outdoor">户外运动</router-link></li>
          <li><router-link to="/moreType/antique">文玩玉翠</router-link></li>
          <li><router-link to="/moreType/car">汽车</router-link></li>
          <li><router-link to="/moreType/luxury">奢侈品</router-link></li>
          <li><router-link to="/moreType/other">其他</router-link></li>
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
    return {
      inputValue:'', 
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    goBack(){
      this.$router.go(-1);
    }
  },
};
</script>
<style  scoped>
.all {
  height: 100vh;
  background-color: rgb(218, 230, 235);
}
#top {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
}
#select {
  position: fixed;
  top: 11vh;
  width: 100vw;
}

.header {
  background-color: rgb(229, 251, 252);
  color: #000;
  padding: 10vw;
}
.back {
  position: fixed;
  left: 5vw;
  top: 5vw;
}
.search {
  width: 80vw;
  height: auto;
  position: fixed;
  left: 11vw;
  top: 5vw;
}
.list {
  display: flex;
  margin-top: 5vh;
}
li {
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
  margin: 4vw 1vw;
}
.type {
  margin-top: 5vh;
  display: block;
  height: 100vh;
  width: 35vw;
  overflow: scroll;
  background-color: rgb(250, 251, 251);
}
.type_detail {
  height: 100vh;
  display: inline-block;
  width: 65vw;
  background-color: #fff;
  margin-top: 5vh;
  overflow: scroll;
}
</style>