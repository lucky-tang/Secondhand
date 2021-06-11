<template>
  <div>
    <mt-button @click.native="get('男表')" class="choise">男表</mt-button>
    <mt-button @click.native="get('女表')" class="choise">女表</mt-button>
    <mt-button @click.native="get('儿童表')" class="choise">儿童表</mt-button>
    <mt-button @click.native="get('珠宝')" class="choise">珠宝</mt-button>
    <mt-button @click.native="get('其他珠宝视屏')" class="choise">其他珠宝视屏</mt-button>
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