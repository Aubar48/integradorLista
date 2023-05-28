//require
const argv = require('process').argv
const app = require('./appTarea/funcionesDeTareas');
const colors = require('colors');
colors.enable();
let respuesta = ""
//argv
const button = typeof argv[2] === 'string' ? argv[2].toLowerCase() : undefined;

//msj antes del if
// interfaz if con switch
app.textMenu()
if (typeof button === 'string') {
  switch (button) {
    case 'listar':
      app.listarTareas()
      break;
    case 'agregar': 
      let titulo = argv[3]
      if ([titulo].includes(undefined)) {
        console.log(`ERROR: Faltan datos : id, titulo, estado de la nueva tarea`.bold.red)
        break;
      }else{
        respuesta = app.agregarTarea(titulo)
        break;
      }
    case 'buscar':
      const filtro = typeof argv[3] === 'string' ? argv[3].toLowerCase() : undefined;
      if (typeof filtro === 'string') {
        respuesta = app.buscarTarea(filtro)
        break;
      } else {
        console.log(`ERROR: Los estados son : terminada, pediente, no iniciada`.bold.red)
        break;
      }
    case 'eliminar':
      let i = +argv[3] ? +argv[3] : undefined
      if (i === undefined) {
        console.log("ERROR: falta id de la tarea a eliminar".bold.red);
        break;
      }else{
        respuesta = app.eliminarTarea(i)
        break;
      }
     
    case 'editar':
      let id2 = +argv[3]
      let titulo2 = argv[4]
      let estado2 = argv[5]
      if ([id2, titulo2, estado2].includes(undefined)) {
        console.log(`ERROR: Faltan datos : id, titulo, estado, de la tarea a editar`.bold.red)
        break;
      }else{
        respuesta = app.modificarTarea(id2, titulo2, estado2)
        break;
      }
    case 'salir':
      app.salir()
      break;
    default:
      console.log(`ERROR: debes ingresar el comando "listar" "agregar" "buscar" "eliminar" "editar" "salir" para ejecutar esta acción.`.bold.red);
      break;
  }
} else {
  console.log(`ERROR: debes ingresar una cadena de texto para ejecutar la acción, checkea el menu.`.bold.red);
}


