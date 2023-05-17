//require
const argv = require('process').argv
const app = require('./appTarea/funcionesDeTareas');
const colors = require('colors');
colors.enable();
let respuesta = ""
//argv
const button = argv[2].toLowerCase()
//msj antes del if
console.log('Bienvenidos ala appTarea => Comandos:'.blue);
console.log('listar: trae la lista de tareas de la base de datos'.blue);
console.log('buscar: trae la lista de tareas de la base de datos por estado'.blue);
console.log('eliminar: elimina por id, una tarea, de la base de datos '.blue);
console.log('editar: recibe un id y edita titulo y estado de una tarea, de la base de datos'.blue);
// interfaz if con switch
if (typeof button === 'string') {
  switch (button) {
    case 'listar':
      app.listarTareas()
      break;
    case 'agregar':
      let id = +argv[3]
      let titulo = argv[4]
      if ([id,titulo].includes(undefined)) {     
        return console.log('ERROR: Faltan datos : id, titulo, estado de la nueva tarea'.red)}
      respuesta = app.agregarTarea(id, titulo)
      break;
    case 'buscar':
      let filtro = argv[3]
      if (filtro === undefined) {
        return console.log('ERROR: Faltan datos'.red)}
        respuesta = app.buscarTarea(filtro)
        break;
    case 'eliminar':
     let i = +argv[3]
      respuesta = app.eliminarTarea(i)
      break;
      case 'editar':
      let id2 = +argv[3]
      let titulo2 = argv[4]
      let estado2 = argv[5]
      if ([id2,titulo2, estado2].includes(undefined)) {     
        return console.log('ERROR: Faltan datos : id, titulo, estado de la tarea a editar'.red)}
      respuesta = app.modificarTarea(id2, titulo2, estado2)
      break;
    default:
      console.log('ERROR: debes ingresar el comando "listar" "buscar" "eliminar" "editar" para ejecutar esta acción.'.red);
      break;
  }
} else {
  console.log('ERROR: debes ingresar una cadena de texto para ejecutar la acción, checkea el menu.'.red);
}