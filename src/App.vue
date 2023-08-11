<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <BlogHeader/>
  <BlogFecha/>
  <BlogEtiqueta/>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue"
import BlogFecha from "./components/BlogFecha.vue"
import BlogEtiqueta from "./components/BlogEtiqueta.vue"
export default {
  name: 'App',
  components: {
      BlogHeader,
      BlogFecha,
      BlogEtiqueta,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
