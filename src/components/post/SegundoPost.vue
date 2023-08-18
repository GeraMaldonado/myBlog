<template>
    <div class="post">
        <h2>Segundo Post (explicacion del Blog)</h2>
        <h3>{{fechaCreacion()}}</h3>
        <p>Explicación de la construcción del Blog.</p>
        <p>Este proyecto se construye con Vue, comencé con un proyecto simple, el proyecto default en Vue CLI, al momento de querer crear la barra de navegación, me pareció más fácil el instalar el router de Vue, esto también lo hice con el propósito de factorizar mas el código y no se sienta que App.vue estuviera muy cargado, cree una nueva carpeta llamada view, donde incluí un home, y lo eje en la ruta “/”, comencé a escribir el código de las partes que quería que tuviera el blog, como por ejemplo el header y el footer, la información, los posts, todo esto lo deje en la carpeta de components, al principio tenia todos los componentes en el home, pero al ver que el footer y header no cambiarían decidí recolocarlos en App.vue, cree una pagina de estilos para el home, el objetivo por ahora mas allá de que se vea estético, es el que todo este bien proporcionado, así que cada div de los templates tiene dibujado un contorno para que sea más visual el como se moverán.</p>
        <p>Ya teniendo una estructura base, proseguí en la sección de posts, donde estarán en listados, con su respectivo estilo, también una visualización de los posts.</p>
        <p>El mayor valor de este proyecto, radica en familiarizarme mas con Vue, también el manejar un proyecto un poco mas estructurado.</p>
        <p>Me hubiera gustado haber tenido el blog preparado para estar documentando los avances el mismo día que los integraba, así tendría mas posts y podría hacer mas pruebas.</p>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fechaCreacion() {
        const fecha = new Date(2023, 7, 16);
        const dia = fecha.getDate();
        const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const anio = fecha.getFullYear();
        return `${dia} de ${mes[fecha.getMonth()]} del ${anio}`;
    },
  },
};
</script>
<style src="../../assets/styles/post.css"></style>
