//require
const fs = require('fs');
const dataTarea = require('./dataTarea.json');
const Tarea = require("./Tarea");
const { leerJSON, escribirJSON } = require('./leerEscribir')

//funcionalidad
module.exports = {
    listarTareas: () => {
        console.log(`Listado de tareas: `.bold.yellow);
        dataTarea.forEach((tarea) => {
            console.log(`${tarea.id}-> ${tarea.titulo} --> ${tarea.estado}`.bold.green);
        });
    },
    agregarTarea: (id, titulo) => {
        const tareaExistente = dataTarea.find(tarea => tarea.id === id);
        if (tareaExistente) {
            console.log(`ERROR: El ID ${id} ya existe en la base de datos.`.bold.red);
            return;
        } else {
            let nuevaTarea = new Tarea(id, titulo);
            dataTarea.push(nuevaTarea);
            escribirJSON(dataTarea);
            console.log(`El nuevo ID ${id} se agregó a la lista de tareas de la base de datos con éxito.`.bold.green);
            return nuevaTarea;
        }

    },

    eliminarTarea: (id) => {
        dataTarea.forEach((tarea) => {
            if (tarea.id + 1 == id) {
                dataTarea.splice(tarea.id);
                console.log(`El id ${tarea.id + 1} de la base de datos de tarea fue eliminada`.red);
                return escribirJSON(dataTarea)
            }
        });
    },
    buscarTarea: function (estado) {
        if (!(estado == `pendiente` || estado == `no iniciada` || estado == `terminada`)){
            return console.log(`ERROR: Los estados son : terminada, pediente, no iniciada`.bold.red)
        } else {
        console.log(`Listado de tareas  ${estado}: `.bold.yellow);
        dataTarea.forEach((tarea) => {
            if (tarea.estado.toLowerCase() === estado.toLowerCase() && estado == "terminada") {
                console.log(`${tarea.id} -> Titulo: ${tarea.titulo} --> Estado: ${tarea.estado}`.green);
            } else if (tarea.estado.toLowerCase() === estado.toLowerCase() && estado == "no iniciada") {
                console.log(`${tarea.id} -> Titulo: ${tarea.titulo} --> Estado: ${tarea.estado}`.red);
            } else if (tarea.estado.toLowerCase() === estado.toLowerCase() && estado == "pendiente" ) {
                console.log(`${tarea.id} -> Titulo: ${tarea.titulo} --> Estado: ${tarea.estado}`.yellow);
            }
        })
    }
    },
    modificarTarea: (id, titulo, estado) => {
        dataTarea.forEach((tarea) => {
            if (tarea.id  == id) {
                tarea.titulo = titulo;
                tarea.estado = estado;
                escribirJSON(dataTarea)
                console.log(`El id: ${tarea.id}, de la base de datos de tarea, se a modificado con exito`.bold.green);
                return tarea;
            }else {
                return console.log(`ERROR: El id ${id} no existe en la base de datos.`.bold.red);
                
            }
        });
    },
    textMenu: () => {
        console.log(`0 -> Bienvenidos ala appTarea => Comandos:`.bold);
        console.log(`1 -> agregar: agrega una tarea ala lista, por id y titulo:`.blue);
        console.log(`2 -> listar: trae la lista de tareas de la base de datos`.blue);
        console.log(`3 -> buscar: trae la lista de tareas de la base de datos por estado`.blue);
        console.log(`4 -> eliminar: elimina por id, una tarea, de la base de datos`.blue);
        console.log(`5 -> editar: recibe un id y edita titulo y estado de una tarea, de la base de datos`.blue);
        console.log(`6 -> salir: Para finalizar el programa`.blue);
    },
    salir : () => {
        console.log(`Hasta luego :)`.bold.green);
    }
}


