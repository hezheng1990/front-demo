<template>
  <div>
    <h2>子组件</h2>
    <p>{{ message }}</p>
    <el-button type="primary" @click="callFather">触发父组件</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message2: '这是子组件的内容'
    }
  },
  methods: {
    callFather(){
      this.$emit('custom-event',"测试参数")
    }
  },
  props:['message']
}
</script>
