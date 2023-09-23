<template>
    <div class="post">
        <h2>Problemas con el despliegue</h2>
        <h3>{{generarFecha(23, 9, 2023)}}</h3>
        <p>Esta ultima semana he estado algo ocupado, aun así he tratado de continuar con el despliegue del blog, pero hasta ahora no me resulta, puede ser culpa miá directamente, que me este equivocando en algún paso, o estoy usando algo desactualizado, al momento de tratar de compilar el proyecto me aparece como exitoso, pero a la hora de revisar los documentos o tratar de subirlos a gh-pages no me los reconoce, me los muestra en blanco, al compilar me informa que hay mas instrucciones para el despliegue en: “https://cli.vuejs.org/guide/deployment.html”</p>
        <img alt="Se muestra compilacion exitosa" src="../../assets/posts/problemasbuild/Ejemplo1.png">
        <p>Lo primero que me salta es un mensaje sobre que Vue CLI esta en mantenimiento y es recomendable iniciar proyectos mediante Vite</p>
        <img alt="Aviso sobre mantenimiento de Vue CLI" src="../../assets/posts/problemasbuild/Ejemplo2.png">
        <p>Esto me hace pensar que quiza es cuestion de que Vue CLI esta en mantenimiento que no me permite desplegarlo, pero si fuera esto tampoco me dejaría iniciar un nuevo proyecto, igual intenté iniciar un proyecto en limpio y desplegarlo, y aun me genera el index.html en blanco, sigo un tutorial de cero y me sigue presentando el index en blanco y problemas para desplegarlo, quizá deba hacer pruebas con Vite y quizá migrar ahí el proyecto para continuar, o continuar intentando con Vue CLI solo, esto porque seria tonto pasarme a otra herramienta que aunque use Vue, puede que tenga problemas pues no se descarta que el error sea por mi desconocimiento.</p>
       <img alt="Se muestra la pagina en blanco y vacia" src="../../assets/posts/problemasbuild/Ejemplo3.png">

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
