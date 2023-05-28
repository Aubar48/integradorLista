//funcion constructora
function Tarea(id,titulo) {
    this.id = id
    this.titulo = titulo;
    this.estado = "No iniciada";
}
module.exports = Tarea;
