const express = require('express')
const dotenv = require('dotenv')
const { contadorMiddleware, apikeyMiddleware } = require('./middlewares')
const { testRoute } = require('./routes/test.route')

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



*/





app.use(express.json())//Middleware que nos habilita a recibir body de tipo JSON
app.use(contadorMiddleware)
app.use(apikeyMiddleware)

app.use('/api/test', testRoute)

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