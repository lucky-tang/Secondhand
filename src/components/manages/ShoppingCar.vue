<template>
  <div>
    <mt-header title="购物车" class="header">
      <router-link to="/my" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <Null v-if="infos.length == 0"></Null>
    <div v-else>
      <div class="info" v-for="(item, index) in infos" :key="index">
        <div>
          <div class="img">
            <img src="../../assets/img/car.png" alt="商品图片" />
          </div>

          <div class="detail">
            <p class="desc">{{ item.commodity_describe }}</p>
            <span class="price">￥{{ item.price }}</span>
          </div>
        </div>
        <div>
          <mt-button class="remove_btn" type="primary" @click="remove_from_shoppingCar(item.commodity_id)">移除购物车</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get_shoppingCar_info } from "../../netWork/my";
import {remove} from '../../netWork/shoppingCar'
import Null from "../../common/Null";
export default {
  data() {
    return {
      infos: [
        {
          commodity_id:1,
          commodity_describe:'哈哈哈哈哈哈',
          price:100
        }
      ],
    };
  },

  components: {
    Null,
  },

  computed: {},

  mounted() {},

  methods: {
    get_shoppingCar_inofs() {
      get_shoppingCar_info(this.$store.state.user_id).then((res) => {
        infos = [...res.data.data];
      });
    },
    // 从购物车移除商品
    remove_from_shoppingCar(){
      this.$toast('移除成功')
    }
  },
};
</script>
<style  scoped>
.header {
  padding: 5vh 0 3vh 0;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #fff;
  color: black;
  border-bottom: rgb(243, 250, 253) 1px solid;
}
.info {
  background-color: #fff;
  padding: 3vw;
  border-radius: 5px;
  margin-top: 8vh;
  margin: 6vh 2vh 4vh;
  border: rgb(226, 217, 217) 2px solid;
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
  padding-top: 4vw;
}
.remove_btn{
  display: flex;
  margin:0 auto;
}
/* .btn-left{
  margin-left: 20vw;
  margin-top: 2vh;
}
.btn-right{
  margin-left: 20vw;
} */
</style>