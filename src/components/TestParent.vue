

<template>
    <div>
      <h1>parent</h1>
      <h2>{{message}}</h2>
      <test-child :message="message"  @custom-event="childMessage"></test-child>
    </div>
</template>


<script>

import TestChild from "./TestChild.vue";

export default {
  data(){
    return {
      message:'这是父组的内容'
    }
  },
  methods: {
    childMessage(e){
      this.message = e;
      console.log(e);
    }
  },
  components: {
    TestChild
  }
}
</script>

<style scoped>

</style>
