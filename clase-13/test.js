/* Punto de entrada de la app */
const express = require('express')


const app = express()


app.listen(8000, ()=>{
    /* Esta callback se ejecuta cuando mi aplicacion este funcionando */
    console.log('Mi aplicacion se esta escuchando en el puerto ' + 8000)
})