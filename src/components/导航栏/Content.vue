<template>
  <div class="item_box">
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item_box{
  flex-grow: 8;
  position: relative;
  top: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  padding-left: 50px;
  
}
</style>