<template>
    <div class="post">
        <h2>Metas blog</h2>
        <h3>{{fechaCreacion}}</h3>
        <p>Para poder comenzar otro proyecto, me gustaría dejar funcional el blog, esto pensando en que ya esté toda la base construida, y las modificaciones sean leves, para esto por último me gustaría dos cosas finales, la primera es sacar la función del tiempo para que requiera menos espacio en los post, la otra sería mejorar el archivo router/index.js, para evitar crear tantas líneas por los post, este es el que aún no he planeado como hacerlo, aún tengo que investigar. Con estos últimos cambios ya podría comenzar otros proyectos sin sentir culpa o que abandoné el blog, o podría comenzar otros post que no tengan que ver con el blog<p>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fechaCreacion() {
        const fecha = new Date(2023, 8, 2);
        const dia = fecha.getDate();
        const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const anio = fecha.getFullYear();
        return `${dia} de ${mes[fecha.getMonth()]} del ${anio}`;
    },
  },
};
</script>
<style src="../../assets/styles/post.css"></style>
