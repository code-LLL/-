<template>
  <div class="login_box">
    <slot name="login-item"></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.login_box {
  position: relative;
  top: 20%;
  display: flex;
  align-items: center;
  height: 80%;
  width: 200px;
  justify-content: center;
  flex-grow: 1.5;
}
</style>