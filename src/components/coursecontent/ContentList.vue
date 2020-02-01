<template>
  <div class="content-list" :style="{ width : width}">
    <slot name="content-list-item"></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "190px"
    }
  },
  computed: {
    isPage() {
      return this.$route.path.indexOf("coursecontent") != -1;
    }
  }
};
</script>

<style  scoped>
.content-list {
  height: 100%;
  padding: 30px 0;
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>