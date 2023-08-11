<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <BlogHeader/>
  <BlogFecha/>
  <BlogEtiqueta/>
  <BlogContenido/>
  <BlogFooter/>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue"
import BlogFecha from "./components/BlogFecha.vue"
import BlogEtiqueta from "./components/BlogEtiqueta.vue"
import BlogContenido from "./components/BlogContenido.vue"
import BlogFooter from "./components/BlogFooter.vue"
export default {
  name: 'HomeView',
  components: {
      BlogHeader,
      BlogFecha,
      BlogEtiqueta,
      BlogContenido,
      BlogFooter,
  }
}
</script>

<style>
</style>
