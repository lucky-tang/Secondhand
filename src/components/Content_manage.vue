<template>
  <div >
    <div v-for="(listItem, index) in list" :key="index" id="all">
      <ul>
        <li v-for="(item, index) in listItem.pictures" :key="index">
          <img :src="item.src" alt="上传图片" class="img" />
        </li>
      </ul>

      <section class="desc">
        <div><span>上传用户:{{listItem.name}}</span></div>
        <div class="reason">
          <p>转手原因</p>
          <textarea name="reason" id="" cols="20" rows="3" :value='listItem.reason'></textarea>
        </div>
        <div class="reason">
          <p>使用感受</p>
          <textarea name="feel" id="" cols="20" rows="3" :value='listItem.feel'></textarea>
        </div>
      </section>
      <section class="operations">
        <button type="button" class="btn btn-success">允许发布</button>
        <button type="button" class="btn btn-info">删除</button>
      </section>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      upLoad_info:'',
      list: [
        {
          pictures: [
            {
              src: require("../assets/img/car.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
          ],
          name: "叮当猫",
          reason: "用了几天，但是手机系统用不管，换了一台新手机，就出了",
          feel: "感觉手机流畅，没有磕碰，只是用了几天",
        },
        {
          pictures: [
            {
              src: require("../assets/img/car.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
          ],
          name: "叮当猫",
          reason: "用了几天，但是手机系统用不管，换了一台新手机，就出了",
          feel: "感觉手机流畅，没有磕碰，只是用了几天",
        },
        {
          pictures: [
            {
              src: require("../assets/img/car.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
          ],
          name: "叮当猫",
          reason: "用了几天，但是手机系统用不管，换了一台新手机，就出了",
          feel: "感觉手机流畅，没有磕碰，只是用了几天",
        },{
          pictures: [
            {
              src: require("../assets/img/car.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
          ],
          name: "叮当猫",
          reason: "用了几天，但是手机系统用不管，换了一台新手机，就出了",
          feel: "感觉手机流畅，没有磕碰，只是用了几天",
        },{
          pictures: [
            {
              src: require("../assets/img/car.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
            {
              src: require("../assets/img/phone.png"),
            },
          ],
          name: "叮当猫",
          reason: "用了几天，但是手机系统用不管，换了一台新手机，就出了",
          feel: "感觉手机流畅，没有磕碰，只是用了几天",
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    get_upLoad_info(){
      get_upLoad()
      .then(res=>{
        this.upLoad_info = res.data
      })
      .catch((error)=>{
        this.$toast('网络出错')
      })
    },

    allow(){
      upload_goods_info(image,appearance,sale_reason,feel,type,address).then(res=>{
          if(res.data = 'success')
          {
            this.$toast('商品发布成功！')
          }
          else{
             this.$toast('商品不合格，请重新上传信息！')
          }
      }).catch((error)=>{
        this.$toast('网络出错！')
      })
    }
  },
};
</script>
<style  scoped>
#all {
  background-color: #eef5eb;
  padding: 1vh;
  margin: 9vh 2vw 5vh 2vw;
  border-radius: 20px;
  box-shadow: 2px 6px #c3ccc8;
}
ul li {
  float: left;
  margin-left: 1vw;
  list-style-type: none;
}
.img {
  height: 20vh;
  width: 20vw;
}
.desc {
  display: inline-block;
  width: 100vw;
  margin: 2vh 4vw 2vh 4vw;
}

.reason p,
.feel p,
.desc span {
  font-size: 0.8rem;
  font-weight: bold;
}
textarea {
  height: 10vh;
  width: 60vw;
  box-shadow: 2px 3px rgb(170, 191, 193);
  font-size: 0.8rem;
}
.operations {
  width: 60vw;
  display: flex;
  justify-content: space-around;
}
</style>