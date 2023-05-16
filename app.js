//require
const argv = require('process').argv
const app = require('./appTarea/funcionesDeTareas')
const colors = require('colors');
colors.enable();
//argv
const button = argv[2]
//msj antes del if
console.log('Bienvenido ala appTarea'.green);
console.log('Comando: listar'.green);
// interfaz if con switch
if (typeof button === 'string') {
    switch (button) {
      case 'listar':
        app.listarTareas()
        break;
      default:
        console.log('ERROR: debes ingresar el comando "listar" para ejecutar esta acción.'.red);
        break;
    }
  } else {
    console.log('ERROR: debes ingresar una cadena de texto para ejecutar la acción, checkea el menu.'.red);
  }