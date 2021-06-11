<template>
  <div>
    <mt-header title="我的地址" class="header">
      <router-link to="/my" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <section>
      <Nothing v-if="isNothing === true">
        <div class="No" @click="load()">
          <img src="../assets/img/add.png" class="no" />
          <p>您尚未添加收货地址</p>
        </div>
      </Nothing>

      <div class="content" v-else>
        <mt-cell title="交易地址"> {{ addr }}</mt-cell>
      </div>

      <mt-button
        size="normal"
        class="addAddress"
        :value="addr"
        @click.native="addNewAddr()"
        >添加新地址</mt-button
      >
    </section>
  </div>
</template>

<script>
import Nothing from "../common/Nothing.vue";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      isNothing: true,
      addr: "",
    };
  },

  components: {
    Nothing,
  },
  created() {
    // this.change();
     this.getAddress()
  },
  computed: {},

  mounted() {
    this.getAddress()
  },

  methods: {
    change() {
      this.isNothing = false;
    },
    load() {
      this.$toast({
        message: "没有任何东西",
      });
    },
    addNewAddr() {
      MessageBox.prompt("请输入收货地址").then(({ value, action }) => {
        this.isNothing = false;
        this.addr = value;
        localStorage.setItem('address',value)
        console.log(localStorage.address)
      });
    },
    // 预先获取上次交易地址
    getAddress(){
      this.isNothing =false;
      this.addr = localStorage.address
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
  /* background-color: #fff;
  color: black;
  border-bottom: rgb(243, 250, 253) 1px solid; */
}
.content{
  margin-top:8vh;
}
.addAddress {
  margin: 35vh 15vw 20vh 15vw;
  width: 70vw;
  border-radius: 20px;
  background-color: red;
  color: #000;
}
/* if nothing */
.No {
  height: 0vh;
  padding-top: 26vh;
}
.No > img {
  margin-left: 35vw;
  height: 20vh;
  width: 30vw;
}
.No > p {
  color: gray;
  text-align: center;
  font-size: 1.6rem;
}
</style>