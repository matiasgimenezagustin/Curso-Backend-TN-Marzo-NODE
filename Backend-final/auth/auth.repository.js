const { database } = require("../config/connection.sql")
const bcrypt = require('bcrypt')

//promisfy
const buscarUsuarioPorEmail = (email) =>{
     /* Hacemos un select para verificar si previamente existe un usuario con este mail */
    const consultaExistencia = `SELECT * FROM usuarios WHERE email = ?`
    database.query(consultaExistencia, [email], (error, resultados) =>{
        if(error){
            console.error('SQL_Error al seleccionar usuarios por email', error)
            throw {status: 500, message: 'ERROR INTERNO EN LA BASE DE DATOS'}
        }
        else{
            if(resultados.length > 0){
                console.log(resultados)
                return resultados[0]
            }
            else{
                return null
            }
        }
    })
}
/* buscarUsuarioPorEmail('juan@gmail.com') */







const guardarUsuario = async (usuario) =>{
    try{
        const usuarioExistente =  buscarUsuarioPorEmail(usuario.email) //usuario | null

        if(usuarioExistente){
            throw {status: 400, message: 'ERROR: email ya registrado'}
        }

        const passwordHash = await bcrypt.hash(usuario.password, 10)
    
        const consulta = 'INSERT INTO usuarios SET ?'
        const nuevoUsuario = {
            email: usuario.email,
            password: passwordHash
        }
        database.query(consulta, nuevoUsuario, (error, resultado) =>{
            if(error){
                console.error('SQL_Error al intentar insertar un usuario', error)
            }
            else{
                console.log("Se inserto el usuario")
            }
        } )
    }
    catch(error){

    }
    
}




const test = async  (usuario) =>{
    const consultaExistencia = `SELECT * FROM usuarios WHERE email = ?`
    database.query(consultaExistencia, [usuario.email], async (error, resultados) =>{
        if(error){
            console.error('SQL_Error al seleccionar usuarios por email', error)
            throw {status: 500, message: 'ERROR INTERNO EN LA BASE DE DATOS'}
        }
        else{
            if(resultados.length > 0){
                console.log(resultados)
                console.error('Usuario existente')
            }
            else{
    
                const passwordHash = await bcrypt.hash(usuario.password, 10)
            
                const consulta = 'INSERT INTO usuarios SET ?'
                const nuevoUsuario = {
                    email: usuario.email,
                    password: passwordHash
                }
                database.query(consulta, nuevoUsuario, (error, resultado) =>{
                    if(error){
                        console.error('SQL_Error al intentar insertar un usuario', error)
                    }
                    else{
                        console.log("Se inserto el usuario")
                    }
                } )
            }
        }
    })
}
test({email: 'pee@gmail.com', password: 'pepe123'})


/* guardarUsuario({email: 'pepe@gmail.com', password: 'pepe123'})
 */

module.exports = {buscarUsuarioPorEmail, guardarUsuario}