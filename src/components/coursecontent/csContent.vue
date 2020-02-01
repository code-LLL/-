<template>
  <div class="differ-content">
    <div class="title-box">
      <div class="title">
        <slot name="title-name"></slot>
      </div>
    </div>
    <slot name="p-content"/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.differ-content {
  width: 100%;
  height: 100%;
  position: relative;
}
.differ-content .title-box {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.differ-content .title-box .title {
  min-width: 25%;
  height: 85%;
  background: url("../../assets/img/csContent/titlebac.png") no-repeat;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.differ-content .title-box .title span {
  margin-top: 5px;
  letter-spacing: 5px;
  color: #ffffff;
  font-family: "Youyuan", "微软雅黑";
  font-weight: 500;
  font-size: 20px;
}
.differ-content p{
    text-indent: 2em;
    font-size: 17px;
    margin: 10px 30px 100px ;
    font-family: "Youyuan", "微软雅黑";
    font-weight: 500;
}
</style>