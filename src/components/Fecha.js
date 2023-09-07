class Fecha{
    static FechaCreacion(d, m, y){
        const fecha = new Date(y,m-1,d);
        const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return `${fecha.getDate()} de ${mes[fecha.getMonth()]} del ${fecha.getFullYear()}`
    }
}
module.exports = Fecha;
