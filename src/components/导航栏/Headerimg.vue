<template>
    <div class="headimg">
      <div>
        <img src="@/assets/img/导航栏/logo.png" alt />
      </div>
      <div>
        <img src="@/assets/img/导航栏/校名.png" alt="">
        <p>网络教育精品资源共享课</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderImg'
}
</script>

<style scoped>

/* 图标内部 */
.headimg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;height: 100%;
}
.headimg div {
  transform: skewX(25deg);
}
.headimg > div:nth-of-type(1) {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.headimg > div:nth-of-type(2) {
  text-align: left;
}
.headimg > div:nth-of-type(2) img{
  width: 100%;
  height: auto;
}
.headimg > div:nth-of-type(2) > p{
  font-family: 'YouYuan';
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 2px;
}


</style>