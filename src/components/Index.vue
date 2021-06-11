<template>
  <div class="content">
    <section class="section1">
      <div class="top">
        <!-- <button @click="$router.push('/indexManage')">管理</button> -->
        <!-- <button @click="$router.push('/login')">登录</button> -->
        <!-- <button @click="$router.push('/try')">try頁面</button> -->
      </div>
      <div class="icon-input" @click="toSearch()">
        <mt-swipe :auto="3000" class="swipe1" :show-indicators="false">
          <mt-swipe-item>
            <p>
              <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>
              手机
            </p>
          </mt-swipe-item>
          <mt-swipe-item>
            <p>
              <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>
              电脑
            </p>
          </mt-swipe-item>
          <mt-swipe-item>
            <p>
              <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>
              平板
            </p>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </section>
    <!-- -------------------------- -->
    <section class="section2">
      <mt-swipe :auto="5000" class="swipe2">
        <mt-swipe-item v-for="(item, index) in topSwipe" :key="index">
          <img :src="item.src" @click="click_from_swipe(item.wd)" />
        </mt-swipe-item>
      </mt-swipe>

      <div class="type1">
        <router-link to="/phones">
          <div class="type-item">
            <img src="../assets/img/icon/phone_icon.png" alt="图片" />
            <span>手机</span>
          </div>
        </router-link>
        <router-link to="/computers">
          <div class="type-item">
            <img src="../assets/img/icon/computer_icon.png" alt="图片" />
            <span>电脑</span>
          </div>
        </router-link>
        <router-link to="/digitals">
          <div class="type-item">
            <img src="../assets/img/icon/digital_icon.png" alt="图片" />
            <span>家电数码</span>
          </div>
        </router-link>
        <router-link to="/books">
          <div class="type-item">
            <img src="../assets/img/icon/book_icon.png" alt="图片" />
            <span>图书</span>
          </div>
        </router-link>
      </div>
      <!-- ------------------------- -->
      <div class="type2">
        <router-link to="/antiques">
          <div class="type-item">
            <img src="../assets/img/icon/antique_icon.png" alt="图片" />
            <span>文玩</span>
          </div>
        </router-link>
        <router-link to="/cars">
          <div class="type-item">
            <img src="../assets/img/icon/car_icon.png" alt="图片" />
            <span>二手车</span>
          </div>
        </router-link>
        <router-link to="/clothings">
          <div class="type-item">
            <img src="../assets/img/icon/clothes_icon.png" alt="图片" />
            <span>服装</span>
          </div>
        </router-link>
        <router-link to="/moreType">
          <div class="type-item">
            <img src="../assets/img/icon/more_icon.png" alt="图片" />
            <span>更多</span>
          </div>
        </router-link>
      </div>
    </section>
    <!-- ----------------------------------- -->
    <section class="section3">
      <div class="list">
        <div
          class="list-item"
          v-for="(item, index) in searchResult"
          :key="index"
          @click="toDetails(item.commodity_id)"
        >
          <img src="../assets/img/computer.png" alt="图片" />
          <p class ='describe'>{{ item.commodity_describe }}</p>
          <p><b>￥</b>{{ item.price }}</p>
          <p><b>交易地址:</b> {{ item.commodity_place }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
import { download_goods_info } from "../netWork/index";
export default {
  //刷新页面只会重复执行beforeCreate和created两个方法；

  data() {
    return {
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
      searchResult: [
        {
          src: require("../assets/img/phone.png"),
          desc: "图片的简单描述哈哈哈哈哈哈哈哈哈",
          price: 9.9,
          addr: "滕王阁",
          wd: "手机",
        },
        {
          src: require("../assets/img/phone.png"),
          desc: "图片的简单描述哈哈哈哈哈哈哈哈哈",
          price: 9.9,
          addr: "滕王阁",
          wd: "手机",
        },
        {
          src: require("../assets/img/phone.png"),
          desc: "图片的简单描述哈哈哈哈哈哈哈哈哈",
          price: 9.9,
          addr: "滕王阁",
          wd: "手机",
        },
      ],
    };
  },

  updated() {
    this.stop();
  },


  mounted() {
    this.add_goods();
  },

  methods: {
    // 点击大轮播图，跳转到该物品的详情页
    // wd:关键字word
    click_from_swipe(wd) {
      this.$router.push({
        path: "/search_result",
        query: {
          wd: wd,
        },
      });
    },

    // 点击搜索图标，跳转到搜索页面
    toSearch() {
      this.$router.push({ path: "/search" });
    },

    // 停止加载图标
    stop() {
      Indicator.close();
    },

    // 点击随机图片到该商品详情页
    toDetails(commodity_id) {
      this.$router.push({
        path: "/commodityDetails",
        query: {
          commodity_id: commodity_id,
        },
      });
    },

    // 加载浏览商品信息
    add_goods() {
      download_goods_info().then((res) => {
        this.searchResult = [...res.data.data.commodityList];
        console.log(res)
      });
    },
  },
};
</script>
<style  scoped>
/* 图片展示的swipe */
.section2 > .swipe2 {
  text-align: center;
  height: 30vh;
  margin-top: 5vh;
  background-color: #fff;
  /* background: red; */
}
.swipe2 img {
  height: 100%;
  width: 100%;
}
.content {
  background-color: rgb(245, 249, 250);
}
.top {
  background-color: rgb(50, 200, 250);
  height: 10vh;
  width: 100vw;
  z-index: 1;
}
.icon-input {
  height: 6vh;
  width: 80vw;
  border-radius: 30px;
  background-color: #ffffff;
  margin-left: 10vw;

  position: absolute;
  top: 7vh;

  text-align: center;
  padding: 5px;
  box-shadow: 2px 2px 10px rgb(221, 205, 205);
}
/* 使 .icon-input>p的文字垂直居中，只要让文字的行高和容器的高度相同即可*/
.icon-input p {
  height: 20px;
  line-height: 20px;
  font-size: 1.4rem;
  color: black;
}
/* 分类部分 */
.section2 {
  width: 100vw;
  background-color: rgb(245, 249, 250);
  z-index: 1;
}
.type1,
.type2 {
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.type1 {
  padding-top: 5vh;
  /* text-decoration: none; */
}
.type-item {
  height: 13vh;
  width: 15vw;
  color: black;
}
.type-item > img {
  height: 70%;
  width: 80%;
  margin-left: 10%;
  border-radius: 10px;
}
.type-item > span {
  /* text-align只对块级内的文字有用 */
  display: block;
  font-size: 1.2rem;
  text-align: center;
}
/* 第三部分的设置 */
.list {
  width: 100vw;
  display: flex;
  /* 换行 */
  flex-wrap: wrap;
  margin-bottom: 10vh;
}
.list-item {
  height: auto;
  width: 46vw;
  background-color: #fff;
  margin: 2vw;
  border-radius: 15px;
  box-shadow: 0 2px lightblue;
  font-size: 1.4rem;
}
.list-item > img {
  width: 46vw;
  height: 19vh;
}
.describe{
  text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
  /* width: 46vw; */
}
</style>