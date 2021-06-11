<template>
  <div>
    <mt-header title="我买到的" class="header">
      <router-link to="/my" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <Null></Null>
  </div>
</template>

<script>
import Null from '../../../common/Null'
export default {
  data() {
    return {};
  },

  components: {
    Null
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style  scoped>
.header {
  padding: 5vh 0 3vh 0;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #fff;
  color: black;
  border-bottom: rgb(243, 250, 253) 1px solid;
}
</style>