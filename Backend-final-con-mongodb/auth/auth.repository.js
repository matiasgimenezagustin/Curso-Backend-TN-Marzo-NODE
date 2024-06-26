const {conectionMongoose} = require('../config/connection.mongodb')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = conectionMongoose.model('User', userSchema)

/* Es una buena practica definir los modelos y schemas en un archivo aparte */

//promisfy
const buscarUsuarioPorEmail = async (email) =>{
     /* Hacemos un select para verificar si previamente existe un usuario con este mail */
    try {
        const usuario = await User.findOne({email: email})
        if(!usuario){
            return null
        }
        return usuario
    }
    catch (error) {
        console.error('MONGODB_Error al seleccionar usuarios por email', error)
        throw {status: 500, message: 'Error interno en el servidor'}
    }
}


const insertarUsuario = async (usuario) =>{
    try{
        const nuevoUsuario = new User(usuario)
        await nuevoUsuario.save()
        return true
    }
    catch(error){
        console.log('Error al insertar un usuario: ', error)
        throw {status: 500, message: 'Error interno en el servidor'}
    }
}






/* guardarUsuario({email: 'pepe@gmail.com', password: 'pepe123'})
 */

module.exports = {buscarUsuarioPorEmail, insertarUsuario}



/* 
fn primeraConsulta 
fn segundaConsulta

primeraConsulta(data, handler)
primeraConsulta(data, (error, resultados) => {
    if(error){
        tirarError()
    }
    else{
        //Si no hay errores hare la segunda consulta
        segundaConsulta(data, (error, resultados)=>{
            if(error){
                tirarError()
            }
        })
    }
})

try{
    const results = await primeraConsulta(data)
    if(results){
        const resultados = await segundaConsulta(data)
    }
}
catch(err){
    console.log(err)
}

*/