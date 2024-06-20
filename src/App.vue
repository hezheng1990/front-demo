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

</style>
