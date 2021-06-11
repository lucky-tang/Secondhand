<template>
  <div>
    <mt-header title="我收藏的" class="header">
      <span @click="$router.go(-1)" slot="left">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <Null v-show="selection.length == 0 "></Null>
    <!-- 商品展示 -->
    <section id="content">
      <div class="list">
        <div
          v-for="(item, index) in selection"
          :key="index"
          class="list-item"
          @click="$router.push('/commodityDetails')"
        >
          <img src="../../../assets/img/phone.png" alt=""  />
          <p><b>￥</b>{{ item.price }}</p>
          <p>{{ item.commodity_describe }}</p>
          <p><b>地点:</b>{{ item.addr }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Null from '../../../common/Null'
import {get_collections} from '../../../netWork/my'
export default {
  data() {
    return {
      
      // 用户收藏集合
      selection:[],
    };
  },

  components: {
    Null
  },

  computed: {
    // 随时判断集合是否为空
    selection_length(){
      return this.selection_length.length();
    }
  },
  mounted() {
    this.get_selection()
  },

  methods: {
    get_selection(){
      get_collections(this.$store.state.ID).then(res=>{
        // console.log(res)
        this.selection = res.data.data.collection
      })
    }
  }
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
.list-item img{
  width: 30vw;
  height: 20vh;
}
</style>