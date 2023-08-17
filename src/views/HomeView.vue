<template>
    <div class="container">
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
</template>

<script>
import BlogFecha from "../components/BlogFecha.vue"
import BlogEtiqueta from "../components/BlogEtiqueta.vue"
import BlogContenido from "../components/BlogContenido.vue"
export default {
  name: 'HomeView',
  components: {
      BlogFecha,
      BlogEtiqueta,
      BlogContenido,
  }
}
</script>

<style src="../assets/styles/HomeView.css">
</style>
