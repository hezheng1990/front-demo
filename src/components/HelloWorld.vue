<template>
  <div class="message-board">
    <el-card>
      <div slot="header" class="clearfix">
        <span>留言板</span>
        <el-button style="float: right;" type="text" @click="showDialog = true">添加留言</el-button>
        <el-button style="float: right;" type="text" @click="query">查询</el-button>
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
          <el-input v-model="newMessage.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="addMessage">添加</el-button>
      </div>
    </el-dialog>
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
.message-board {
  margin: 20px;
}

.message-list {
  margin-top: 20px;
}
</style>
