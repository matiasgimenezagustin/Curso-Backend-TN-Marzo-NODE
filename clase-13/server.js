/* Punto de entrada de la app */
const express = require('express')
const { obtenerUsuarios } = require('./users')


const app = express()

let contador_usuarios = 0
app.get('/', (request, response) =>{
    console.log('me hicieron un get')
    contador_usuarios++
    console.log('Entro el usuario ' + contador_usuarios)

    response.send('<h1>Hola desde express</h1>')
})

app.get('/test', (request, response) =>{
    response.send('<h1>Hola mundo</h1>')
})

app.get('/users', (request, response) =>{
    console.log('Estos son los request.query:', request.query)
    const {limite} = request.query

    const usuarios = obtenerUsuarios(limite)
    
    const respuesta = {
        usuarios,
        mensaje: 'Usuarios obtenidos'
    }
    response.json(respuesta)
})


app.listen(8000, ()=>{
    /* Esta callback se ejecuta cuando mi aplicacion este funcionando */
    console.log('Mi aplicacion se esta escuchando en http://localhost:' + 8000 )
})

