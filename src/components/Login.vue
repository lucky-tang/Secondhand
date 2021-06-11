<template>
  <!-- 如果是手机端 -->
  <div v-if="isComputer != true">
    <mt-header title="用户登录" class="header">
      <router-link to="/" slot="left">
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
          label="密码"
          placeholder="请输入密码"
          type="password"
          v-model="password"
        ></mt-field>
        <mt-button
          size="large"
          type="primary"
          @click.native="sign_in()"
          class="button"
          >登录</mt-button
        >
        <router-link class="toPwd" to="/find_password">找回密码</router-link>
        <router-link class="toReg" to="/register">我要注册</router-link>
      </div>
    </section>
  </div>
  <!-- ------------------------------如果是PC端--------------------------------------------------- -->
  <div v-else>
    <div class="bg"></div>
    <!-- <img src="./manager/img/bg_img.jpg" class='bgimg' alt=""> -->
    <form class="form-horizontal form">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">账号</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            placeholder="Account"
            v-model="phone"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-5 col-sm-10">
          <button class="btn btn-default" @click="mana_login()">登录</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { login, find_pwd } from "../netWork/login";
export default {
  data() {
    return {
      // username: "",
      // email: "",
      isComputer: true,
      password: "",
      phone: "",
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.isCom();
  },

  methods: {
    // 判断客户端类型
    isCom() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        this.isComputer = false;
        // alert("这里是手机");
      } else {
        this.isComputer = true;
        // alert("这里是电脑");
      }
    },
    // 登录
    sign_in() {
      // this.$toast("登录成功");
      if ((this.phone == "") | (this.password == "")) {
        this.$toast("手机号或密码不能为空");
      } else {
        login(this.phone, this.password).then((res) => {
          let forbidden_time = res.data.data.forbidden_time;
          console.log(res)
          try {
            if (res.data.code == "200") {
              this.$toast("登录成功");
              // 获取isLogin和 userId存入store中给后面页面判断
              this.$store.commit("set_isLogin", true);
              this.$store.commit("set_userId", this.phone);
                this.$store.commit("set_ID", res.data.data.user.user_id);
              
              this.$router.go(-1);
              console.log(this.$store.state.ID);
            } else if(res.data.code == "500"){
              this.$toast("当前服务器繁忙");
            }else if(res.data.code == "400"){
              this.$toast(`由于您的非法操作，您的账号已被封号,时间截止至${{forbidden_time}}`);
            }
              else {
              this.$toast("手机号或密码输入错误");
            }
          } catch (e) {
            console.log(e);
          }

          // that = this;
        });
      }
    },

    find_password() {},

    toReg() {
      this.$router.push({ path: "/register" });
    },
    mana_login() {
      if ((this.phone == "") | (this.password == "")) {
        alert("手机号或密码不能为空");
      } else {
        login(this.phone, this.password).then((res) => {
          if (res.code == "200") {
            alert("登录成功");
            // 登录成功还要做什么？
            this.$router.push("/indexManage");
          } else {
            alert("手机号或密码输入错误");
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
.logo {
  background-image: rgba(0, 0, 0, 0);
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
.logo {
  margin-bottom: 5vh;
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

.bg {
  width: 100vw;
  height: 100vh;
  background-image: url("./manager/img/bg_img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(10px);

  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
.form {
  position: relative;
  width: 40vw;
  height: 30vh;
  padding: 6vh;
  margin: 35vh 60vh;
  background-color: rgb(196, 240, 232);
  border-radius: 20px;
}
</style>