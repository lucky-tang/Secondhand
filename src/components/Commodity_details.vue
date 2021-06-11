<template>
  <div>
    <mt-header title="商品详情" class="tabbar">
      <router-link to="/" slot="left" >
        <mt-button icon="back" >返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="callPopup()"></mt-button>
    </mt-header>

    <section>
      <mt-popup v-model="popupVisible" modal="false" class="popup">
        <p @click="$router.push('/selected')">收藏夹</p>
      </mt-popup>
    </section>

    <section class="content">
      <mt-swipe :auto="5000" class="swipe2">
        <mt-swipe-item >
          <img src="../assets/img/car.png" @click="click_from_swipe(item.wd)" />
        </mt-swipe-item>
      </mt-swipe>
      
      <div class="info">
        <p>￥{{ detail.price }}</p>
        <p><span>严选</span>{{ detail.commodity_describe }}</p>
      </div>
    </section>
    <section class="footer">
      <div class="left">
        <div class="left_item" @click="select()">
          <p
            class="glyphicon glyphicon-heart heart"
            aria-hidden="true"
            :class="{ select: isSelect }"
          ></p>
          <p >收藏</p>
        </div>
        
        <div class="left_item" @click="add_shoppingCar()">
          <p
            class=" glyphicon glyphicon-plus"
          ></p>
          <p >加入购物车</p>
        </div>

        <div class="left_item">
          <p
            class="glyphicon glyphicon-pencil"
          ></p>
          <p @click="$router.push('/interaction')">留言</p>
        </div>
        
      </div>

      <div class="right">
        <mt-button class="buy" @click.native="buy()"> 立即购买 </mt-button>
      </div>
    </section>
  </div>
</template>

<script>
import { Header } from "mint-ui";
import { Toast } from "mint-ui";

import {get_goods_detail,collect_goods,  add_shoppingCar} from '../netWork/commodity_detail'
export default {
  data() {
    return {
      popupVisible: false,
      topSwipe: [
        {
          src: require("../assets/img/car.png"),
          wd: "汽车",
        },
        {
          src: require("../assets/img/computer.png"),
          wd: "电脑",
        },
        {
          src: require("../assets/img/phone.png"),
          wd: "手机",
        },
      ],
      detail:[],
      // price: 100,
      // desc: "8成新，小米 小米6 4GB+64GB 亮黑色",
      isSelect: false,
    };
  },

  components: {
    Header,
  },

  computed: {},

  mounted() {
    this.get_detail()
  },

  methods: {
    // 收藏
    select() {
      this.isSelect = !this.isSelect;
      if (this.isSelect == true) {
        // this.$nextTick(() => {
          // Toast("收藏成功");
          collect_goods(this.$route.query.commodity_id, this.$store.state.ID).then(res=>{
            console.log(res.data.code)
            if(res.data.code == '200'){
              this.$toast('收藏成功')
            }else if(res.data.code == '400'){
              this.$toast('商品已收藏')
            }
          })
        // });
      }else{
        this.$toast('已取消收藏')
      }
    },
    // 加入购物车
    add_shoppingCar(){
      add_shoppingCar().then(res=>{
        console.log(res)
      })
    },

    // 获取详情
    // commodity_id 来自index页面的路由传参
    get_detail(){
      get_goods_detail(this.$route.query.commodity_id).then(res=>{
        console.log(res.data.data.commodityList)
        this.detail = res.data.data.commodityList
      })
    },

    callPopup() {
      this.popupVisible = !this.popupVisible;
    },

    buy(){
        // Toast('购买成功')
        this.$router.push('/deal_detail')
    }
  },
};
</script>
<style  scoped>
.tabbar {
  height: 8vh;
  padding-top: 3vh;
  background-color: #caffff;
  color: black;
  font-size: 1.4rem;
}
.popup {
  height: 5vh;
  width: 20vw;
  line-height: 5vh;
  position: fixed;
  top: 12vh;
  left: 84vw;
  text-align: center;
  border-radius: 10px;
}
/* 图片展示的swipe */
.swipe2 {
  text-align: center;
  height: 30vh;
  background-color: #fff;
  /* background: red; */
}
.swipe2 img {
  height: 100%;
  width: 100%;
}
.info {
  padding-left: 3vw;
}
/* nth-child:匹配其父元素的第能个子元素 */
/* p:nth-child: 规定属于其父元素的第二个子元素的每个 p 的 */
.content p:nth-child(1) {
  font-size: 2rem;
  color: red;
}
p:nth-child(2) {
  font-weight: bold;
  font-size: 1.2rem;
}
.content span {
  font-weight: bold;
  font-size: 1.2rem;
  background-color: black;
  color: white;
  border-radius: 3px;
  padding: 2px;
  margin-right: 2vw;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  background-color: #00ffff;
  box-sizing: border-box;
  /* padding:2px; */
}
.left{
    /* display: inline-block;
    position: fixed; */
    padding-top:2vh;
    left:0;
    bottom: 1vh;
}
.left_item{
    width: 20vw;
    float: left;
}
.left_item >p{
    vertical-align: bottom;
    text-align: center;
    width: 100%;
}

/* 如果选中收藏就应用.select样式 */
.select {
    font-size: 1.6rem;
  color: red;
}

.footer >.right{
    display: inline-block;
    position: fixed;
    right:6vw;
    bottom: 2.6vh;
}
.right > .buy{
    background-color: red;
    font-size: 1.4rem;
    color: white;
}

</style>