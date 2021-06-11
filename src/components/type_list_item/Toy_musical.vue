<template>
  <div>
    <mt-button @click.native="get('玩具')" class="choise">玩具</mt-button>
    <mt-button @click.native="get('吉他')" class="choise">吉他</mt-button>
    <mt-button @click.native="get('钢琴')" class="choise">钢琴</mt-button>
    <mt-button @click.native="get('电子琴')" class="choise">电子琴</mt-button>
    <mt-button @click.native="get('古筝')" class="choise">古筝</mt-button>
    <mt-button @click.native="get('架子鼓')" class="choise">架子鼓</mt-button>
    <mt-button @click.native="get('小提琴')" class="choise">小提琴</mt-button>
    <mt-button @click.native="get('二胡')" class="choise">二胡</mt-button>
    <mt-button @click.native="get('其他乐器')" class="choise">其他乐器</mt-button>
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