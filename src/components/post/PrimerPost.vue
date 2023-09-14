<template>
    <div class="post">
        <h2>Primer Post (Prueba)</h2>
        <h3>{{generarFecha(15,8,2023)}}</h3>
        <p>Hola mundo</p>
        <p>Este es mi primer post, el que tambien tomare como prueba para ver el funcionamiento de mi blog</p>
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
