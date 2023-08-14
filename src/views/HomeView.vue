<template>
    <div class="container">
  <header>
      <img alt="Vue logo" src="../assets/logo.png">
      <BlogHeader/>
  </header>
  <main>
      <section>
          <BlogContenido/>
      </section>
      <aside>
          <div class="BlogFecha"><BlogFecha/></div>
          <div class="BlogEtiqueta"><BlogEtiqueta/></div>
      </aside>
  </main>
    </div>
  <footer>
      <BlogFooter/>
  </footer>
</template>

<script>
import BlogHeader from "../components/BlogHeader.vue"
import BlogFecha from "../components/BlogFecha.vue"
import BlogEtiqueta from "../components/BlogEtiqueta.vue"
import BlogContenido from "../components/BlogContenido.vue"
import BlogFooter from "../components/BlogFooter.vue"
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

<style src="../assets/styles/HomeView.css">
</style>
