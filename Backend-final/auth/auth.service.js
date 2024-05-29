const { buscarUsuarioPorEmail, insertarUsuario} = require("./auth.repository")
const bcrypt = require('bcrypt')


const registerService = async (usuario) =>{
    try{
        const {email, password} = usuario

        if(!email || !password){
            throw {message: 'Inexistent email or password', status: 400}
        }
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            throw {message: 'Email incorrect', status: 400}
        }

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





module.exports = {registerService}