<template>
  <nav id="header">
    <div class="headimg_box"><slot name="headimg"></slot></div>
    <div class="content_box">
      <slot name="content"></slot>
      <slot name="login"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header {
  background: #ffffff;
  width: 100%;
  height: 110px;
  position: relative;
  font-family: "YouYuan";
  display: flex;
}

/* 图标部分 */
.headimg_box {
  position: relative;
  width: 400px;
  height: 98%;
  top: 6px;
  right: 30px;
  transform: skewX(-25deg);
  border-bottom-right-radius: 20px;
  background: rgb(141, 196, 237);
  box-shadow: 0 0 13px rgba(121, 124, 127, 0.71);
  padding: 0px 20px 0px 60px;
  color: #ffffff;
  /* border-bottom-right-radius: 10%  90%;  */
}

/* 导航栏项目 */
.content_box{
  border-top: 6px solid rgb(141, 196, 237);
  display: flex;
  width: calc(100vw - 400px);
}

</style>