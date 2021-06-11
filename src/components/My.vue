<template>
  <div class="my">
    <section class="section1">
      <div class="topItem" v-if='login == false'>
        <img src="../assets/img/my.png" alt="头像" class="img-circle" />
        <span class="name" @click="$router.push('/login')"> 登录 </span>
      </div>
       <div class="topItem" v-else>
        <img src="../assets/img/my.png" alt="头像" class="img-circle" />
        <span class="name">{{$store.state.user_id}}</span> <span @click="getOut()">注销</span>
      </div>
      <div class="bottomItems">
        <router-link to="/shopping_car">
          <div class="item">
            <span>0</span>
            <span>购物车</span>
          </div>
        </router-link>
        <router-link to="/footprint">
          <div class="item">
            <span>0</span>
            <span>足迹</span>
          </div>
        </router-link>
        <router-link to="/bill">
          <div class="item">
            <span>0</span>
            <span>账单</span>
          </div>
        </router-link>
      </div>
    </section>
    <div class="deal">
      <p>我的交易</p>
      <div class="dealItems">
        <router-link to="/published">
          <div class="dealItem">
            <span>0</span>
            <span>我发布的</span>
          </div>
        </router-link>
        <!-- <router-link to="/bought">
          <div class="dealItem">
            <span>0</span>
            <span>我买到的</span>
          </div>
        </router-link> -->
        <router-link to="/saled">
          <div class="dealItem">
            <span>0</span>
            <span>我卖出的</span>
          </div>
        </router-link>
        <router-link to="/selected">
          <div class="dealItem">
            <span>0</span>
            <span>我收藏的</span>
          </div>
        </router-link>
      </div>
    </div>
    <section class="section2">
      <mt-cell title="个人资料" to="/userInfo" is-link></mt-cell>
      <mt-cell title="收货地址" to="/address" is-link></mt-cell>
       <mt-cell title="信誉积分" :value='credit' ></mt-cell>
    </section>
  </div>
</template>

<script>
import {get_shoppingCar_info,get_browsing_history,get_deal_record,get_publish_record,get_purchase_record,get_collections,get_score} from '../netWork/my'
export default {
  data() {
    return {
      login:'',
      credit:100
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.isLogin();
  },

  methods: {
    // 判断是否登录成功
    isLogin(){
      
      this.login = this.$store.state.isLogin;
      // console.log(this.login)
    },
    getOut(){
      this.$store.commit('set_isLogin',false)
      window.location.reload();
    },
    // 获取购物车商品信息
      get_shopping(){
        get_shoppingCar_info(phone_number).then(res=>{
          console.log(res)
        })
      },
      // 获取浏览记录
      get_browsing(){
        get_browsing_history(phone_number).then(res=>{
          console.log(res)
        })
      },
      // 获取交易记录
      get_deal(){
        get_deal_record(phone_number).then(res=>{
          console.log(res)
        })
      },
      // 获取发布记录
      get_publish(){
        get_publish_record(phone_number).then(res=>{
          console.log(res)
        })
      },
      // 获取购买记录
      get_purchase(){
        get_purchase_record(phone_number).then(res=>{

        })
      },
      // 获取收藏记录
      get_collections(){
        get_collection(phone_number).then(res=>{
          console.log(res)
        })
      },
      // 编辑头像
      edit_image(){
        fix_image(phone_number,image).then(res=>{
          console.log(res)
        })
      },


      get_credit(){
          get_score(phone_number).then(res=>{
            console.log(res)
          })
      }

  }
};
</script>

<style  scoped>
.my {
  width: 100vw;
  height: 100vh;
}
.section1 {
  width: 100vw;
  height: 20vh;
  padding-bottom: 30vh;
  background-color: rgb(35, 220, 192);
}
.topItem {
  padding: 4vh 0 2vh 5vw;
}
.topItem>img{
  height: 12vh;
  width: 16vw;
  border-radius: 15px;
}
.name {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2vh;
}
.bottomItems,
.dealItems {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
}
.item > span,
.dealItem > span {
  display: block;
  text-align: center;
  color: black;
}
.deal {
  height: 15vh;
  width: 90vw;
  margin: -5vw 5vw 0vh 5vw;
  padding-top: 1.6vh;
  position: absolute;
  z-index: 9;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 3px 3px #888888;
}
.deal > p {
  font-size: 1.6rem;
  font-weight: bold;
  margin: auto 2vh 2vh;
}
.section2 {
  height: 70vh;
  width: 100vw;
  background-color: rgb(239, 250, 252);
  z-index: 1;
  padding-top: 15vh;
}
</style>