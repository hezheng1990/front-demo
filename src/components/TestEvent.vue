

<template>
    <div @click="divMethod">
      <a @click="buttonMethod" href="www.baidu.com">测试事件</a>
    </div>
</template>

<script >
export default {
  data(){
    return{

    }
  },
  mounted() {
   // document.addEventListener('click',(e)=>{alert('document')})
  },
  methods: {
    buttonMethod(e){
      //e.stopPropagation();
      //e.preventDefault();
      alert('button');
    },
    divMethod(e){

      alert('div');
    }
  }
}
</script>

<style >

</style>
