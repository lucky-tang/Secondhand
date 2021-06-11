<template>
  <div>
    <mt-button @click.native="get('健身训练')" class="choise">健身训练</mt-button>
    <mt-button @click.native="get('户外装备')" class="choise">户外装备</mt-button>
    <mt-button @click.native="get('桌游棋牌')" class="choise">桌游棋牌</mt-button>
    <mt-button @click.native="get('滑轮')" class="choise">滑轮</mt-button>
    <mt-button @click.native="get('垂钓用品')" class="choise">垂钓用品</mt-button>
    <mt-button @click.native="get('游泳用品')" class="choise">游泳用品</mt-button>
    <mt-button @click.native="get('舞蹈瑜伽')" class="choise">舞蹈瑜伽</mt-button>
    <mt-button @click.native="get('其他运动用品')" class="choise">其他运动用品</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choise: "",
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    get(choise) {
      this.choise=choise;
      this.$store.commit('get_typeChoise',this.choise);
      this.$router.push('/publishDetail')
    }
  }
};
</script>
<style  scoped>
p {
  margin-left: 3vh;
  line-height: 5vh;
}
.choise{
    width: 40vw;
    display: block;
    background-color: #fff;
    margin:2vh 3vw;
    border:none
}
.choise:hover{
    background-color: rgb(182, 214, 236);
}
</style>