<template>
  <div>
    <mt-button @click.native="get('女装上衣')" class="choise">女装上衣</mt-button>
    <mt-button @click.native="get('女装裤子')" class="choise">女装裤子</mt-button>
    <mt-button @click.native="get('女装裙子')" class="choise">女装裙子</mt-button>
    <mt-button @click.native="get('女装套装')" class="choise">女装套装</mt-button>
    <mt-button @click.native="get('男装上衣')" class="choise">男装上衣</mt-button>
    <mt-button @click.native="get('男装裤子')" class="choise">男装裤子</mt-button>
    <mt-button @click.native="get('男装套装')" class="choise">男装套装</mt-button>
    <mt-button @click.native="get('女鞋')" class="choise">女鞋</mt-button>
    <mt-button @click.native="get('男鞋')" class="choise">男鞋</mt-button>
    <mt-button @click.native="get('女包')" class="choise">女包</mt-button>
    <mt-button @click.native="get('男包')" class="choise">男包</mt-button>
    <mt-button @click.native="get('行李箱')" class="choise">行李箱</mt-button>
    <mt-button @click.native="get('运动鞋服')" class="choise">运动鞋服</mt-button>
    <mt-button @click.native="get('其他服装')" class="choise">其他服装</mt-button>

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
      this.choise = choise;
      this.$store.commit("get_typeChoise", this.choise);
      this.$router.push("/publishDetail");
    }
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