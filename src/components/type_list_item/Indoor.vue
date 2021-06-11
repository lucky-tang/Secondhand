<template>
  <div>
    <mt-button @click.native="get('大家电')" class="choise">大家电</mt-button>
    <mt-button @click.native="get('厨卫大电')" class="choise">厨卫大电</mt-button>
    <mt-button @click.native="get('厨卫小电')" class="choise">厨卫小电</mt-button>
    <mt-button @click.native="get('其他家电')" class="choise">其他家电</mt-button>
    <mt-button @click.native="get('生活电器')" class="choise">生活电器</mt-button>
    <mt-button @click.native="get('沙发')" class="choise">沙发</mt-button>
    <mt-button @click.native="get('床/床垫')" class="choise">床/床垫</mt-button>
    <mt-button @click.native="get('柜子')" class="choise">柜子</mt-button>
    <mt-button @click.native="get('桌子/茶几')" class="choise">桌子/茶几</mt-button>
    <mt-button @click.native="get('椅子')" class="choise">椅子</mt-button>
    <mt-button @click.native="get('家纺')" class="choise">家纺</mt-button>
    <mt-button @click.native="get('灯具照明')" class="choise">灯具照明</mt-button>
    <mt-button @click.native="get('衣架/架子')" class="choise">衣架/架子</mt-button>
    <mt-button @click.native="get('其他家居家居')" class="choise">其他家居家居</mt-button>
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