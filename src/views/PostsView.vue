<template>
    <div class="container">
  <main>
      <section>
          <BlogContenido/>
          <div class="containerposts">
             <div class="postlist"><router-link :to="{name: 'horavoz'}">La hora en voz alta</router-link><span>10/10</span></div>
             <div class="postlist"><router-link :to="{name: 'desplegado'}">Blog Desplegado</router-link><span>24/09</span></div>
              <div class="postlist"><router-link :to="{name: 'problemasbuild'}">Problemas con el despliegue</router-link><span>23/09</span></div>
              <div class="postlist"><router-link :to="{name: 'metasblog'}">Metas Blog</router-link><span>02/09</span></div>
              <div class="postlist"><router-link :to="{name: 'comparandoestilos'}">Comparando estilos </router-link><span>29/08</span></div>
              <div class="postlist"><router-link :to="{name: 'mejorandoestilo'}">Mejorando el estilo </router-link><span>21/08</span></div>
              <div class="postlist"><router-link :to="{name: 'segundopost'}">Segundo Post (Explicacion) </router-link><span>16/08</span></div>
              <div class="postlist"><router-link :to="{ name: 'primerpost'}">Primer Post (Prueba) </router-link><span>15/08</span></div>
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
