<template>
  <div>
    <mt-button @click.native="get('耳机/耳麦')" class="choise">耳机/耳麦</mt-button>
    <mt-button @click.native="get('智能设备')" class="choise">智能设备</mt-button>
    <mt-button @click.native="get('数码配件')" class="choise">数码配件</mt-button>
    <mt-button @click.native="get('摄影摄像')" class="choise">摄影摄像</mt-button>
    <mt-button @click.native="get('影音娱乐')" class="choise">影音娱乐</mt-button>
    <mt-button @click.native="get('其他数码')" class="choise">其他数码</mt-button>
    <mt-button @click.native="get('教科教辅')" class="choise">教科教辅</mt-button>
    <mt-button @click.native="get('电子教育')" class="choise">电子教育</mt-button>
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
    width: 30vw;
    display: block;
    background-color: #fff;
    margin:2vh 3vw;
    border:none
}
.choise:hover{
    background-color: rgb(182, 214, 236);
}
</style>