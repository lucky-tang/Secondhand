<template>
  <div>
    <mt-button @click.native="get('摩托车')" class="choise">摩托车</mt-button>
    <mt-button @click.native="get('电动车')" class="choise">电动车</mt-button>
    <mt-button @click.native="get('自行车')" class="choise">自行车</mt-button>
    <mt-button @click.native="get('平衡车/体感车')" class="choise">平衡车/体感车</mt-button>
    <mt-button @click.native="get('摩托车/电动车配件')" class="choise">摩托车/电动车配件</mt-button>
    <mt-button @click.native="get('自行车配件')" class="choise">自行车配件</mt-button>
    <mt-button @click.native="get('汽车配件')" class="choise">汽车配件</mt-button>
    <mt-button @click.native="get('其他代步工具')" class="choise">其他代步工具</mt-button>
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
    width: 50vw;
    display: block;
    background-color: #fff;
    margin:2vh 3vw;
    border:none
}
.choise:hover{
    background-color: rgb(182, 214, 236);
}
</style>