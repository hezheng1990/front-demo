<template>



  <el-container>
    <el-header class="fh">可爱的小满</el-header>
    <el-container>
      <el-aside width="20%">

        <div class="message-board">
          <el-card>
            <div slot="header" class="clearfix">
              <p class="fh" style="line-height: 100px">留言板</p>
              <div class="clearfix">
                <el-button class="bt" style="float: right;" type="text" @click="showDialog = true">添加留言</el-button>
                <el-button class="bt" style="float: left;" type="text" @click="showFileDialog = true">上传文件</el-button>
                <el-button class="bt" style="float: left;" type="text" @click="showLoginDialog = true">注册/登陆</el-button>
              </div>



<!--              <el-button class="bt" style="float: right;" type="text" @click="query">查询</el-button>-->
            </div>
            <div class="message-list">
              <el-timeline>
                <el-timeline-item v-for="(message, index) in messages" :key="index" :timestamp="message.timestamp">
                  <el-card>
                    <div>{{ message.content }}</div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>

          <el-dialog title="添加留言" :visible.sync="showDialog" width="30%">
            <el-form ref="messageForm" :model="newMessage" label-width="80px">
              <el-form-item label="留言内容" prop="content">
                <el-input type="textarea"   placeholder="placeholder"  v-model="newMessage.content" autocomplete="off" ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="showDialog = false">取消</el-button>
              <el-button type="primary" @click="addMessage">添加</el-button>
            </div>
          </el-dialog>

          <el-dialog title="上传图片" :visible.sync="showFileDialog" width="30%">
            <el-form ref="messageForm" :model="newMessage" label-width="80px">
              <el-form-item label="小满的生日" prop="content">
                <el-input type="text"    placeholder=""  v-model="password" autocomplete="off" ></el-input>
              </el-form-item>
              <el-form-item label="选择文件" prop="content">
                <el-input type="file" @change="handleFile"   placeholder=""  autocomplete="off" ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="showFileDialog = false">取消</el-button>
              <el-button type="primary" @click="uploadFiles">添加</el-button>
            </div>
          </el-dialog>


          <el-dialog title="注册或登陆" :visible.sync="showLoginDialog" width="30%">
            <el-form ref="messageForm" :model="newMessage" label-width="80px">
              <el-form-item label="用户名" prop="content">
                <el-input type="text"    placeholder=""  v-model="userName" autocomplete="off" ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="content">
                <el-input type="text"    placeholder=""  v-model="userPassword" autocomplete="off" ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="showLoginDialog = false">取消</el-button>
              <el-button type="primary" @click="login">添加</el-button>
            </div>
          </el-dialog>
        </div>
      </el-aside>
      <el-container>

        <el-main>

<!--          <div class="ffoot">-->
<!--            <img class="fimg" src="../assets/20240509-201459.jpg" />-->
<!--          </div>-->
<!--          <div>-->
<!--            <img class = "fimg" src="http://123.249.95.0:8081/home/file/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240605201209.jpg"/>-->
<!--          </div>-->
<!--          <div class="ffoot">-->
<!--            <video src="../assets/飞书20240507-181845.mp4" controls="controls" width="350px" height="600px"></video>-->
<!--            <video src="../assets/飞书20240509-201446.mp4" controls="controls" width="350px" height="600px"></video>-->
<!--          </div>-->

          <el-carousel :interval="3000" height="800px" type="card">
            <el-carousel-item  v-for="(item,index) in images" :key="item">

              <video class="fheight"  width="100%" height="200px" v-if="getMediaType(item) == 2" :src="item" controls="controls"></video>

              <img class = "fheight"  width="100%" height="200px"  v-else :src="item"/>
            </el-carousel-item>
          </el-carousel>

<!--          <div class="block">-->

<!--            <el-carousel class="fheight">-->
<!--              <el-carousel-item  v-for="(item,index) in images" :key="item">-->
<!--               -->
<!--              </el-carousel-item>-->
<!--            </el-carousel>-->
<!--          </div>-->


<!--          <div class="ffoot" v-for="(item,index) in images">-->
<!--            <div>-->
<!--              <video class="fwidth" v-if="getMediaType(item) == 2" :src="item" controls="controls"></video>-->

<!--              <img class = "fwidth" v-else :src="item"/>-->
<!--            </div>-->


<!--          </div>-->
          <TimeLine></TimeLine>

        </el-main>

        <el-footer>

        </el-footer>
      </el-container>
    </el-container>
  </el-container>



</template>

<script>
import {add, pageMessage,queryImg,login} from "../utils/request";

import axios from 'axios';
import vi from "element-ui/src/locale/lang/vi";
import {Carousel} from "element-ui";
import {setToken} from '../utils/auth'
import TimeLine from "./TimeLine.vue";

export default {
  name: 'Paint',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showDialog: false,
      showFileDialog: false,
      showLoginDialog:false,
      newMessage: {
        content: ''
      },
      messages: [
        { content: '这是留言一', timestamp: new Date() },
        { content: '这是留言二', timestamp: new Date() }
      ],
      images:[],
      selectedFile: null,
      password: '',
      userName:'',
      userPassword:''
    }
  },
  components:{
    TimeLine
  },
  mounted(){
    this.query()
    this.queryImg()
  },
  methods: {
    handleFile(){
      this.selectedFile = event.target.files[0];
    },
    uploadFiles(){
      const formData = new FormData();
      formData.append("file",this.selectedFile);
      let response =  axios.post("https://hezheng.xyz/xiaoman/test/file?password="+this.password,formData,{
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(res=>{
        this.showFileDialog = false;
        console.log(res.data);
        this.$message(res.data.msg)
      });


    },
    login(){
      login({"name":this.userName,"password":this.userPassword}).then(res=>{
        console.log(res.data)
        setToken(res.data)
        this.showLoginDialog = false;
        this.$message(res.data)
      })
    },
    addMessage() {
      if (this.$refs.messageForm.validate()) {

        add("hezheng",this.newMessage.content)
        this.query()
        this.showDialog = false;
        this.$refs.messageForm.resetFields();
      }
    },

    queryImg(){
      queryImg().then(e=>{

        let _this = this;
        _this.images = []
        for (let item in e.data){
          _this.images.push("https://www.hezheng.xyz/home/file/"+e.data[item])
        }

      })
    },

    query(){
      pageMessage().then(e =>
        {
          let _this = this;
          _this.messages = []
          for (let item in e.data){
            _this.messages.push({content:e.data[item].name,timestamp: new Date()})
          }
        }

      )

    },
    getMediaType(name){

      let type = name.substring(name.lastIndexOf(".")+1);


      let imgType = ['bmp','jpg','png','tif','gif','pcx','tga','exif','fpx','svg','psd','cdr','pcd','dxf','ufo','eps','ai','raw','WMF','webp','avif','apng'];

      if(imgType.some(e=>e==type)){
        return 1;
      }

      let videoType = ['mp4','mkv','avi','mov','wmv','3gp','rm','rmvb']

      if(videoType.some(e=>e==type)){
        return 2
      }

      return 1;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ffoot{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.ffoot div {
  margin: 20px;

}

.fwidth{
  width: 60%;
}

.fheight{
  height: 900px;
}


.fimg {
  width: 700px;
  height: 500px;
}
.fh {
  font-size: 40px;
  font-family: 华文彩云;
  margin: auto;
}

.message-board {
  margin: 20px;
}

.message-list {
  line-height: 20px;
  margin-top: 20px;
  font-family: 幼圆;
  //background-color: #D3DCE6;
}

.aside {
  border:1px solid red;
  width: 100%;
  height: 100%;
}


.el-header, .el-footer {


  text-align: center;
  line-height: 60px;
}

.el-aside {
  //background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  //background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.bt {
  font-family: 华文隶书;
  font-size: medium;
}

.clearfix:after {
  display: table;
  content: "";
  clear: both;
}

.father div {

  width: 100%;
  height: 100%;


}


</style>
