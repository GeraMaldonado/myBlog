<template>
    <h2>Primer Post (Prueba)</h2>
    <p>{{fechaCreacion()}}</p>
    <p>Hola mundo</p>
    <p>Este es mi primer post, el que tambien tomare como prueba para ver el funcionamiento de mi blog</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fechaCreacion() {
        const fecha = new Date(2023, 7, 15);
        const dia = fecha.getDate();
        const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const anio = fecha.getFullYear();
        return `${dia} de ${mes[fecha.getMonth()]} del ${anio}`;
    },
  },
};
</script>
