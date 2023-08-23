<template>
    <div class="container">
  <main>
      <section>
          <BlogContenido/>
          <div class="containerposts">
              <router-link :to="{name: 'mejorandoestilo'}">Mejorando el estilo </router-link><span>21/08</span>
              <router-link :to="{name: 'segundopost'}">Segundo Post (Explicacion) </router-link><span>16/08</span>
              <router-link :to="{ name: 'primerpost'}">Primer Post (Prueba) </router-link><span>15/08</span>
          </div>
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
