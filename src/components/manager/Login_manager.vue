<template>
  <div class="background">
    <!-- <img src="./img/bg_img.jpg" alt="背景图片" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style  scoped>
.background {
  width: 100vw;
  height: 100vh;
  background-image: url("./img/bg_img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* 设置模糊的 */
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}
</style>