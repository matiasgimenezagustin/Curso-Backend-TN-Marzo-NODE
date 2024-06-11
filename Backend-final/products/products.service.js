const { validarPropiedadesProducto } = require("./utils/validarProducto")

const crearProducto = (producto) =>{
    try{
        console.log(producto)
        validarPropiedadesProducto(producto)
        

        
        return {ok:true,message:`Producto ${producto.titulo_prod} registrado correctamente`, producto: producto}
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


module.exports = {crearProducto}




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