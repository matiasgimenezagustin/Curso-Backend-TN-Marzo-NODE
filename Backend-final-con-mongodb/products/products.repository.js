const { query } = require("../config/connection.sql")
const {conectionMongoose} = require('../config/connection.mongodb')
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    codigo: {
        type: String,
        required: true,
    }
})
const Product = conectionMongoose.model('Product', productSchema)

const insertarProducto = async ({titulo, descripcion, precio, stock, codigo}) => {
    try{
        const nuevoProducto = new Product({titulo, descripcion, precio, stock, codigo})
        await nuevoProducto.save()
        return nuevoProducto._id
    }
    catch(error){
        throw {status:500, message: 'Error interno en el servidor'}
    }
}

const seleccionarProductoPorId = async (pid) =>{
    try{
        const producto = await Product.findById(pid)

        if(!producto){
            throw {status: 404, message: 'Producto con id ' + pid + ' no encontrado'}
        }
        else{
            return producto
        }
        
    }
    catch(error){

        if(error.status === 404){
            throw error
        }
        else{
            throw {status:500, message: 'Error interno en el servidor'}
        }
        
    }
}

const deleteProductoPorId = async(pid) =>{
    try{
        const resultado = await Product.findByIdAndDelete(pid)
        if(!resultado){
            throw {status: 404, message: 'Producto con id ' + pid + ' no existe'}
        }
        return {status: 200, message: 'Producto con id ' + pid + ' eliminado correctamente'}   
    }
    catch(error){
        
        if(error.status === 404){
            throw error
        }
        else{ 
            throw {status:500, message: 'Error interno en el servidor'}           
        }      
    }
}

const seleccionarProductos = async () =>{
    try{
        const productos = await Product.find({})
        return productos
    }
    catch(error){
        if(error.status){
            throw error
        }
        else{
            throw {status:500, message: 'Error interno en el servidor'}
        }
    }
}


module.exports = { insertarProducto, seleccionarProductoPorId, deleteProductoPorId, seleccionarProductos}