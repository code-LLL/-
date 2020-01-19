<template>
  <div id="app">
    <Head />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'

export default {
  components: {
    Head
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  box-sizing: border-box
}
img{
  width: 100%;
  height: 100%;
}
body,html{
  width: 100%;
  height: 100%;
  /* background: #2c3e50; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
