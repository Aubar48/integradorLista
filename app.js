//require
const argv = require('process').argv
const app = require('./appTarea/funcionesDeTareas');
const colors = require('colors');
colors.enable();
let respuesta = ""
//argv
const button = argv[2].toLowerCase()
//msj antes del if
// interfaz if con switch
  app.textMenu()
  if (typeof button === 'string') {
    switch (button) {
      case 'listar':
        app.listarTareas()
        break;
      case 'agregar':
        let id = +argv[3]
        let titulo = argv[4]
        if ([id,titulo].includes(undefined)) {     
          return console.log(`ERROR: Faltan datos : id, titulo, estado de la nueva tarea`.bold.red)}
        respuesta = app.agregarTarea(id, titulo)
        break;
      case 'buscar':
        let filtro = argv[3].toLocaleLowerCase()
        if (filtro.includes(undefined || null || NaN)) {
          return console.log(`ERROR: Los estados son : terminada, pediente, no iniciada`.bold.red)}
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
          return console.log(`ERROR: Faltan datos : id, titulo, estado, de la tarea a editar`.bold.red)}
        respuesta = app.modificarTarea(id2, titulo2, estado2)
        break;
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


