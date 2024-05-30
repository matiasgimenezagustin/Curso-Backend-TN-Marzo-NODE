const { buscarUsuarioPorEmail, insertarUsuario} = require("./auth.repository")
const bcrypt = require('bcrypt')
const { validacionUsuario } = require("./utils/validationUser.util")


const registerService = async (usuario) =>{
    try{
        const {email, password} = usuario
        validacionUsuario({email, password})

        const usuarioExistente = await buscarUsuarioPorEmail(usuario.email) //usuario | null

        if(usuarioExistente){
            throw {status: 400, message: 'ERROR: email ya registrado'}
        }

        const passwordHash = await bcrypt.hash(usuario.password, 10)
        const result = await insertarUsuario({email: usuario.email, password: passwordHash})

        if(result){
            return {ok: true, message: 'Se inserto un usuario'}
        }

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


const loginService = async (usuario) =>{
    try{
        const {email, password} = usuario
        validacionUsuario(usuario)
        const usuarioExistente = await buscarUsuarioPorEmail(usuario.email)
        if(!usuarioExistente){
            throw { status: 400, message: 'No existe usuario con ese email'}
        }

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




module.exports = {registerService, loginService}