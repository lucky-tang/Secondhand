<template>
  <div>
    <mt-tabbar v-model="selected" :fixed="isFixed" class="tabbar">
      <mt-tab-item id="index" @click.native="toIndex" class="tabItem">
        <!-- <img slot="icon" src="../assets/img/首页.png" /> -->
        <img slot="icon" src="../assets/img/index.png" />
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="sale" @click.native="toSale" class="tabItem">
        <img slot="icon" src="../assets/img/add.png" />
        <p>卖二手</p>
      </mt-tab-item>
      <mt-tab-item id="my" @click.native="toMy" class="tabItem">
        <img slot="icon" src="../assets/img/my.png" />
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // isShow: 'true',
      value: "",
      selected: "",
      isFixed: true
    };
  },
  created() {
  
  },
  components: {},

  computed: {
    // ...mapState(["showTab"])
  },

  mounted() {},

  methods: {
    toIndex() {
      this.$router.push({ path: "/" });
    },
    toSale() {
      this.$router.push({ path: "/sale" });
    },
    toMy() {
      this.$router.push({ path: "/my" });
    }
  }
};
</script>
<style  scoped>
.tabItem {
  text-decoration: rgb(206, 60, 23);
  color: rgb(27, 26, 26);
}
p{
  font-size:1.2rem;
}
</style>