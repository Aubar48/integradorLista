//require
const fs = require('fs');
const tareasApp = require('./tareas.json');

//funcionalidad
module.exports={
    listarTareas: function(){
        tareasApp.forEach((tarea,i)=>{
            console.log(`${i+1}-> ${tarea.titulo} --> ${tarea.estado}`.blue);
        })
    },
    
}
