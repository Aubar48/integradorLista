//require
const fs = require('fs');
const dataTarea = require('./dataTarea.json');
const Tarea = require("./Tarea");
const { leerJSON, escribirJSON } = require('./leerEscribir')

//funcionalidad
module.exports = {
    listarTareas: () => {
        console.log("Listado de tareas: ");
        dataTarea.forEach((tarea) => {
            console.log(`${tarea.id}-> ${tarea.titulo} --> ${tarea.estado}`.green);
        });
    },
    agregarTarea: (id, titulo) => {
        const tareaExistente = dataTarea.find(tarea => tarea.id === id);
        if (tareaExistente) {
            console.log(`ERROR: El ID ${id} ya existe en la base de datos.`.red);
            return;
        } else {
            let nuevaTarea = new Tarea(id, titulo);
            dataTarea.push(nuevaTarea);
            escribirJSON(dataTarea);
            console.log(`El nuevo ID ${id} se agregó a la lista de tareas de la base de datos con éxito.`);
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
        console.log("Listado de tareas " + estado + ": ");
        dataTarea.forEach((tarea) => {
            if (tarea.estado === estado && estado === "Terminada") {
                console.log(`${tarea.id} -> Titulo: ${tarea.titulo} --> Estado: ${tarea.estado}`.green);
            } else if (tarea.estado === estado && estado === "Pendiente") {
                console.log(`${tarea.id} -> Titulo: ${tarea.titulo} --> Estado: ${tarea.estado}`.red);
            } else if (tarea.estado === estado && estado === "No iniciada") {
                console.log(`${tarea.id} -> Titulo: ${tarea.titulo} --> Estado: ${tarea.estado}`.yellow);
            }
        })
    },
    modificarTarea: (id, titulo, estado) => {
        dataTarea.forEach((tarea) => {
            if (tarea.id + 1 == id) {
                tarea.titulo = titulo;
                tarea.estado = estado;
                escribirJSON(dataTarea)
                console.log('Tarea modificado con exito'.green);
                return tarea;
            }
        });
    }
}


