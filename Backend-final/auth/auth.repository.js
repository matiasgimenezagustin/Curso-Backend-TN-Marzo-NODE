const { database, query} = require("../config/connection.sql")
const bcrypt = require('bcrypt')

//promisfy
const buscarUsuarioPorEmail = async (email) =>{
     /* Hacemos un select para verificar si previamente existe un usuario con este mail */
    try {
        const consultaExistencia = `SELECT * FROM usuarios WHERE email = ?`
        const resultados = await query(consultaExistencia, [email])
        if(resultados.length > 0){
            console.log(resultados)
            return resultados[0]
        }
        else{
            return null
        }
    }
    catch (error) {
        console.error('SQL_Error al seleccionar usuarios por email', error)
        /* throw {status: 500, message: 'ERROR INTERNO EN LA BASE DE DATOS'} */
    }
}


buscarUsuarioPorEmail('pepe@gmail.com')
.then(resultado =>{
    console.log('respuesta:', resultado)
})






const guardarUsuario = async (usuario) =>{
    try{
        const usuarioExistente = await buscarUsuarioPorEmail(usuario.email) //usuario | null

        if(usuarioExistente){
            throw {status: 400, message: 'ERROR: email ya registrado'}
        }

        const passwordHash = await bcrypt.hash(usuario.password, 10)
    
        const consulta = 'INSERT INTO usuarios SET ?'
        const nuevoUsuario = {
            email: usuario.email,
            password: passwordHash
        }

        const resultado = await query(consulta, nuevoUsuario)
        
        console.log("Se inserto el usuario")

    }
    catch(error){
        console.error('SQL_Error al intentar insertar un usuario', error)
    }
    
}

guardarUsuario({email: 'juancito@gmail.com', password: 'pepe123'})




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


/* guardarUsuario({email: 'pepe@gmail.com', password: 'pepe123'})
 */

module.exports = {buscarUsuarioPorEmail, guardarUsuario}



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