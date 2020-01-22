<template>
  <div class="contents">
    <div class="rel_contents">
        <slot name="content-item-box"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contents{
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}
.contents::before{
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
  background: #edf7ff;
  width: 150px;
  height: 150px;
  left: -50px;
  top: 60px;
}
.contents::after{
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
  background: #edf7ff;
  width: 300px;
  height: 300px;
  right: -100px;
  top: 20px;
}

.rel_contents{
  width: 85%;
  height: 370px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>