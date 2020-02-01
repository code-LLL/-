<template>
    <div class="title">
      <slot name="title"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  width: 80%;
  height: 45px;
  background: #ffbc72;
  border-bottom-left-radius: 17px;
  border-top: 5px solid #cfa972;
  position: relative;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.title::before {
  content: "";
  display: block;
  position: absolute;
  border-left: 25px solid transparent;
  border-bottom: 40px solid rgba(255, 255, 255, 0.2);
  right: 0px;
}
</style>