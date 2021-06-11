<template>
  <div>
    <mt-button @click.native="get('轿车')" class="choise">轿车</mt-button>
    <mt-button @click.native="get('SUV')" class="choise">SUV</mt-button>
    <mt-button @click.native="get('MPV')" class="choise">MPV</mt-button>
    <mt-button @click.native="get('跑车')" class="choise">跑车</mt-button>
    <mt-button @click.native="get('面包车')" class="choise">面包车</mt-button>
    <mt-button @click.native="get('电动汽车')" class="choise">电动汽车</mt-button>
    <mt-button @click.native="get('皮卡')" class="choise">皮卡</mt-button>
    <mt-button @click.native="get('卡车')" class="choise">卡车</mt-button>
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