<template>
  <div>
    <mt-header title="个人资料" class="header">
      <router-link to="/my" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="basic">
        <mt-cell title="头像" is-link :value="image"></mt-cell>
        <mt-cell
          title="昵称"
          is-link
          :value="user.user_name"
          @click.native="fixName()"
        ></mt-cell>
        <mt-cell
          title="性别"
          is-link
          :value="user.gender"
          @click.native="fixGender()"
        ></mt-cell>
        <mt-cell
          title="年龄"
          is-link
          :value="user.age"
          @click.native="fixAge()"
        ></mt-cell>
      </div>
      <div class="more">
        <mt-cell
          title="手机号"
          is-link
          :value="user.telephone"
          @click.native="fixTele()"
        ></mt-cell>
        <mt-cell
          title="学校"
          is-link
          :value="user.school_name"
          @click.native="showPicker()"
        ></mt-cell>
        <!-- <mt-cell title="收货地址" to="/address" is-link></mt-cell> -->
      </div>
    </div>
    <!-- 弹出性别选择 -->
    <mt-popup v-model="genderPopupVisible" modal="false">
      <mt-radio title="选择性别" v-model="genderValue" :options="['男', '女']">
      </mt-radio>
    </mt-popup>

    <!-- 地址弹出框 -->
    <mt-popup
      v-model="addrPopupVisible"
      popup-transition="popup-fade"
      class="pop"
      position="bottom"
    >
      <v-distpicker class="picker"></v-distpicker>
    </mt-popup>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Radio } from "mint-ui";
import VDistpicker from "v-distpicker";
import {get_oneUser, fix_oneUser} from '../netWork/my'
export default {
  data() {
    return {

      user:{
        user_name:"编辑昵称",
        user_gender:"编辑性别",
        user_age:"编辑年龄",
        telephone:"输入电话号码",
        school:"江西师范大学",
      },
        
      genderPopupVisible: false,
      genderValue: "男",
      image: "修改头像",
      addrPopupVisible: false,
      province: "",
      city: "",
      area: "",
    };
  },

  components: {
    VDistpicker,
  },

  computed: {},

  mounted() {
    this.get_userInfo()
  },
  watch: {
    //只要性别改变，就赋值最新的值
    genderValue() {
      this.user.user_gender = this.genderValue;
      fix_gender(phone_number, gender).then((res) => {
        console.log(res); 
      });
    },
  },

  methods: {
    // 获取该用户的基本信息
    get_userInfo(){
      if(this.$store.state.ID == ''){
        // this.$toast('请先登录')
      }else{
 get_oneUser(this.$store.state.ID).then(res=>{
        console.log(res.data.data.user)
          this.user = res.data.data.user
      })
      }
     
    },

  // 上次修改的用户信息
    fix_userInfo(){
      fix_oneUser(this.$store.state.user_id, user.user_name, user.user_age, user.user_gender, user.telephone, user.school).then(res=>{
        that = this;
          if(res.data.code == '200'){
            this.$toast('修改成功');
            // 修改成功后再刷新一次
            window.location.reload()
          }
      })
    },

    // edit_image(){
    //   // 修改头像
    //     fix_image(phone_number,image).then(res=>{
    //       console.log(res)
    //     })
    // },

    fixName() {
      MessageBox.prompt("请输入姓名").then(({ value, action }) => {
        this.name = value;
        this.fix_userInfo()
      });
    },

    fixGender() {
      this.genderPopupVisible = !this.genderPopupVisible;
      this.fix_userInfo()
    },

    fixAge() {
      MessageBox.prompt("请输入年龄").then(({ value, action }) => {
        if (!/(^[1-9]\d*$)/.test(value)) {
          this.$toast({
            message: "年龄值非法",
          });
        } else {
          if (value < 10 || value > 70) {
            this.$toast({
              message: "年龄值非法",
            });
          } else {
            this.age = parseInt(value);
            this.fix_userInfo()
          }
        }
      });
    },

// 编辑学校
    edit_school() {
      this.fix_userInfo()
    },

    fixTele() {
      MessageBox.prompt("请输入电话号码").then(({ value, action }) => {
        let phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!value.length == 11) {
          this.$toast({
            message: "电话号码非法",
          });
        } else if (phone.test(value)) {
          this.tele = value;
          this.fix_userInfo();
          
        } else {
          this.$toast({
            message: "电话号码非法",
          });
        }
      });
    },
    showPicker() {
      this.popupVisible = true;
    },
  },
};
</script>
<style  scoped>
.content {
  height: 100vh;
  padding: 0 5vw;
  background-color: rgb(239, 250, 250);
}
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
.basic {
  padding-top: 15vh;
}
.more {
  margin-top: 3vh;
}
img {
  height: 7vh;
  width: 10vw;
}
.picker {
  width: 92vw;
  height: 20vh;
  margin-bottom: 70vh;
}
</style>