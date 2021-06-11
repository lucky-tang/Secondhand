<template>
  <div>
    <mt-header class="header">
      <router-link to="/" slot="left" class="back">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search
      v-model="inputValue"
      cancel-text="取消"
      placeholder="搜索"
      class="search"
    ></mt-search>
    <mt-button
      type="default"
      size="small"
      class="button"
      @click.native="add_search_log()"
      >搜索</mt-button
    >

    <section v-if="local_search_log.length !== 0">
      <span class="search_title">搜索历史</span>
      <span
        class="glyphicon glyphicon-trash trash"
        aria-hidden="true"
        @click="clear_search_log()"
      ></span>

      <div class="search_list">
        <div
          v-for="(item, index) in local_search_log"
          :key="index"
          class="search_list_item"
        >
          <span @click="searchBySpan(item)">{{ item }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      inputValue: "",
      popupVisible: false,
      province: "",
      city: "",
      area: "",
      local_search_log: [],
    };
  },
  created() {
    this.get_search_log();
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    searchBySpan(item) {
      console.log("this.local_search_log");
      this.$router.push({
        path: "/search_result",
        query: {
          wd: item,
        },
      });
      // location.reload();
    },
    //定义一个localstorage的空数组，来存储搜索记录，也用来展示搜索记录
    add_search_log() {
      if (this.inputValue === "") {
        Toast("请输入内容");
      } else {
        //以后search——log数组就不为空了
        // 就可以先把历史搜索记录赋值到本地一个数组中
        let record = JSON.parse(localStorage.getItem("search_log"));
        //然后在把新的搜索记录到本地数组中
        record.push(this.inputValue);
        //然后在把新的数组上传
        localStorage.setItem("search_log", JSON.stringify(record));
        // location.reload();
        let wd = this.inputValue;
        this.$router.push({
          path: "/search_result",
          query: {
            wd: wd,
          },
        });
      }
    },
    get_search_log() {
      //如果为null，就先定义一个空数组
      if (localStorage.getItem("search_log") === null) {
        localStorage.setItem("search_log", JSON.stringify([]));
      } else {
        //定义一个本地数组
        //将local数组给本地数组
        let record = JSON.parse(localStorage.getItem("search_log"));
        this.local_search_log = record;
        // location.reload()
        console.log(this.local_search_log);
      }
    },
    clear_search_log() {
      localStorage.setItem("search_log", JSON.stringify([]));
      //  localStorage.removeItem("search_log");
      location.reload();
    },
  },
};
</script>
<style  scoped>
.header {
  background-color: #fff;
  color: #000;
}
.back {
  position: fixed;
  left: 5vw;
  top: 5vw;
}
.search {
  width: 70vw;
  position: fixed;
  left: 11vw;
  top: 5vw;
}
.button {
  display: inline;
  position: fixed;
  right: 4vw;
  top: 6.5vw;
}
.search_title {
  position: fixed;
  top: 12vh;
  left: 5vw;
  font-weight: bold;
}
.trash {
  position: fixed;
  top: 12vh;
  right: 5vw;
  font-size: 20px;
}
.search_list {
  margin: 18vw 4vw 40vw 4vw;
}
.search_list_item {
  display: inline-block;
  background-color: lightgray;
  border-radius: 20px;
  padding: 5px;
  margin: 2vw;
}
</style>