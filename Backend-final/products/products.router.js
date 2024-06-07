const express = require('express')

const productRouter = express.Router()

/* /api/products */

/* 

Get all :
Post crear producto: /
Put Actualizar producto: /
Delete Eliminar un producto: /
Get by id : /:pid

*/


/* 
TODO: Agregar el middleware de verificacion de token
*/

productRouter.get('/')
productRouter.post('/')
productRouter.put('/')
productRouter.delete('/')
productRouter.get('/:pid')


module.exports = {productRouter}