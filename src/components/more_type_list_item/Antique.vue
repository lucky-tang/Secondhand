<template>
  <div>
    <mt-button @click.native="get('玉翠珠宝')" class="choise">玉翠珠宝</mt-button>
    <mt-button @click.native="get('艺术文玩')" class="choise">艺术文玩</mt-button>
    <mt-button @click.native="get('文玩杂项')" class="choise">文玩杂项</mt-button>
    <mt-button @click.native="get('邮票钱币')" class="choise">邮票钱币</mt-button>
    <mt-button @click.native="get('书画篆刻')" class="choise">书画篆刻</mt-button>
    <mt-button @click.native="get('紫砂陶瓷')" class="choise">紫砂陶瓷</mt-button>
    <mt-button @click.native="get('教科教辅')" class="choise">教科教辅</mt-button>
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
      this.$router.push({
        path: "/search_result",
        query: {
          wd: choise,
        },
      });
    },
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