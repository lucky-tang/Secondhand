<template>
  <div>
    <mt-header title="用户注册" class="header">
      <router-link to="/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <section class="fields">
      <div class="con">
        <mt-field
          label="用户名"
          placeholder="请取用户名"
          v-model="username"
          class="name"
        ></mt-field>
        <!-- <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field> -->
        <mt-field
          label="密码"
          placeholder="请输入密码"
          type="password"
          v-model="password"
        ></mt-field>
        <mt-field
          label="手机号"
          placeholder="请输入手机号"
          type="tel"
          v-model="phone"
        ></mt-field>
      </div>
      <div class="button">
        <mt-button type="primary" @click.native="reg()">注册</mt-button>
      </div>
    </section>
  </div>
</template>

<script>
import { register } from "../netWork/register";
export default {
  data() {
    return {
      username: "",
      // email: "",
      password: "",
      phone: "",
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    reg() {
      //  this.$toast('注册成功');
      if ((this.username == "") | (this.password == "") | (this.phone == "")) {
        this.$toast("请将信息输入完整");
      } else {
        register(phone, password, username).then((res) => {
          if(res.data.code == '200'){
            this.$toast("注册成功");
            this.$router.push('/login')
          }else{
            this.$toast("信息格式错误");
          }
        });
      }
    },
  },
};
</script>
<style  scoped>
.header {
  background-color: rgb(95, 216, 164);
}
.fields {
  height: 90vh;
  padding-top: 20vh;
  background-image: linear-gradient(
    to bottom,
    rgb(95, 216, 164),
    rgb(190, 240, 215)
  );
}
.con {
  width: 90vw;
  margin-left: 5vw;
}
.button {
  margin-top: 5vh;
  display: flex;
  justify-content: space-around;
}
</style>