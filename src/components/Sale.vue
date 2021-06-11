<template>
  <div class="content">
    <mt-header title="发布闲置" class="header">
      <router-link to="/" slot="left" >
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <section class="list">
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/tablet_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            手机平板
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>华为/苹果/小米/三星</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/digital_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            数码
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>摄影器材/耳机/智能穿戴/音响/游戏机</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/computer_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            电脑
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>笔记本/台式机/一体机/外设/电脑配件</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/clothes_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            服装鞋帽
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>男装/女装/鞋/箱包</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/moto_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            交通工具
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>摩托车/电动车/自行车/小轿车</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/book_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            图书影音
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文学小说/教材教辅</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/musical_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            乐器
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文玩/珠宝配饰/办公用品/更多</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/furniture_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
           家居家具
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文玩/珠宝配饰/办公用品/更多</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/outdoor_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
            户外运动
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文玩/珠宝配饰/办公用品/更多</p>
        </div>
      </div>
      <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/jewelry_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
           珠宝
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文玩/珠宝配饰/办公用品/更多</p>
        </div>
      </div>

       <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/car_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
           汽车
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文玩/珠宝配饰/办公用品/更多</p>
        </div>
      </div>
       <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/antique_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
           文玩
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文玩/珠宝配饰/办公用品/更多</p>
        </div>
      </div>
             <div class="list-item" @click="toa()">
        <div class="img">
          <img src="../assets/img/icon/other_icon.png" alt="图片" />
        </div>
        <div class="desc">
          <p>
           其他
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </p>
          <p>文玩/珠宝配饰/办公用品/更多</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    toa() {
      this.$router.push({ path: "/publishDetail" });
    },
    toIndex() {
      this.$router.push({ path: "/" });
      alert('xxxx')
    }
  }
};
</script>
<style  scoped>
.content {
  background-color: rgb(243, 250, 243);
  height: 190vh;
}
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
.list {
  width: 90vw;
  margin: 5vh 5vw 0vh 5vw;
  padding: 3vh 0 10vh 0;
}
.list-item {
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 2%;
  margin: 2vh 0;
  background-color: #fff;
  border-radius: 20px;
}
img {
  width:15vw;
  height: 96%;
  border-radius: 15px;
}
.list-item > .desc {
  width: 80%;
  height: 100%;
  margin-left: 5%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.desc > :nth-child(1) {
  font-size: 1.4rem;
  font-weight: bold;
}
.desc > :nth-child(2) {
  font-size: 1.2rem;
}
</style>