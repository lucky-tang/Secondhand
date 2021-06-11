<template>
  <div>
    <mt-button @click.native="get('文学小说')" class="choise">文学小说</mt-button>
    <mt-button @click.native="get('经管励志')" class="choise">经管励志</mt-button>
    <mt-button @click.native="get('童书教育')" class="choise">童书教育</mt-button>
    <mt-button @click.native="get('一加')" class="choise">人文社科</mt-button>
    <mt-button @click.native="get('人文社科')" class="choise">科技科普</mt-button>
    <mt-button @click.native="get('生活艺术')" class="choise">生活艺术</mt-button>
    <mt-button @click.native="get('教科教辅')" class="choise">教科教辅</mt-button>
    <mt-button @click.native="get('外文原版书')" class="choise">外文原版书</mt-button>
    <mt-button @click.native="get('其他图书')" class="choise">其他图书</mt-button>
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
    border:none;
}
.choise:hover{
    background-color: rgb(182, 214, 236);
}
</style>