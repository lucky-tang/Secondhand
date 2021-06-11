<template>
  <div id="all">
    <section class="search">
      <div class="row ">

        <div class="col-lg-6">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="输入名字或者ID查找用户"
            />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">搜索</button>
            </span>
          </div>
        </div>
      </div>

    </section>
    <div v-for="(item, index) in users" :key="index" class="item">
      <p><span>用户名:</span>{{ item.name }}</p>
      <p><span>ID:</span>{{ item.ID }}</p>
      <button type="button" class="btn btn-success">删除该用户</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "叮当猫",
          ID: "1",
        },
        {
          name: "叮当猫",
          ID: "1",
        },
        {
          name: "叮当猫",
          ID: "1",
        },
        {
          name: "叮当猫",
          ID: "1",
        },
        {
          name: "叮当猫",
          ID: "1",
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style  scoped>
#all {
  background-color: #e6e6e6;
  padding: 2vh;
}
.item {
  width: 80vw;
  height: 17vh;
  background-color: rgb(174, 221, 212);
  margin: 3vh 10vw;
  border-radius: 20px;
  box-shadow: 2px 4px #c3ccc8;
  padding: 2vh;
  font-size: 0.8rem;
}
.item > .btn {
  margin-left: 6vw;
}
.row{
  margin:8vh 10vw 2vh 10vw;
}
</style>