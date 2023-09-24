<template>
    <div class="post">
        <h2>Despliegue</h2>
        <h3>{{generarFecha(24, 9, 2023)}}</h3>
        <p>Por fin</p>
        <p>Logre desplegar el blog para que lo pueda mostrar gh-pages, básicamente todo fue mi culpa, por algun que otro malentendido del funcionamiento, pero afortunadamente pude resolverlo y aprender en el proceso, aunque si me costo bastante, esto no me habría tomado tanto tiempo, pero es justo de lo que carezco por ahora, tiempo libre.</p>
        <p>Al momento de escribir la instrucción npm run build, me generaba una carpeta dist, gh-pages toma de esta carpeta el index.html, mi problema era que al momento de hacer esto en una nueva rama o en la rama main, se creaba la carpeta, pero no se mantenia en raiz, o sea, en lugar de estar dist, se guardaba como ../dist/ y como estaba configurando GitHub Pages para que tomara ese index, necesitaba estar en raiz, no sabia como tal que mi proyecto que esta en main, puede tener una rama/branch llamada gh-pages, solo con el contenido de dist (o sea de raiz), ahora todo eso resulta evidente, y noto que solo era un problema de estructura y ubicación de archivos, pero en su momento como me quebró la cabeza 😞</p>
        <p>
Ahora que ya tiene lo mínimo para estar funcional, puedo continuar con otros proyectos y/o continuar mejorando el Blog, ya que aun tiene algunas cosas por agregarse y otras por mejorarse.</p>

    </div>
</template>

<script>
import Fecha from "../Fecha.js"
export default {
  data() {
    return {};
  },
  methods:{
    generarFecha(d,m,a){
        return(Fecha.FechaCreacion(d,m,a))
    }
  }
};
</script>
<style src="../../assets/styles/post.css"></style>
