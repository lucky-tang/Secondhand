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
        placeholder="宝马"
        class="search"
      ></mt-search>
    </section>

    <!-- 轮播图 -->
    <section>
      <mt-swipe :auto="5000" class="swipe2">
        <mt-swipe-item v-for="(item, index) in topSwipe" :key="index">
          <img :src="item.src" @click="click_from_swipe(item.wd)" />
        </mt-swipe-item>
      </mt-swipe>
    </section>

    <section class="phone_type">
      <div class="type1">

        <router-link to="/search_result">
          <div class="type-item">
            <img src="../../assets/img/icon/car_icon.png" alt="图片" />
            <span>轿车</span>
          </div>
        </router-link>

        <router-link to="/search_result">
          <div class="type-item">
            <img src="../../assets/img/icon/car_icon.png" alt="图片" />
            <span>SUV</span>
          </div>
        </router-link>

        <router-link to="/search_result">
          <div class="type-item">
             <img src="../../assets/img/icon/car_icon.png" alt="图片" />
            <span>货车</span>
          </div>
        </router-link>

        <router-link to="/search_result">
          <div class="type-item">
             <img src="../../assets/img/icon/car_icon.png" alt="图片" />
            <span>电动车</span>
          </div>
        </router-link>

        <router-link to="/search_result">
          <div class="type-item">
             <img src="../../assets/img/icon/car_icon.png" alt="图片" />
            <span>新能源</span>
          </div>
        </router-link>

      </div>
    </section>

    <section id="select" :class="{isFixed:searchBarFixed}">
      <p @click="showSort()" class="btn">排序</p>
      <p @click="showPrice()" class="btn">价格</p>
    </section>

    <!-- 商品展示 -->
    <section id="content">
      <div class="list">
        <div
          v-for="(item, index) in searchResult"
          :key="index"
          class="list-item"
          @click="$router.push('/commodityDetails')"
        >
          <img :src="item.url" alt="" />
          <p><b>￥</b>{{ item.price }}</p>
          <p>{{ item.desc }}</p>
          <p><b>地点:</b>{{ item.addr }}</p>
        </div>
      </div>
    </section>

    <!-- 价格排序弹出框 -->
    <mt-popup v-model="sortVisible" class="sort">
      <div>
        <mt-radio align="right" v-model="selectValue" :options="options">
        </mt-radio>
      </div>
    </mt-popup>
    <!-- 价格范围弹出框 -->
    <mt-popup v-model="priceVisible" class="price">
      <div>
        <p>价格范围(元)</p>
        <input
          type="number"
          placeholder="最低价"
          class="first"
          v-model="price_range_low"
        />
        ——
        <input type="number" placeholder="最高价" v-model="price_range_upper" />
        <div class="price-item">
          <span
            :class="{ red: controlActive.isActive1 }"
            @click="changeActive(1)"
            >100元以下</span
          >
          <span
            :class="{ red: controlActive.isActive2 }"
            @click="changeActive(2)"
            >300元以下</span
          >
          <span
            :class="{ red: controlActive.isActive3 }"
            @click="changeActive(3)"
            >500元以下</span
          >
        </div>
        <div class="price-item">
          <span
            :class="{ red: controlActive.isActive4 }"
            @click="changeActive(4)"
            >1000元以下</span
          >
          <span
            :class="{ red: controlActive.isActive5 }"
            @click="changeActive(5)"
            >2000元以下</span
          >
          <span
            :class="{ red: controlActive.isActive6 }"
            @click="changeActive(6)"
            >3000元以下</span
          >
        </div>
        <mt-button
          type="primary"
          size="large"
          @click.native="showPrice(), sort_in_range()"
          >确定</mt-button
        >
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";
import {search_goods,download_goods_info} from '../../netWork/index_types'
export default {
  data() {
    return {
      inputValue: "",
      // 控制弹出框可见
      sortVisible: false,
      priceVisible: false,
      selectValue: "价格降序",
      //
      searchBarFixed: false,

      options: [
        {
          label: "价格升序",
          value: "价格升序",
        },
        {
          label: "价格降序",
          value: "价格降序",
        },
      ],
      topSwipe: [
        {
          src: require("../../assets/img/car.png"),
          wd: "汽车",
        },
        {
          src: require("../../assets/img/computer.png"),
          wd: "电脑",
        },
        {
          src: require("../../assets/img/phone.png"),
          wd: "手机",
        },
      ],
      searchResult: [
        {
          url: require("../../assets/img/phone.png"),
          price: 120,
          desc: "用了两个月，不想用了，有人要吗？功能正常，保存完好。",
          addr: "风雨球场",
        },
        {
          url: require("../../assets/img/phone.png"),
          price: 99,
          desc: "用了两个月，不想用了，有人要吗？功能正常，保存完好。",
          addr: "风雨球场",
        },
        {
          url: require("../../assets/img/phone.png"),
          price: 1299,
          desc: "用了两个月，不想用了，有人要吗？功能正常，保存完好。",
          addr: "风雨球场",
        },
        {
          url: require("../../assets/img/phone.png"),
          price: 399,
          desc: "用了两个月，不想用了，有人要吗？功能正常，保存完好。",
          addr: "风雨球场",
        },
        {
          url: require("../../assets/img/phone.png"),
          price: 999,
          desc: "用了两个月，不想用了，有人要吗？功能正常，保存完好。",
          addr: "风雨球场",
        },
        {
          url: require("../../assets/img/phone.png"),
          price: 2599,
          desc: "用了两个月，不想用了，有人要吗？功能正常，保存完好。",
          addr: "风雨球场",
        },
        {
          url: require("../../assets/img/phone.png"),
          price: 699,
          desc: "用了两个月，不想用了，有人要吗？功能正常，保存完好。",
          addr: "风雨球场",
        },
      ],
      controlActive: {
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        isActive6: false,
      },
      // 筛选价格等级
      price_level: "",
      //input价格的最低值
      price_range_low: 0,
      // input价格的最高值
      price_range_upper: 0,
    };
  },
  created() {
    this.getInputValue();
  },

  components: {},

  computed: {},

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    selectValue(newVal, oldVal) {
      this.sortVisible = !this.sortVisible;
      if (newVal === "价格升序") {
        this.sort_price_up();
      } else {
        this.sort_price_down();
      }
    },
  },

  methods: {
    // 搜索物品
    search_goods(inputValue){
      search_goods(goods_name).then(res=>{
        console.log(res)
      })
    },
    // 随机加载该类商品
    get_goods_info(){
      download_goods_info().then(res=>{
          console.log(res)
      })
    },
    goBack() {
      this.$router.go(-1);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        var offsetTop=0;
       offsetTop = document.querySelector("#select").offsetTop;
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    },

    getInputValue() {
      this.inputValue = this.$route.query.wd;
    },
    showSort() {
      console.log("xxxx");
      this.sortVisible = !this.sortVisible;
    },
    showPrice() {
      // 关掉弹出框
      this.priceVisible = !this.priceVisible;
    },
    changeActive(index) {
      switch (index) {
        case 1:
          this.controlActive.isActive1 = true;
          this.price_level = 100;
          this.controlActive.isActive2 = this.controlActive.isActive3 = this.controlActive.isActive4 = this.controlActive.isActive5 = this.controlActive.isActive6 = false;
          break;
        case 2:
          this.controlActive.isActive2 = true;
          this.price_level = 300;
          this.controlActive.isActive1 = this.controlActive.isActive3 = this.controlActive.isActive4 = this.controlActive.isActive5 = this.controlActive.isActive6 = false;
          break;
        case 3:
          this.controlActive.isActive3 = true;
          this.price_level = 500;
          this.controlActive.isActive2 = this.controlActive.isActive1 = this.controlActive.isActive4 = this.controlActive.isActive5 = this.controlActive.isActive6 = false;
          break;
        case 4:
          this.controlActive.isActive4 = true;
          this.price_level = 1000;
          this.controlActive.isActive2 = this.controlActive.isActive1 = this.controlActive.isActive3 = this.controlActive.isActive5 = this.controlActive.isActive6 = false;
          break;
        case 5:
          this.controlActive.isActive5 = true;
          this.price_level = 2000;
          this.controlActive.isActive2 = this.controlActive.isActive1 = this.controlActive.isActive4 = this.controlActive.isActive3 = this.controlActive.isActive6 = false;
          break;
        case 6:
          this.controlActive.isActive6 = true;
          this.price_level = 3000;
          this.controlActive.isActive2 = this.controlActive.isActive1 = this.controlActive.isActive4 = this.controlActive.isActive5 = this.controlActive.isActive3 = false;
          break;
      }
    },
    compare_up(prop) {
      return (a, b) => {
        let value1 = a[prop];
        let value2 = b[prop];
        return value1 - value2;
      };
    },
    compare_down(prop) {
      return (a, b) => {
        let value1 = a[prop];
        let value2 = b[prop];
        return value2 - value1;
      };
    },
    sort_price_up() {
      this.searchResult.sort(this.compare_up("price"));
    },
    sort_price_down() {
      this.searchResult.sort(this.compare_down("price"));
    },
    sort_in_range() {
      if (this.price_range_low === 0 && this.price_range_upper === 0) {
        // if(1){
        let price_level = this.price_level;
        let a = this.searchResult.filter((item) => item.price <= price_level);
        this.searchResult = a;
        console.log(this.searchResult);
      }
      if (this.price_range_low !== 0 && this.price_range_upper !== 0) {
        let items = [];
        //如果为输入价格区间，安装选择的来筛选
        for (let item of this.searchResult) {
          if (
            item.price >= this.price_range_low &&
            item.price <= this.price_range_upper
          ) {
            items.push(item);
          }
        }
        this.searchResult = items;
      }
    },
    click_from_swipe(wd){
      this.$router.push({
        path:'/search_result',
        query:{
          wd:wd
        }
      })
      
    }
  },
};
</script>
<style  scoped>
.isFixed {
  position: fixed;
  top: 9vh;
}

.all {
  height: 100vh;
  background-color: rgb(242, 248, 248);
}
#top {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
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
/* 图片展示的swipe */
.swipe2 {
  text-align: center;
  height: 30vh;
  margin-top: 11vh;
  background-color: #fff;
}
.swipe2 img {
  height: 100%;
  width: 100%;
}

/* 手机分类 */
.phone_type {
  margin-bottom: 3vh;
}
.type1 {
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.type1 {
  padding-top: 5vh;
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
  margin-top: 2vh;
}

/* 价格 和 排序来个按钮 */
#select {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  font-size: 1.6rem;
}
#select > .btn {
  font-size: 1.4rem;
  background-color: #fff;
  border: none;
}
/* ------------ */
#content {
  width: 100vw;
  margin-top: 3vh;
  padding-bottom: 20vh;
  background-color: rgb(242, 248, 248);
}
#content > .item > img {
  height: 100px;
  width: 100px;
}
/* ---------------- */
.list {
  width: 100vw;
  display: flex;
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
/* ------------------------ */
.sort {
  width: 80vw;
  height: 20vh;
  margin-right: 5vw;
  position: fixed;
  top: 50vh;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price {
  width: 90vw;
  height: 35vh;
  margin-right: 5vw;
  position: fixed;
  top: 50vh;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price input {
  width: 30vw;
  border-radius: 5px;
}
.price .first {
  margin-left: 4vw;
}
.price .price-item {
  display: flex;
  justify-content: space-around;
}
.price .price-item span {
  margin: 2vh;
  background-color: rgb(235, 240, 241);
  border-radius: 10px;
  padding: 4px;
}

.red {
  font-size: 1.4rem;
  color: red;
  background-color: red;
}
</style>