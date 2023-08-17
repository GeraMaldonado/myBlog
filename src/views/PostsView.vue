<template>
    <div class="container">
  <main>
      <section>
          <BlogContenido/>
          <router-link :to="{ name: 'primerpost'}">Primer Post (Prueba) </router-link>
          <span>15/08</span>
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
export default {
  name: 'PostsView',
  components: {
      BlogFecha,
      BlogEtiqueta,
      BlogContenido,
  }
}
</script>

<style src="../assets/styles/PostsView.css">
</style>
