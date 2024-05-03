const express = require('express')

const productsRoute = express.Router()

/* /api/products */

productsRoute.get('/', ( res, req) =>{
    res.send('productos')
})
productsRoute.post('/', ( res, req) =>{
    res.send('productos POST')
})

/* /api/products/new */
productsRoute.put('/new', ( res, req) =>{
    res.send('productos PUT')
})

module.exports = {productsRoute}