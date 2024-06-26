const { query } = require("../config/connection.sql")

const obtenerOCrearCarrito = async (user_id) => {
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
}

const agregarAlCarrito = async (cart_id, product_id, cantidad) =>{
    const seleccionarProductoStr = 'SELECT * FROM carrito_productos WHERE cart_id = ? AND product_id = ?'
    const productos = await query(seleccionarProductoStr, [cart_id, product_id])
    if(productos.length === 0){
        /* Insertar */
        const insertarProductoAlCarritoStr = 'INSERT INTO carrito_productos (cart_id, product_id, cantidad) VALUES (?, ?, ?)'
        await query(insertarProductoAlCarritoStr, [cart_id, product_id, cantidad])
    }
    else{
        /* Update */
        const actualizarFilaCarritoStr = 'UPDATE carrito_productos SET cantidad = cantidad + ? WHERE cart_id = ? AND product_id = ?'
        await query(actualizarFilaCarritoStr, [cantidad, cart_id, product_id])
    }
    
}
 
const obtenerCarritoDetallado = async (cart_id) =>{
    const obtenerCarritoStr = `
    SELECT productos.*, carritoProductos.cantidad FROM productos 
    productos JOIN carrito_productos carritoProductos 
    ON
    productos.id = carritoProductos.product_id
    WHERE
    carritoProductos.cart_id = ?
    `
    const carrito = await query(obtenerCarritoStr, [cart_id])
    return carrito
}


const eliminarProductoDelCarrito = async ( cart_id, product_id ) => {
    const eliminarProductoStr = "DELETE FROM carrito_productos WHERE cart_id = ? AND product_id = ?"
    await query(eliminarProductoStr, [cart_id, product_id])
}




module.exports = {obtenerOCrearCarrito, agregarAlCarrito, obtenerCarritoDetallado, eliminarProductoDelCarrito}