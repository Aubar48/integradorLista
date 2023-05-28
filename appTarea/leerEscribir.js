const {readFileSync,writeFileSync} = require('fs')
const {join} = require('path')

const leerJSON = () => {
    const dataJSON = JSON.parse(readFileSync(join(__dirname,'./dataTarea.json'),'utf-8')) 
    return dataJSON 
}

const escribirJSON = (Tarea) => {
    const dataStringnify = JSON.stringify(Tarea, null, 3)
    writeFileSync(join(__dirname,'./dataTarea.json'),dataStringnify,'utf-8')
}

module.exports = {
    leerJSON,
    escribirJSON
}