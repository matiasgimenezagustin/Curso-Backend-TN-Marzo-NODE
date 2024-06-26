const { database, query} = require("../config/connection.sql")


//promisfy
const buscarUsuarioPorEmail = async (email) =>{
     /* Hacemos un select para verificar si previamente existe un usuario con este mail */
    try {
        const consultaExistencia = `SELECT * FROM usuarios WHERE email = ?`
        const resultados = await query(consultaExistencia, [email])
        if(resultados.length > 0){
            return resultados[0]
        }
        else{
            return null
        }
    }
    catch (error) {
        console.error('SQL_Error al seleccionar usuarios por email', error)
        throw {status: 500, message: 'Error interno en el servidor'}
    }
}

/* 
buscarUsuarioPorEmail('pepe@gmail.com')
.then(resultado =>{
    console.log('respuesta:', resultado)
})

 */


const insertarUsuario = async (usuario) =>{
    try{
        const consulta = 'INSERT INTO usuarios SET ?'


        const resultado = await query(consulta, usuario)

        return true
    }
    catch(error){
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