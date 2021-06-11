<template>
  <div>
    <mt-header :title="userName" class="header">
      <router-link to="/commodityDetails" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <section class="content">
      <div v-for="(item, index) in info" :key="index">
        <div class="info_me" v-if="item.sign === 0">
          <img :src="item.image" alt="" />
          <p>{{ item.word }}</p>
        </div>

        <div class="info_he" v-else>
          <p>{{ item.word }}</p>
          <img :src="item.image" alt="" />
        </div>
      </div>
    </section>

    <section class="input">
      <div class="row">
        <div class="col-sm-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="" />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">发送</button>
            </span>
          </div>
        </div>
      </div>
    </section>
    <div class="refresh" @click="refresh()">
      <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "杨松",
      info: [
        {
          sign: 0,
          image: require("../assets/img/icon/book_icon.png"),
          word: "你这个东西好用吗？",
        },
        {
          sign: 0,
          image: require("../assets/img/icon/book_icon.png"),
          word: "我有点不信啊",
        },
        {
          sign: 1,
          image: require("../assets/img/icon/computer_icon.png"),
          word: "好用，贼好用",
        },
        {
          sign: 1,
          image: require("../assets/img/icon/computer_icon.png"),
          word: "要不是东西太多了，带不走，我还不肯卖呢",
        },
        {
          sign: 0,
          image: require("../assets/img/icon/book_icon.png"),
          word: "我读书少，你别骗我！",
        },
        {
          sign: 1,
          image: require("../assets/img/icon/computer_icon.png"),
          word: "。。。",
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    refresh() {
      location.reload();
    },
  },
};
</script>
<style  scoped>
.header {
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: #80ffff;
}
.content {
  height: 94vh;
  width: 100vw;
  margin-top: 6vh;
  padding: 3vh 1vw;
  background-color: rgb(230, 245, 245);
}
.input {
  height: 8vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 5;
  padding: 1vh 2vw;
}
/* button {
  background-color: rgb(37, 185, 218);
} */
.refresh {
  height: 3vh;
  width: 5vw;
  /* background-color: red; */
  font-size: 20px;
  position: fixed;
  bottom: 20vh;
  right: 3vw;
  color: rgb(29, 218, 111);
  animation: spin 1s;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.info_me {
  width: 100vw;
  float: left;
}
.info_he {
  float: right;
}

.info_me > img,
.info_he > img {
  height: 6vh;
  width: 10vw;
  display: inline-block;
  border-radius: 10px;
}
.info_he > p {
  background-color: #00d0d0;
  color: #fff;
}
.info_me > p {
  background-color: #fff;
  color: #000;
}
.info_me > p,
.info_he > p {
  display: inline-block;
  margin: 2vh 2vw;
  padding: 2vw;
  border-radius: 10px;
}
</style>