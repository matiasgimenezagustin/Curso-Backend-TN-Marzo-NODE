const { obtenerOCrearCarrito, agregarAlCarrito, obtenerCarritoDetallado, eliminarProductoDelCarrito } = require("./carts.repository")

const agregarAlCarritoService = async (datos) =>{
    const {user_id, product_id, cantidad} = datos
    /* Aca invocamos al repository */
    const carrito = await obtenerOCrearCarrito(user_id)
    const carritoId = carrito.id
    await agregarAlCarrito(carritoId, product_id, cantidad)
    return {status: 200, message: 'Producto agregado al carrito'}
}

const obtenerCarritoService = async (user_id) => {
    const carrito = await obtenerOCrearCarrito(user_id)
    const carritoId = carrito.id
    const carritoDetallado = await obtenerCarritoDetallado(carritoId)
    return {status: 200, message: 'Carrito Obtenido', carrito: carritoDetallado}
}

const eliminarProductoDelCarritoService = async (user_id, product_id) => {
    const carrito = await obtenerOCrearCarrito(user_id)
    await eliminarProductoDelCarrito(carrito.id, product_id)
    const carritoDetallado = await obtenerCarritoDetallado(carrito.id)
    return {status: 200, message: 'Producto eliminado con exito', carrito: carritoDetallado}
}


module.exports = {agregarAlCarritoService, obtenerCarritoService, eliminarProductoDelCarritoService}