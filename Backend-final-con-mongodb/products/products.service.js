const { CustomError } = require("../errors/customErrorManager")
const { insertarProducto, seleccionarProductoPorId, deleteProductoPorId, seleccionarProductos } = require("./products.repository")
const { validarPropiedadesProducto } = require("./utils/validarProducto")

const crearProducto = async (producto) =>{
    try{
       
        const paso = validarPropiedadesProducto(producto)
        
        if(paso){
            const idCreado = await insertarProducto(producto)
            return {ok:true,message:`Producto creado con id ${idCreado}`, idCreado: idCreado}
        }
        else{
            throw {status: 400, message: 'Exception: No se pasaron las validaciones del producto'}
        }
    }
    catch(error){ 
        if(error.status){
            throw error
        }
        else{
            throw {status: 500, message: 'Error interno del servidor service de insertar'}
        }
    }
}

const obtenerProductoPorId = async (pid) =>{
    try{
        const producto = await seleccionarProductoPorId(pid)
        return {ok: true, status: 200, producto}
    }
    catch(error){
        if(error.status){
            throw error
        }
        else{
            throw {status: 500, message: 'Error interno del servidor'}
        }
    }
}



const eliminarProductoPorId = async (pid)=>{
    try{
        const producto = await deleteProductoPorId (pid)
        return {ok:true, status:200, producto}
    }
    catch (error){
        if(error.status){
            throw error
        }
        else{
            throw {status:500, message: "Error interno del servidor"}
        }
    }
}


const buscarProductos = async () => {
    try{
        const productos = await seleccionarProductos()
        if(productos.length === 0){
            throw new CustomError('No hay productos', 404)
        }
        return {status: 200, message: 'productos obtenidos', productos: productos}
    }
    catch(error){
        throw error
    }
} 


module.exports = {crearProducto, obtenerProductoPorId, eliminarProductoPorId, buscarProductos}




// const validarIngresoProducto = (valor) => {
//     const propiedades = [valor.titulo, valor.descripcion, valor.codigo, valor.titulo, valor.precio, valor.stock]
//     for(let property in productToCreate){
//         propiedades.includes(property)
//         if(!propiedades.includes(property)){
//             throw {message: `Property ${property} is required`, status: 400}
//         }
//     }
// }
// /*validar titulo mas de 3 caracteres y que sea string   */
// const validacionString = (valor) => {
//     return (typeof valor === 'string' && valor.length > 3)
// }
// /* validar descripcion mas de 20 caracteres  */
// const validacionLongitud = (valor) => {
//     /* isString(value)   */
//     return (typeof valor === 'string' && valor.length > 20)
// }
// /* validar stock al menos uno o mas  */
// const validacionStock = (valor) => {
//     return (typeof valor === 'number' && valor >= 1)
// }
// /* validar codigo lo que de string + de un caracter  */
// const validacionCodigo = (valor) => {
//     return (typeof valor === 'string' && valor.length > 1)
// }
// /* validar que no se ingrese en el titulo la palabfra fecha  */
// const validacionFecha = (valor) => {
//     /*return (typeof valor === 'string' && valor !== 'fecha' || valor !== 'Fecha')*/
//     return (typeof valor === 'string' && !/fecha/i.test(valor));
// }
// /* alidar que la password sean iguales  */
// const validacionPassword = (valor1,valor2) => {
//     return (typeof valor1 === 'string' && valor1.length > 5 && valor1 === valor2)
// }
// module.exports = {validacionEmail, validacionExistencia,validacionString,validacionLongitud,validacionStock,validacionCodigo,validacionFecha,validarIngresoProducto,validacionPassword}



