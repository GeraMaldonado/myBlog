<template>
    <div class="post">
        <h2>Mejorando el estilo</h2>
        <h3>{{generarFecha(21,8,2023)}}</h3>
        <p>Trate de mejorar la estética del blog, por lo pronto este estilo me parece por el momento apropiado, aunque no es iniciativa miá, la combinación de colores no es uno de mis talentos, estuve revisando varias paginas para comparar el tipo de colores que usaban, algunas tenían modo nocturno activado, espero que eso no afecte la apariencia, espero en el futuro encontrar una mejor combinación que no atente contra la visión.</p>
        <p>De igual manera, eliminé los margenes adicionales que en su momento sirvieron como guiá, pero no quedarían en el diseño final, y esas secciones del blog, se coloreo el fondo con un fondo un poco mas claro para resaltar su contenido. El único distinto es el footer que lo deje completamente de negro.</p>
        <p>Las letras las cambie a color blanco, y les di un mejor margen para evitar que el texto este sobre el borde, y se tenga una mejor presentación, aquí siento que quizá el blanco no seria la mejor elección, pero por el momento funciona y no creo que se vea tan mal.</p>
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
}
</script>
<style src="../../assets/styles/post.css"></style>
