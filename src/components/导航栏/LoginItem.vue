<template>
  <div class="login" @click="itemClick">
    <slot name="login-item-content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.login span {
  width: 55px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 2px solid #ffbc72;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
.login .login_span {
  background: #ffbc72;
  color: #ffffff;
}
</style>