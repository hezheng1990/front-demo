<template>
  <div class="message-board">
    <header>
      <p class="fh">生命的轨迹</p>
    </header>

    <ul class="timeline">
      <!-- Item 1 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">我出生啦</span>
            <span class="time-wrapper"><span class="time">2023-10-27</span></span>
          </div>
          <div class="desc">
            大家好！我是一个刚刚来到这个世界的小宝宝。我今天终于出生了，见到了爸爸妈妈和家人们。我好开心哦！这里的一切都好新奇，好温暖。我听到爸爸妈妈的声音，他们好像很高兴。我现在好小好软，喜欢被抱着和听温柔的声音。我会慢慢长大，希望大家多多照顾我哦！
          </div>
        </div>
      </li>

      <!-- Item 2 -->
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">我长出了牙齿</span>
            <span class="time-wrapper"><span class="time">2024-06-20</span></span>
          </div>
          <div class="desc">
            大家好，我是小宝宝！我有个大新闻要告诉大家哦！我长出两颗小牙齿啦！它们像小白豆豆一样，闪闪发亮。妈妈说我现在笑起来更可爱了。我喜欢咬东西，咬玩具，咬手指，什么都想咬，因为我的牙齿好痒哦！我好开心，我的小牙齿还会继续长出来，我会变得越来越棒！
          </div>
        </div>
      </li>


    </ul>
  </div>
</template>

<script>
import {pageMessage} from "../utils/request";
import {add} from "../utils/request";

'../utils/request'
export default {
  data() {
    return {
      showDialog: false,
      newMessage: {
        content: ''
      },
      messages: [
        { content: '这是留言一', timestamp: new Date() },
        { content: '这是留言二', timestamp: new Date() }
      ]
    };
  },
  mounted(){
    this.query()
  },
  methods: {
    addMessage() {
      if (this.$refs.messageForm.validate()) {
         add(this.newMessage.content)
        this.query()
        this.showDialog = false;
        this.$refs.messageForm.resetFields();
      }
    },


    query(){
      pageMessage().then(e =>
        {
          let _this = this;
          _this.messages = []
          for (let item in e.data){
            console.log(e.data[item])
            _this.messages.push({content:e.data[item].name,timestamp: new Date()})
          }
        }

      )

    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,900);

body{
  font-family: 'Raleway', sans-serif;
  color: #333;
}

header h1{
  text-align: center;
  font-weight: bold;
  margin-top: 0;
}

header p{
  text-align: center;
  margin-bottom: 0;
}

.hexa{
  border: 0px;
  float: left;
  text-align: center;
  height: 35px;
  width: 60px;
  font-size: 22px;
  background: #f0f0f0;
  color: #3c3c3c;
  position: relative;
  margin-top: 15px;
}

.hexa:before{
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 15px solid #f0f0f0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: -15px;
}

.hexa:after{
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 15px solid #f0f0f0;
  bottom: -15px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213,213,213);
  background: -moz-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
  background: -webkit-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -o-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -ms-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: linear-gradient(to bottom, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  z-index: 5;
}


.timeline .hexa{
  width: 16px;
  height: 10px;
  position: absolute;
  background: #00c4f3;
  z-index: 5;
  left: 0;
  right: 0;
  margin-left:auto;
  margin-right:auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid #00c4f3;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid #00c4f3;
  bottom: -4px;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  text-align: center;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(255,255,255);
  font-weight: 600;
  z-index: 15;
  padding: 6px 10px;
  text-align: left;
  border-radius: 5px;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -15px;
  height: 0;
  width: 0;
  margin-left: -7px;
  border: solid transparent;
  border-bottom-color: rgb(255,255,255);
  border-width: 8px;
  pointer-events: none;
}


.time-wrapper {
  margin: 4px 0 0 0;
  z-index: 14;
  line-height: 1em;
  color: #fff;
}

.time {
  background: #00c4f3;
  padding: 8px;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  background: rgb(254,254,254);
  box-shadow: 0 0 14PX 1px rgba(0,0,0,0.20);
  border-radius: 16PX;
  z-index: 15;
  line-height: 50px;
  text-indent: 40px;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  z-index: 15;
}

@media(min-width: 768px){
  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .timeline .hexa {
    left: -28px;
    right: auto;
    top: 8px;
  }

  .timeline .direction-l .hexa {
    left: auto;
    right: -28px;
  }

  .direction-l {
    position: relative;
    width: 310px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 310px;
    float: right;
    text-align: left;
  }

  .flag-wrapper {
    display: inline-block;
  }

  .flag {
    font-size: 18px;
    box-shadow: 0 0 14PX 1px rgba(0,0,0,0.20);
    border-radius: 16PX;
  }

  .direction-l .flag:after {
    left: auto;
    right: -14px;
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: rgb(254,254,254);
    border-width: 8px;
  }

  .direction-r .flag:after {
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: rgb(254,254,254);
    border-width: 8px;
    left: -8px;
  }

  .time-wrapper {
    display: inline;
    vertical-align: middle;
    margin: 0;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    padding: 5px 10px;
  }

  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }
}

@media(min-width: 992px){
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .direction-l {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 380px;
    float: right;
    text-align: left;
  }
}


.fh {
  font-size: 40px;
  font-family: 华文彩云;
  margin: auto;
}
</style>
