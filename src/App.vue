<template>
  <div id="app">
    <MainHeader />
    <router-view/>
  </div>
</template>

<script>

import MainHeader from '@/components/导航栏/MainHeader.vue'
export default {
  components:{
    MainHeader
  }
}
</script>

<style scoped>

</style>
