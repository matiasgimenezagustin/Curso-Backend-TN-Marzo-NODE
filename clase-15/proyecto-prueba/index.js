const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

/* 
methods: get, post, put, delete
endpoint: direccion de nuestro controlador
controller: la funcion que define que hacer una vez se comunican con este endpoint

app.method('endpoint', controller)

Sintaxis de un controlador:
request: Objeto que contiene informacion de la consulta (headers, params, query, body)
response: Objeto mediante el cual podemos enviar una respuesta
(request, response)

El middleware es una funcion que se ejecuta ANTES del controllador, especificamente entre el ENVIO de la consulta y la respuesta


Ejercicio:
Por cada consulta que se haga a mi pagina vamos a incrementar un contador, lo mostraremos por consola:
Ej:
Se recibio una consulta (nro_consulta: 1)
Se recibio una consulta (nro_consulta: 2)
*/

let contador = 0

/* Sintaxis de middleware
request: Objeto que contiene informacion de la consulta (headers, params, query, body)
response: Objeto mediante el cual podemos enviar una respuesta
next: una funcion que al ser invocada termina mi middleware y pasa al controlador o middleware
(request, response, next)

*/

const contadorMiddleware = (request, response, next) =>{

    contador++
    console.log(`Se recibio una consulta tipo ${request.method} en direccion ${request.url} (nro_consulta: ${contador})`)
    next()
}


const apikeyMiddleware = (request, response, next) =>{
    const api_key_recibida = request.headers['x-api-key']
    if(api_key_recibida === process.env.API_KEY){
        next()
    }
    else{
        return response.status(401).json({ok: false, status: 401, mensaje: 'NO ESTAS AUTORIZADO (invalid api-key)'})
    }
}

app.use(contadorMiddleware)
app.use(apikeyMiddleware)

app.get('/test', (request, response)=>{
    console.log('Se ejecuta el controlador')
    response.send(`se hizo un get`)
})

app.post('/test', (request, response)=>{
    console.log('Se ejecuta el controlador')
    response.send(`Se hizo un post`)
})

app.listen(3000, ()=>{
    console.log('El  servidor se esta ejecutando en http://localhost:'+3000)
})


/* 

La api key es una clave que nos ayuda a saber que quien se comunica con nosotros es alguien que queremos que se pueda comunicar con nosotros

El valor del api_key se envian en los headers de mi request, especificamente en una propiedad llamada x-api-key

ejemplo:

request = {
    method: 'GET',
    url: '/test',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'api_key_value'
    },
    params: {},
    query: {}
}
api_key_recibida = request.headers['x-api-key']
6a8bceb2-5a85-47b7-9ebe-e2f9d443997f

Debemos autenticar al usuario mediante el api_key

*/