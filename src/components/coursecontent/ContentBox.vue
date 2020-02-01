<template>
  <div class="content-box">
    <div class="position">
      <span>当前位置：</span>
      <i class="iconfont icon-home"></i>
      <span class="ps-home">首页</span>
      <slot name="position"></slot>
    </div>
    <div class="content">
        <img class="angel" src="@/assets/img/csContent/angel.png" alt="">
        <slot name="differ-content"></slot>
    </div>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.css";
export default {};
</script>

<style  scoped>
.content-box {
  flex: 1;
  min-height: 580px;
  /* border: 2px solid rgba(1, 1, 1, 0.2); */
  box-shadow: 0 0 20px rgba(1, 1, 1, 0.2);
  border-bottom-right-radius: 140px;
  position: relative;
}
.position {
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border-bottom: 2px dotted #f3f3f3;
  color: #b5b3b3;
  font-family: "YouYuan", "微软雅黑";
  font-weight: 500;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
}
.content {
  position: relative;
  width: 100%;
  height: calc(100% - 40px);
}
.content>.angel{
    position: absolute;
    bottom: 0;right: 0;
}

</style>