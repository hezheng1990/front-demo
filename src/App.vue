<!--
 * @Description:
 * @Author: muqingkun
 * @Date: 2024-06-20 16:33:36
 * @LastEditTime: 2024-06-20 18:32:30
 * @LastEditors: muqingkun
 * @Reference:
-->
<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <transition name="rotate-fall">
      <div id="app">
        <router-view class="app-router-view"></router-view>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'App',
  mounted() {
    document.title = '小满的小花园'
  }
}
</script>

<style>
html {
  background: #fffbf6;
}
/* 滚动条整体 */
::-webkit-scrollbar {
    width: 12px;  /* 垂直滚动条宽度 */
    height: 12px; /* 水平滚动条高度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 6px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 6px;
}

/* 滚动条滑块悬停 */
::-webkit-scrollbar-thumb:hover {
    background: #8f8f8f;
}

ul {
    margin: 0;            /* 清除默认外边距 */
    padding: 0;           /* 清除默认内边距 */
    list-style: none;     /* 清除默认列表样式 */
}

li {
    margin: 0;            /* 清除默认外边距 */
    padding: 0;           /* 清除默认内边距 */
}


</style>
