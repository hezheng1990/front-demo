<script setup>

</script>

<template>
    <div class="father">

        <div class ="head">header</div>
        <div class="side">side</div>
        <div class = "main">main</div>
        <div class ="foot">foot</div>

    </div>
</template>

<style scoped>
.father {
  width: 100%;
  height: 700px;
  border: #5daf34 1px solid;
  display: grid;
  grid-template-columns:20% 80%;    /*设置列宽网格线*/
  grid-template-rows:10% 70% 10%; /*设置行高网格线*/
  justify-items: center;
  align-items: center;
  //grid-gap: 10px;
  grid-template-areas:
    "header header"
    "side main"
    "foot foot";

}

.father div {
  background-color: #5daf34;
  width: 100%;
  height: 100%;
  border:1px red solid;

}

.head {
  grid-area: header;
}

.side {
  grid-area: side;
}


.main {
  grid-area: main;
}

.foot {
  grid-area: foot;
}

.grid-container {

}
</style>
