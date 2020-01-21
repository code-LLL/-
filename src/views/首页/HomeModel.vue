<template>
  <div id="home">
    <slot name="home-img"></slot>
    <slot name="home-content"></slot>
  </div>
</template>

<script>
export default {
  name: "HomeModel"
};
</script>

<style  scoped>
#home{
  width: 100%;
  position: relative;
}
</style>