<template>
  <div id='removeManage'>
      <section class="search">
      <div class="row ">

        <div class="col-lg-6">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="输入名字或者ID查找用户"
            />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">搜索</button>
            </span>
          </div>
        </div>
      </div>

    </section>
    <div v-for='(item,index) in gooods' :key="index" class='content'>
      <p><span>商品ID:</span>   {{ item.ID }}</p>
      <p><span>商品名称:</span>   {{ item.name }}</p>
      <button type="button" class="btn btn-info">下架该商品</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gooods: [
        {
          ID: "123456",
          name: "小米 小米6 64G 白色 9成新",
        },
        {
          ID: "123456",
          name: "小米 小米6 64G 白色 9成新",
        },{
          ID: "123456",
          name: "小米 小米6 64G 白色 9成新",
        },{
          ID: "123456",
          name: "小米 小米6 64G 白色 9成新",
        },{
          ID: "123456",
          name: "小米 小米6 64G 白色 9成新",
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style  scoped>
#removeManage{
    padding:10vh 0 100vh 0;
    background-color: rgb(233, 239, 240);
  
}
.row{
  margin-left:10vw;
}
.content{
   margin:2vh 10vw 2vh 10vw;
     background-color: rgb(238, 248, 244);
     padding:3vh 10vw 3vh 10vw;
     font-size: 1rem;
     border-radius: 10px;
     box-shadow: rgb(190, 199, 199) 3px 3px;
}
.content span{
    font-weight: bold;
}
.content .btn{
    margin-left:40vw;
}
</style>