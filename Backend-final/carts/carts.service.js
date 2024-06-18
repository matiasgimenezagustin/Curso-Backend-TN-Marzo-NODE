const { obtenerOCrearCarrito, agregarAlCarrito } = require("./carts.repository")

const agregarAlCarritoService = async (datos) =>{
    const {user_id, product_id, cantidad} = datos
    /* Aca invocamos al repository */
    const carrito = await obtenerOCrearCarrito(user_id)
    const carritoId = carrito.id
    await agregarAlCarrito(carritoId, product_id, cantidad)
    return {status: 200, message: 'Producto agregado al carrito'}
}


module.exports = {agregarAlCarritoService}