<template>
    <div class="container">
  <header>
      <img alt="Vue logo" src="../assets/logo.png">
      <BlogHeader/>
  </header>
  <main>
      <section>
          <BlogContenido/>
          <PrimerPost/>
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
import PrimerPost from "../components/post/PrimerPost.vue"
export default {
  name: 'HomeView',
  components: {
      BlogHeader,
      BlogFecha,
      BlogEtiqueta,
      BlogContenido,
      BlogFooter,
      PrimerPost,
  }
}
</script>

<style src="../assets/styles/HomeView.css">
</style>
