<template>
  <div>
    <mt-button @click.native="get('华为')" class="choise">华为</mt-button>
    <mt-button @click.native="get('苹果')" class="choise">苹果</mt-button>
    <mt-button @click.native="get('小米')" class="choise">小米</mt-button>
    <mt-button @click.native="get('一加')" class="choise">一加</mt-button>
    <mt-button @click.native="get('OPPO')" class="choise">OPPO</mt-button>
    <mt-button @click.native="get('vivo')" class="choise">vivo</mt-button>
    <mt-button @click.native="get('魅族')" class="choise">魅族</mt-button>
    <mt-button @click.native="get('Redmi')" class="choise">Redmi</mt-button>
    <mt-button @click.native="get('三星')" class="choise">三星</mt-button>
    <mt-button @click.native="get('努比亚')" class="choise">努比亚</mt-button>
    <mt-button @click.native="get('锤子')" class="choise">锤子</mt-button>
    <mt-button @click.native="get('realme')" class="choise">realme</mt-button>
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
  },
};
</script>
<style  scoped>
p {
  margin-left: 3vh;
  line-height: 5vh;
}
.choise {
  width: 20vw;
  display: block;
  background-color: #fff;
  margin: 2vh 3vw;
  border: none;
}
.choise:hover {
  background-color: rgb(182, 214, 236);
}
</style>