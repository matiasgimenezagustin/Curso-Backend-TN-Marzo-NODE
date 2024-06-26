

/* 
Que deberiamos validar antes de crear un producto
titulo: + de 3 caracteres y tiene que ser string
precio: mas de 1 y numerico
descripcion: + 20 caracteres y debe ser string
stock:  almenos 1 o mas
codigo: que sea string y mas de 1 caracter

Vamos a recibir estos datos y se los pasaremos al servicio, el servicio se encargara de validar
que el objeto recibido tenga correctamente las propiedades (NO DEBE FALTAR PROPIEDADES NI DEBE HABER PROPIEDADES DEMAS)

crearProduct({title, precio, descripcion, stock, codigo})

crearProduct({title, precio, descripcion, stock, codigo, fecha: 'pepe', queDesayune: true}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[fecha, queDesayune] no son datos habilitados para crear un producto'}


crearProduct({title, precio, descripcion, stock, codigo, fecha: 'pepe', nombre: 'juan'}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[fecha, nombre] no son datos habilitados para crear un producto'}


crearProduct({title, precio, descripcion, codigo, fecha: 'pepe', nombre: 'juan'}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[stock] es necesario para crear un producto'}


crearProduct({title, precio, codigo, fecha: 'pepe', nombre: 'juan'}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[stock, descripcion] es necesario para crear un producto'}


SI todo esta bien, entonces retornara un objeto 
{status: 201, message: 'Producto creado con exito', producto: productoCreado}


TODO DEBE SER TESTEADO POR POSTMAN

RECOMENDACION: For in, For of
propiedades : ['title', 'precio']
for(let property in productToCreate){
    propiedades.includes(property)
}
for(let propery of propiedades){
    productToCreate[property]
}

Object.keys(objeto) Les va a dar un array de propiedades
*/

const { crearProducto, obtenerProductoPorId, eliminarProductoPorId, buscarProductos } = require("./products.service")

const postProductController = async (req, res) =>{

    /* const {descripcion, titulo, precio, stock, codigo} = req.body */
    try{
        const result = await crearProducto(req.body)
        res.status(200).json(result)
    }
    catch(error){

        res.status(error.status).json(error)
    }
}

const getProductByIdController = async (req, res) => {
    try{
        const {pid} = req.params
     /*    if( !(pid && !isNaN(pid))  ){
            throw {status: 400, message: 'El parametro pid debe ser un valor numerico valido'}
        } */
        const result = await obtenerProductoPorId(pid)
        res.status(200).json(result)
    }
    catch(error){
        res.status(error.status).json(error)
    }
}

const deleteProductByIdController = async (req, res)=>{
    try{
        const{pid} = req.params //obtenemos el producto por id
       /*  if(!(pid && !isNaN(pid))){
            throw {status:400, message:"El parametro pid debe ser un valor numerico" }
        } */
        const result = await eliminarProductoPorId (pid)
        res.status(200).json(result)
    }
    catch(error){
        
        res.status(error.status).json(error)
    }
}

const getAllProducts = async (req, res) => {
    try{
        const result = await buscarProductos()
        res.status(200).json(result)
    }
    catch(error){
        res.status(error.status).json(error)
    }
}




module.exports = {postProductController, getProductByIdController, deleteProductByIdController, getAllProducts}