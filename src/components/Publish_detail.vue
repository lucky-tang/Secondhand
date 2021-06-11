<template>
  <div class="content">
    <mt-header title="发布宝贝" class="header">
      <router-link to="/sale" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <section class="upload_picture" @click="uploadPic()">
      <div>
        <span class="glyphicon glyphicon-camera picture"></span>
        <p>上传图片</p>
      </div>
    </section>
    <section class="detail">
      <mt-radio
        title="新旧程度"
        v-model="appearance"
        :options="['几乎全新', '磕碰，功能完好', '小维修', '故障']"
        class="new"
      ></mt-radio>
      <mt-field
        label="转手原因"
        placeholder="简单描述一下转手原因"
        type="textarea"
        rows="4"
        v-model="turn_reason"
        class="trun_reason"
      ></mt-field>
      <mt-field
        label="使用感受"
        placeholder="简单描述一下使用感受"
        type="textarea"
        rows="4"
        v-model="feeling"
        class="feeling"
      ></mt-field>
      <mt-cell
        title="分类"
        to="/type_list"
        is-link
        :value="type"
        class="type"
      ></mt-cell>
      <mt-cell
        title="型号"
        is-link
        :value="versionValue"
        class="version"
        @click.native="getVersion()"
      ></mt-cell>
      <mt-cell
        title="价格"
        is-link
        :value="price"
        class="price"
        @click.native="getPrice()"
      ></mt-cell>
      <mt-button type="primary" class="pub_button" @click="publish()"
        >发布</mt-button
      >
      <!-- {{$store.state.type_choise}} -->
    </section>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { upload_image, upload_info } from "../netWork/sale";
export default {
  data() {
    return {
      image: "", //照片
      describe: "", //外观
      turn_reason: "",
      feeling: "",
      appearance:'',
      // version: "", //商品的版本型号，如小米的 小米6
      type: "选择分类",
      name: "输入产品名字",
      price: "开个价",
    };
  },
  // beforeRouteLeave(to, from, next) {
  //   if (confirm("确定离开此页面吗？") == true) {
  //     this.default_type = "";
  //     next();
  //   } else {
  //     next(false);
  //   }
  // },
  components: {},

  computed: {},
  created() {
    this.get_typeChoise();
  },
  mounted() {},
  methods: {
    // 上传产品照片
    uploadPic() {
      // this.$toast({
      //   message: "操作成功",
      //   iconClass: "icon icon-success"
      // });
      upload_image(this.image).then((res) => {
        console.log(res);
      });
    },
    // 获取产品具体型号,手动输入
    getVersion() {
      let that = this;
      MessageBox.prompt("请输入产品型号").then(({ value, action }) => {
        that.versionValue = value;
      });
    },
    // 获取产品类型，手动输入
    get_typeChoise() {
      console.log(this.$store.state);
      this.type = this.$store.state.type_choise;
    },
    getPrice() {
      let that = this;
      MessageBox.prompt("请输入商品价格").then(({ value, action }) => {
        if (!isNaN(value)) {
          //如果value是个数字

          that.price = value;
        } else {
          that.$toast({
            message: "请输入数字",
          });
        }
      });
    },
    
    // 发布商品信息
    publish() {
      if (
        this.type == "" ||
        this.type == "选择分类" ||
        this.price == " " ||
        this.price == "开个价" ||
        this.name == "输入产品型号" ||
        this.name == ""||
        this.describe == ""
      ) {
        this.$toast({
          message: "请将信息填写完整",
        });
      } else {
        // this.$toast({
        //   message: "发布成功",
        //   iconClass: "icon icon-success"
        // });
        upload_info(
          this.describe,
          this.type,
          this.price,
          this.name
        ).then((res) => {
          console.log(res);
        });
      }
    },
  },
};
</script>
<style  scoped>
.content {
  background-color: rgb(243, 250, 243);
  height: 150vh;
  padding: 0 2vw;
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
.upload_picture {
  margin-top: 8vh;
  display: flex;
  justify-content: space-around;
  padding: 5vw;
  background-color: #fff;
  color: lightgray;
}
.picture {
  font-size: 5rem;
}
.detail {
  margin-bottom: 20vh;
}
.trun_reason,
.feeling {
  margin: 3vh 0;
  text-decoration: none;
}
.new {
  color: rgb(99, 130, 130);
}
.type,
.price,
.version,
.new {
  text-decoration: none;
}
.pub_button {
  margin: 8vh 10vw;
  width: 80vw;
}
</style>