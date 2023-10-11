<template>
    <div class="post">
        <h2>La hora en voz alta</h2>
        <h3>{{generarFecha(10, 10, 2023)}}</h3>
        <p>Como a cualquier persona me gusta saber la hora en la que me encuentro, más allá de un mero recordatorio me gusta el saber que tanto tiempo le dedico a las cosas, no es extraño que al tiempo de ocio se le dedique más tiempo de lo pensado, justo por la razón de que nos metemos tanto en una actividad que olvidamos consultar el reloj.</p>
        <p>Yo estaba acostumbrado a escuchar cada hora que pasaba una alarma corta, esto me permitía sin la necesidad de mirar el reloj, saber que hora era, también me daba un aproximado (de una alarma a otra) para saber relativamente que hora era, claro que esto no me hacia la persona más productiva del mundo, pero al menos me permitía el saber cuanto tiempo perdía.</p>
        <img alt="Reloj casio Iluminator" src="../../assets/posts/horavoz/img1.jpg">
        <p>Hace mucho que se me descompuso mi reloj, desde entonces he tenido otros relojes, los cuales no indican cada hora, cuando llegue a pensar porque antes me rendia mas el dia, es porque sabia que hora era en todo momento, y que si estaba en alguna actividad de ocio trabajo, y es escuchaba la alarma corta al menos dos veces, sabia que tenia poco mas de una hora en esa actividad (una aproximación poco exacta).</p>
        <img alt="SmartBand xiaomi 4" src="../../assets/posts/horavoz/img2.jpg">
        <p>Hace cuatro meses que llegó a mis manos un reloj similar a los que tenía antes, recordando la alarma corta y sintiendo un poco de productividad o al menos de control en mi tiempo (y no es que antes no lo buscara, busque programas para celular que lo hicieran vibrar cada hora, para la computadora que te indicará cada hora pasada, y en mi último reloj, una smartband, que vibrará cada hora), estuve pensando que podía hacer quizá un pequeño código que se pudiera ejecutar cada hora, para que me indicara qué hora era.</p>
        <img alt="Reloj casio Wordl Time" src="../../assets/posts/horavoz/img3.jpg">
        <p>Entonces hace como tres meses que me puse a investigar sobre como se podria realizar, y sobre como podria hacer que se ejecute cada hora, agortunadamente esa fue la parte facil, con crontab en linux, usualmente usado para planear digamos hacer opias de seguridad, pude hacer que cada hora, se ejecutara mi codigo realizado en Python, el codigo ya fue otra cosa, utilice la biblioteca time y que guardara la hora actual, y utilizando la voz que tiene como tal linux en sus sistema, solo instalandole el español, y la verdad es que quedó bastante tetrico, una voz muy robotizada, hubiera sido muy divertido el ir documentando paso a paso como lo realice, en ningun momento se me ocurrio, bueno, total, al final vi que se podia usa la voz de google para que diga un texto determinado, ese es un sonido al menos mas familiar, el programa guarda la hora, lo concatena a un texto que dice “Son las ‘tiempo’”, esto con la voz de google, se guarda en un archivo mp3, luego se ejecuta este archivo, y al final se elimina (que este es un paso opcional, en realidad el archivo se va sobreescribiendo), y por fin, tenia mi programa.</p>
        <p>El sábado le realice una modificación que hasta ahora olvidada que le tenía que realizar, es en específico en la hora 01:00 PM y AM, pues al reproducir el archivo mp3 tal cual dice “Son las una de la tarde/mañana” lo cual me da un poco de risa, pero eso le quita seriedad a mi pequeño codigo, asi que lo modifique para que solo en esos casos dijera “Es la”, y en las demás horas diga “Son las” una ligera modificación en realidad, pero esto me hizo recordad… que no lo documente, bueno, ya esta hecho, al menos aquí, otra cosa, lo realice como una función, quien quita y lo utilizó en un futuro para algo mucho más grande.</p>
        <img alt="Captura de pantalla del codigo" src="../../assets/posts/horavoz/img4.png">
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
