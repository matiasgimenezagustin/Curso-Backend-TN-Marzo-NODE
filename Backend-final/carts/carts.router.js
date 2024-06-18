const express  = require('express')
const { postCartController } = require('./carts.controller')

const { verifyTokenMiddleware } = require('../auth/auth.middleware')

const cartsRouter = express.Router()

cartsRouter.get('/')

/* Este middleware verifica que se envie token, sino va a responder con fallo, si todo esta bien pasa al controlador */
cartsRouter.post('/', verifyTokenMiddleware, postCartController)
/* {user_id: x, rol: 'admin'} */

module.exports = {cartsRouter}