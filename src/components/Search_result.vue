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
        placeholder="搜索"
        class="search"
      ></mt-search>
    </section>

    <section id="select">
      <p @click="showSort()" class="btn">排序</p>
      <p @click="showPrice()" class="btn">价格</p>
    </section>

    <section id="content">
      <div class="list">
        <div
          v-for="(item, index) in searchResult"
          :key="index"
          class="list-item"
          @click="$router.push('/commodityDetails')"
        >
          <img src="../assets/img/phone.png" alt="" />
          <p><b>￥</b>{{ item.price }}</p>
          <p>{{ item.commodity_describe }}</p>
          <p><b>地点:</b>{{ item.commodity_place }}</p>
        </div>
      </div>
    </section>
    <mt-popup v-model="sortVisible" class="sort">
      <div>
        <mt-radio align="right" v-model="selectValue" :options="options">
        </mt-radio>
      </div>
    </mt-popup>
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
import { search } from "../netWork/search_result";
export default {
  data() {
    return {
      inputValue: "请输入想要的宝贝",
      // 控制弹出框可见
      sortVisible: false,
      priceVisible: false,
      selectValue: "价格降序",
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
      searchResult: [],
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
    this.search_commodity();
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
    goBack() {
      this.$router.go(-1);
    },
    getInputValue() {
      this.inputValue = this.$route.query.wd;
    },
    showSort() {
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
    search_commodity() {
      search(this.$route.query.wd).then((res) => {
        console.log(res.data.data.commodity);
        this.searchResult = res.data.data.commodity;
      });
    },
  },
};
</script>
<style  scoped>
.all {
  height: 100vh;
  background-color: rgb(218, 230, 235);
}
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
  /* 超出文字用省略号 */
   text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
}
.list-item > img {
  width: 46vw;
  height: 19vh;
}

/* ---------- */
#top {
  position: fixed;
  top: 0;
  width: 100vw;
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
/* ----------------------- */
#select {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  font-size: 1.6rem;
}
#select > .btn {
  font-size: 1.4rem;
  background-color: #fff;
  /* border: none; */
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
#content {
  /* height: 350vh; */
  width: 100vw;
  margin-top: 16vh;
  background-color: rgb(218, 230, 235);
  padding-bottom: 1vh;
}
#content > .item > img {
  height: 100px;
  width: 100px;
}
.red {
  font-size: 1.4rem;
  color: red;
  background-color: red;
}
</style>