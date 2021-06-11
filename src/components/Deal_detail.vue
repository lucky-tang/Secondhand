<template>
  <div>
    <mt-header title="确认订单" class="header">
      <router-link to="/" slot="left" >
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <section class="content">
      <!-- <span class="glyphicon glyphicon-map-marker address_icon"></span> -->
      <mt-cell
        title="填写交易地址"
        is-link
        :value="address"
        @click.native="fixAddress()"
        class="address_input"
      ></mt-cell>

      <div class="info">
        <div class="img">
          <img :src="img_src" alt="商品图片" />
        </div>

        <div class="detail">
          <p class="desc">{{ goods_desc }}</p>
          <span class="price">￥{{ price }}</span>
        </div>
      </div>
    </section>
    <div class="total">
      <span>合计:￥{{ price }}</span>
      <mt-button class="button">确认下单</mt-button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
// 同商品详情页面中的方法一样
import {get_goods_detail} from '../netWork/commodity_detail'
import {buy} from '../netWork/comfire_buy'

export default {
  data() {
    return {
      address: "",
      img_src: require("../assets/img/car.png"), //不用require，地址会被加载器解析成字符串,require走编译了
      goods_desc:
        "95新 没有明显划痕,哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或",
      price: 1234,
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    fixAddress() {
      MessageBox.prompt("请输入交易地址").then(({ value, action }) => {
        this.address = value;
      });
    },
    // 支付现金
    pay(){
      buy(address,customer_id,saler_id,goods_id).then(res=>{
        console.log(res)
      })
    }
  },
};
</script>
<style  scoped>
.header {
  background-color: white;
  color: #000;
}
.content {
  /* width: 94vw; */
  height: 85vh;
  background-color: rgb(245, 247, 248);
  padding: 2vw 2vw;
  z-index: -1;
}
.address_input{
  margin-bottom:2vh;
  border-radius: 5px;
}
.info{
  background-color: #fff;
  padding:3vw;
   border-radius: 5px;
}
.img,
.detail {
  display: inline-block;
  height: 12vh;
}
img {
  width: 25vw;
  height: 12vh;
  /* height: 100%; */
  border-radius: 10px;
}
.detail {
  position: absolute;
  width: 75vw;
  padding-left: 4vw;
  /* box-sizing: border-box; */
  
}

.desc,
.price {
  display: block;
  font-size: 1.4rem;
  width: 60vw;
}
.desc {
  white-space: nowrap;
  overflow: hidden;
  height: 3vh;
  text-overflow: ellipsis;
}
.price {
  height: 70%;
  box-sizing: border-box;
  color: red;
  padding-top: 8vw;
}
.total {
  font-size: 1.3rem;
  font-weight: bold;
  width: 100vw;
  position: fixed;
  bottom: 3vh;
  padding: 0 2vw;
}
.button {
  background-color: red;
  border-radius: 30px;
  color: white;
  margin-left: 50vw;
}
</style>