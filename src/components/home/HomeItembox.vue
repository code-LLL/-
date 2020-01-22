<template>
    <div class="itembox" @click="itemClick">  
        <slot name="home-item"></slot>
        <slot name="home-item-back"></slot>
    </div>    
</template>

<script>
export default {
    props:{
      path:String
    },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.itembox{
    width: 300px;
    height: 100%;
    position: relative;
    /* background:#b2dafd; */
    border-radius: 15px;
    border: 6px solid #ffffff;
    box-shadow: 0 0 3px rgba(1, 1, 1, 0.1);
    cursor: pointer;
    overflow: hidden;
}
.itembox:hover{
  transform: translateY(-20px);
  transition: transform 0.5s ease ;
}
.itembox:hover .content-item{
  opacity: 0;
  transform: scale(1.1);
  transition: all 0.3s linear;
}
</style>