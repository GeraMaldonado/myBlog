<template>
    <div class="post">
        <h2>Comparando Estilos</h2>
        <h3>{{ fechaCreacion() }}</h3>
        <p>Ya debía este Post</p>
        <p>Revisando una pequeña comparativa sobre como estaba maquetado el blog, al principio marque los bordes para saber con que estaba trabajando, el único que tenia color, era el Footer que tenia un color verde, el cual me servia para identificar sus limites más rápido, pues este tenia que abarcar la mayor parte de la pantalla, el titulo y el contenido, solo abarcaría un pequeño espacio a lo largo, y posicionado en el centro.</p>
        <img alt="Ejemplo1" src="../../assets/posts/comparacion/ejemplo1.png">

        <p>Para mejorar el estilo primero elimine el icono de Vue, después, como ya había mencionado en otro post, elegí colores oscuros, estos inspirados en otras paginas con colores similares al tener estilo “nocturno” a mi parecer los colores no provocan un cansancio visual igual que elegí un contrastante blanco para las letras, el Footer paso de verde a un negro, deje el contorno negro solo del contenido, fecha y etiquetas, eliminándolo del contenedor de todo lo anterior y del titulo, por ultimo cambie el tamaño de letra en general.</p>
        <img alt="Ejemplo 1" src="../../assets/posts/comparacion/ejemplo2.png">
        <p>En la sección de Posts, al igual que los cambias mencionados con anterioridad, también reacomode los enlaces de abajo hacia arriba.</p> 
        <img alt="Ejemplo 1" src="../../assets/posts/comparacion/ejemplo3.png">
        <img alt="Ejemplo 1" src="../../assets/posts/comparacion/ejemplo4.png">
        <p>Al igual los posts, a mi parecer son mas vistosos con la elección del tamaño de la letra y los colores, les agregue un interlineado para mejorar la lectura, ya que por lo menos a mi las letras demasiado juntas provocan dolor de cabeza, deje el texto con un estilo justificado, y por ultimo aunque no se note mucho le aplique un margen para evitar que llegue completamente al borde.</p>
        <img alt="Ejemplo 1" src="../../assets/posts/comparacion/ejemplo5.png">
        <img alt="Ejemplo 1" src="../../assets/posts/comparacion/ejemplo6.png">
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fechaCreacion() {
        const fecha = new Date(2023, 7, 29);
        const dia = fecha.getDate();
        const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const anio = fecha.getFullYear();
        return `${dia} de ${mes[fecha.getMonth()]} del ${anio}`;
    },
  },
};
</script>
<style src="../../assets/styles/post.css"></style>
