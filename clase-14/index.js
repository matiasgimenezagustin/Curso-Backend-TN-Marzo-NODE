const express = require('express')
const { findProductById } = require('./products')
const { authMiddleware } = require('./middlewares')

const app = express()
const PORT = 3000

app.use(authMiddleware)


app.get('/', (request, response)=>{
    console.log('luego va el controlador')
    response.status(201).json({ok: true, message: 'Hola mundo'})
})


app.get('/ruta-protegida', (request, response) =>{
    console.log(request.headers)
    const api_key = request.headers['x-api-key']
    if(api_key == API_KEY){
        response.status(200).json({ok: true, message: 'Has sido autorizado'})
    }
    else{
        response.status(401).json({ok: false, message: 'Invalid api-key'})
    }
})

app.get('/product/:id_product', (request, response)=>{
    const {id_product} = request.params
    const {nombre} = request.query
    console.log({id_product}, {nombre})
    if(!id_product || isNaN(id_product) ){
        return response.status(400).json({ok: false, message: 'id_product must be specified and it needs to be a number'})
    }
    const product = findProductById(id_product)
    if(product){
        return response.status(200).json({ok: true, result: product, message: 'Producto obtenido'})
    }
    else{
        return response.status(404).json({ok: false, message: 'Not found product with id ' + id_product})
    }
})




app.listen(PORT, ()=>{
    console.log(`El servidor esta levantado en http://localhost:${PORT}`)
})

