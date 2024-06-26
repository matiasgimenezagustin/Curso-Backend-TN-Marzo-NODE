const { query } = require("../config/connection.sql")

const {conectionMongoose} = require('../config/connection.mongodb')
const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    product_id: {type: conectionMongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    cantidad: {type: Number, required: true}
})
const cartSchema = new mongoose.Schema({
    user_id: {type: conectionMongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    items: [cartItemSchema]
})

const Cart = conectionMongoose.model('Cart', cartSchema)


const obtenerOCrearCarrito = async (user_id) => {
    try{
        let carrito = await Cart.findOne({user_id: user_id})
        if(!carrito){
            carrito = new Cart({user_id: user_id, items: []})
            await carrito.save()
        }
        return carrito
    }
    catch (error) {
        console.error("MONGO_DB_ERROR al obetener o crear un carrito", error)
        throw { status: 500, message: "INTERNAL SERVER ERROR" }
    }
}

/* const obtenerOCrearCarrito = async (user_id) => {
    try{
        const seleccionarCarritoPorIdStr = 'SELECT * FROM carritos WHERE user_id = ?'
        let carritos = await query(seleccionarCarritoPorIdStr, [user_id])
        if(carritos.length === 0){
            const insertarCarritoStr = 'INSERT INTO carritos (user_id) VALUES (?)'
            await query(insertarCarritoStr, [user_id])
            carritos = await query(seleccionarCarritoPorIdStr, [user_id])
        }
        return carritos[0]
    }
    catch (error) {
        console.error("SQL_ERROR al obetener o crear un carrito", error)
        throw { status: 500, message: "INTERNAL SERVER ERROR" }
    }
} */

const agregarAlCarrito = async (cart_id, product_id, cantidad) =>{
    try{
        let carrito = await Cart.findById(cart_id)
        if(!carrito){
            throw {status: 404, message: 'carrito no encontrado'}
        }
        const itemIndex = carrito.items.findIndex((item ) => {
            return item.product_id.equals(product_id)
        })
        if(itemIndex === -1){
            carrito.items.push({product_id: product_id, cantidad: cantidad})
        }
        else{
            carrito.items[itemIndex].cantidad += cantidad
        }
        await carrito.save()
    }
    catch(error){
        console.error("MONGO_DB_ERROR al obetener o crear un carrito", error)
        throw { status: 500, message: "INTERNAL SERVER ERROR" }
    }
    
} 

/* const agregarAlCarrito = async (cart_id, product_id, cantidad) =>{
    const seleccionarProductoStr = 'SELECT * FROM carrito_productos WHERE cart_id = ? AND product_id = ?'
    const productos = await query(seleccionarProductoStr, [cart_id, product_id])
    if(productos.length === 0){

        const insertarProductoAlCarritoStr = 'INSERT INTO carrito_productos (cart_id, product_id, cantidad) VALUES (?, ?, ?)'
        await query(insertarProductoAlCarritoStr, [cart_id, product_id, cantidad])
    }
    else{

        const actualizarFilaCarritoStr = 'UPDATE carrito_productos SET cantidad = cantidad + ? WHERE cart_id = ? AND product_id = ?'
        await query(actualizarFilaCarritoStr, [cantidad, cart_id, product_id])
    }
    
} */
 
const obtenerCarritoDetallado = async (cart_id) =>{
    try{
        const carrito = await Cart.findById(cart_id).populate('items.product_id')
        if(!carrito){
            throw {status: 404, message: 'carrito no encontrado'}
        }
        return carrito
    }
    catch(error){
        console.error("MONGO_DB_ERROR al obetener o crear un carrito", error)
        throw { status: 500, message: "INTERNAL SERVER ERROR" }
    }
}


const eliminarProductoDelCarrito = async ( cart_id, product_id ) => {
    try{
        const carrito = await Cart.findById(cart_id)
        if(!carrito){
            throw {status: 404, message: 'carrito no encontrado'}
        }
        carrito.items = carrito.items.filter((item) => !item.product_id.equals(product_id))
        await carrito.save()
    }
    catch(error){
        console.error("MONGO_DB_ERROR al obetener o crear un carrito", error)
        throw { status: 500, message: "INTERNAL SERVER ERROR" }
    }
}




module.exports = {obtenerOCrearCarrito, agregarAlCarrito, obtenerCarritoDetallado, eliminarProductoDelCarrito}