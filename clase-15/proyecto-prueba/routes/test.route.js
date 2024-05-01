const express = require('express')

const testRoute = express.Router()

/* Se usa para obtener recursos */
testRoute.get('/', (request, response)=>{
    console.log('Se ejecuta el controlador')
    response.send(`se hizo un get`)
})

/* Se usa para enviar datos al servidor */
testRoute.post('/', (request, response)=>{
    console.log(request.body)
    response.send(`Se hizo un post`)
})

/* Se usa para actualizar algun recurso ya creado */
testRoute.put('/', (request, response)=>{
    console.log(request.body)
    response.send(`Se hizo un put`)
})

/* Se usa para eliminar recursos de mi app */
testRoute.delete('/', (request, response)=>{
    console.log(request.body)
    response.send(`Se hizo un delete`)
})


module.exports = {testRoute}