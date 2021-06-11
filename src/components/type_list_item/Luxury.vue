<template>
  <div>
    <mt-button @click.native="get('包袋')" class="choise">包袋</mt-button>
    <mt-button @click.native="get('腕表')" class="choise">腕表</mt-button>
    <mt-button @click.native="get('首饰')" class="choise">首饰</mt-button>
    <mt-button @click.native="get('配饰')" class="choise">配饰</mt-button>
    <mt-button @click.native="get('服装')" class="choise">服装</mt-button>
    <mt-button @click.native="get('鞋靴')" class="choise">鞋靴</mt-button>
    <mt-button @click.native="get('其他')" class="choise">其他</mt-button>
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