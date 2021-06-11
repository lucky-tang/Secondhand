<template>
  <div>
    <mt-header title="找回密码" class="header">
      <router-link to="/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <section class="fields">
      <div class="logo">
        <img src="../assets/img/my.png" alt="logo" />
      </div>
      <div class="con">
        <mt-field
          label="手机号"
          placeholder="请输入手机号"
          type="tel"
          v-model="phone"
        ></mt-field>

        <mt-field
          label="验证码"
          placeholder="请输入验证码"
          type="password"
          v-model="password"
          class="check_code_input"
        ></mt-field>
        <mt-button class="check_code_button">获取验证码</mt-button>

        <mt-button
          size="large"
          type="primary"
          @click.native="find_password"
          class="button"
          >查找</mt-button
        >
        <router-link class="toPwd" to="/login">去登录</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { find_pwd ,get_check_code} from "../netWork/login";
export default {
  data() {
    return {
      password: "",
      phone: "",
      check_code:''
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    find_password() {
        if(this.phone == ''|this.check_code == ''){
            this.$toast('请将信息填写完整')
        }else{
            find_pwd(this.phone,this.check_code).then(res=>{
                console.log(res)
            })
        }
    },
    get_code() {
        get_check_code(this.phone).then(res=>{
            console.log(res)
        })
    },
    // toReg() {
    //   this.$router.push({ path: "/register" });
    // },
  },
};
</script>
<style  scoped>
.check_code_input {
  width: 68%;
  display: inline-block;
}
.check_code_button {
  position: absolute;
  height: 6vh;
  width: 29%;
  margin-top: 0.5%;
  margin-left: 0%;
  font-size: 1.2rem;
  display: inline-block;
}
.header {
  background-color: rgb(95, 216, 164);
}
.logo {
  background-image: rgba(0, 0, 0, 0);
  margin-bottom: 5vh;
}
.logo > img {
  height: 12vh;
  width: 18vw;
  border-radius: 10px;
}
.fields {
  height: 90vh;
  padding-top: 20vh;
  background-image: linear-gradient(
    to bottom,
    rgb(95, 216, 164),
    rgb(192, 236, 214)
  );
}
.con {
  width: 90vw;
  margin-left: 5vw;
}
.button,
.logo {
  display: flex;
  justify-content: space-around;
}
.button {
  margin-top: 5vh;
}

.toPwd {
  float: left;
  margin-top: 2vh;
  font-size: 1.6rem;
}
.toReg {
  /* 
浏览器是默认左对齐的。灵感一来，margin-right其实有效果的，只是在默认即标准流的情况的下显示不出来效果;
可以脱离标准流，加了一个：float:right;
以后能不用right就不用；
 */
  float: right;
  margin-top: 2vh;
  margin-right: 0;
  font-size: 1.6rem;
}
</style>