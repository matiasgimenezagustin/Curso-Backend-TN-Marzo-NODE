const express  = require('express')
const { postCartController, getCartController, deleteProductFromCartController } = require('./carts.controller')

const { verifyTokenMiddleware } = require('../auth/auth.middleware')

const cartsRouter = express.Router()

cartsRouter.get('/', verifyTokenMiddleware, getCartController)

/* Este middleware verifica que se envie token, sino va a responder con fallo, si todo esta bien pasa al controlador */
cartsRouter.post('/', verifyTokenMiddleware, postCartController)
/* {user_id: x, rol: 'admin'} */

cartsRouter.delete('/:product_id', verifyTokenMiddleware, deleteProductFromCartController)

module.exports = {cartsRouter}