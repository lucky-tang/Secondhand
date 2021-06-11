<template>
  <div>
    <mt-header title="我发布的" class="header">
      <router-link to="/my" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- <Null></Null> -->
    <div class="info" v-for="(item,index) in infos" :key="index">
      <div>
        <div class="img">
          <img src="../../../assets/img/phone.png" alt="商品图片" />
        </div>

        <div class="detail">
          <p class="desc">{{ item.commodity_describe}}</p>
          <span class="price">￥{{ item.price }}</span>
        </div>
      </div>
      <div>
       <mt-button class="btn-left" type="primary" @click="toEdit(item.commodity_id)">编辑</mt-button>
          <mt-button class="btn-right" type="danger" @click="remove_commodity(item.commodity_id)">下架</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Null from "../../../common/Null";
import {get_publish_record} from '../../../netWork/my'
export default {
  data() {
    return {
      infos:[
        {
          commodity_describe:"95新 没有明显划痕,哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或",
          price:123,
      }],
    };
  },

  components: {
    Null,
  },

  computed: {},

  mounted() {
    this.get_publish_inofs()
  },

  methods: {
    get_publish_inofs() {
      get_publish_record(this.$store.state.ID).then((res) => {
        console.log(res)
        // infos = [...res.data.data];
      });
    },

    toEdit(commodity_id){
      this.$router.push({
        path:'/commodity_edit',
        query:{
          commodity_id
        }
      })
    },
    // 下架商品
    remove_commodity(){
      remove(commodity_id).then(res=>{
        if(res.data.code == '200'){
          this.$taost('下架成功')
        }
      })
    }
  },
};
</script>
<style  scoped>
.header {
  padding: 3vh 0 3vh 0;
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
.btn-left{
  margin-left: 20vw;
  margin-top: 2vh;
}
.btn-right{
  margin-left: 20vw;
}
</style>