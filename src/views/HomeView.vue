<template>
    <div class="container">
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
</template>

<script>
import BlogFecha from "../components/BlogFecha.vue"
import BlogEtiqueta from "../components/BlogEtiqueta.vue"
import BlogContenido from "../components/BlogContenido.vue"
import PrimerPost from "../components/post/PrimerPost.vue"
export default {
  name: 'HomeView',
  components: {
      BlogFecha,
      BlogEtiqueta,
      BlogContenido,
      PrimerPost,
  }
}
</script>

<style src="../assets/styles/HomeView.css">
</style>
