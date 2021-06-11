<template>
 <div>
 <mt-header title="商品信息编辑页" class="header">
      <router-link to="/published" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
</mt-header>
<section class='infos'>
<mt-field label="商品名称" placeholder="请输入商品名称" v-model="commodity_info.commodity_name"></mt-field>
<mt-field label="商品价格" placeholder="请输入商品价格" type="number" v-model="commodity_info.price"></mt-field>
<mt-field label="商品描述" placeholder="请输入商品描述" type="textarea" rows="4" v-model="commodity_info.commodity_describe"></mt-field>
<mt-radio
  title="商品类型"
  v-model="type"
  :options="options">
</mt-radio>
<mt-button type = 'primary' class="btn">确定</mt-button>
</section>


</div>
</template>

<script>
import {get_one_commodity} from '../netWork/commodity_edit'
export default {
 data () {
  return {
    //   存放name，price，desc等信息
      commodity_info:{},
    //   name:'',
    //   desc:'',
    //   type:'',
    //   price:'',
      options : [
  {
    label: '商品啊',
    value: '值F',
  },
  {
    label: '选项A',
    value: '值A'
  },
  {
    label: '选项B',
    value: '值B'
  }
],
  };
 },

 components: {},

 computed: {},

 mounted() {},

 methods: {
    //  获取此商品的信息
     get_one_goodsInfo(){
         get_one_commodity(this.$route.query.commodity_id).then(res=>{
            //  console.log(res)
            this.commodity_info = res.data.data
         })
     },
     fix_goodsInfo(){
         fix_commodity().then(res=>{

         })
     }
 }
}

</script>
<style  scoped>
.infos{
    margin-top:4vh;
    text-decoration: none;
}
.btn{
    display: flex;
    align-items: center;
    margin:auto;
}
</style>