<template>
  <div class="main_img">
    <slot name="bacimg"></slot>
    <div class="main_img_contet">
      <slot name="home-title"></slot>
      <slot name="home-Englishtitle"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.main_img{
  width: 100%;
  height: 600px;
  margin-top: 10px;
  position: relative;
}
.main_img img{
  width: 100%;
  height: auto;
}
.main_img_contet{
  position: absolute;
  top: 100px;
  left: 10%;
}
.main_img_contet h1{
  font-size: 100px;
  letter-spacing: 10px;
}
.main_img_contet p{
  text-align: left;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 600;
}
</style>