<template>
  <div>
    <mt-button @click.native="get('苹果平板')" class="choise">苹果平板</mt-button>
    <mt-button @click.native="get('华为平板')" class="choise">华为平板</mt-button>
    <mt-button @click.native="get('小米平板')" class="choise">小米平板</mt-button>
    <mt-button @click.native="get('三星平板')" class="choise">三星平板</mt-button>
    <mt-button @click.native="get('微软平板')" class="choise">微软平板</mt-button>
    <mt-button @click.native="get('戴尔平板')" class="choise">戴尔平板</mt-button>
    <mt-button @click.native="get('华硕平板')" class="choise">华硕平板</mt-button>
    <mt-button @click.native="get('联想平板')" class="choise">联想平板</mt-button>
    <mt-button @click.native="get('其他分类')" class="choise">其他分类</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choise: ""
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
.choise {
  width: 30vw;
  display: block;
  background-color: #fff;
  margin: 2vh 3vw;
  border: none;
}
.choise:hover {
  background-color: rgb(182, 214, 236);
}
</style>