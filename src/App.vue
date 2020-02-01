<template>
  <div id="app">
    <MainHeader v-if="!ifSign"/>
    <router-view />
    <Footer v-if="!ifSign"/>
  </div>
</template>

<script>
import MainHeader from "@/components/导航栏/MainHeader.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  components: {
    MainHeader,
    Footer
  },
  computed: {
    ifSign() {
      return (
        this.$route.path.indexOf("/login") != -1 ||
        this.$route.path.indexOf("/signin") != -1
      );
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
