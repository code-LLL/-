<template>
  <div class="content" @click="itemClick()">
    <slot name="item-content"></slot>
    <div v-if="active"></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  data(){
    return{
      // active: false
    }
  },
  computed:{
    active(){
      return this.$route.path.indexOf(this.path) !=-1
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>

.content{
  margin: 5px 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  position: relative;
}

.content>div {
  position: absolute;
  bottom: -10px;
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background: #ffbc72;
}
</style>