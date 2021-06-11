<template>
  <div>
    <div class="content">
      <img src="../assets/img/null.png" alt="图片" />
    </div>
    <p>这里什么东西也没有</p>
    
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

  methods: {}
};
</script>
<style  scoped>
.content {
  margin-left: 20vw;
  margin-top: 20vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
img {
  width: 60vw;
  height: 30vh;
  display: block;
}
p {
    font-size: 1.5rem;
  text-align: center;
  color: rgba(165, 186, 181, 0.85);
}
</style>