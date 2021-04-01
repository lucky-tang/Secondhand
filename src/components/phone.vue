<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" id="device.html" @click="getImage">
        <a class="mui-navigate-right"> 调用拍照 </a>
      </li>
    </ul>
    <!-- 调用相机获取照片 -->
    <input type="file" accept="image/*" @change="takePhoto($event)" name="file">

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // 扩展API是否准备好，如果没有则监听“plusready"事件
    if (window.plus) {
      this.plusReady();
    } else {
      document.addEventListener("plusready", this.plusReady, false); //
    }
  },

  methods: {
    takePhoto(e){//拍照功能---上传头像
            var file=e.target.files[0]//获取文件对象
            var fd=new FormData()//构造formdata对象
            fd.append('file',file)//向formdata里面存放键值对
            alert(fd.get('file').name)
           console.log(fd.get("file").name)
            // fd.append('uid',this.$store.getters.getUid)//向formdata里面存放键值对，this.$store.getters.getUid是用户的uid
            // this.axios.post("http://127.0.0.1:7000/me/upAvatar",fd).then(res=>{
            //     if(res.data.code===1){
            //         //如果上传成功，则获取图片的地址
            //        this.getAvatar()
            //     }
            // })
        },

    // 扩展API准备完成后要执行的操作
    plusReady() {
      var ws = plus.webview.currentWebview(); //pw回车可输出plus.webview
    },
    getImage() {
      let cmr = plus.camera.getCamera(); // 获取摄像头对象
      let res = cmr.supportedImageResolutions[0]; // 字符串数组，摄像头支持的拍照分辨率
      let fmt = cmr.supportedImageFormats[0]; // 字符串数组，摄像头支持的拍照文件格式
      console.log("Resolution :" + res + ", Format: " + fmt);
      cmr.captureImage(
        (path) => {
          alert("调用成功: " + path);
        },
        (error) => {
          // 拍照操作失败的回调函数
          alert("调用失败: " + error.message);
        },
        { resolution: res, format: fmt } // 摄像头拍照参数
      );
    },
  },

  components: {},

  computed: {},

  mounted() {},
};
</script>
<style  scoped>
</style>