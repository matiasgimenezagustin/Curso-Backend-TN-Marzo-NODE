const { buscarUsuarioPorEmail, guardarUsuario } = require("./auth.repository")

const registerService = (user) =>{

    const {email, password} = user

    if(!email || !password){
        throw {message: 'Inexistent email or password', status: 400}
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        throw {message: 'Email incorrect', status: 400}
    }
    /* buscarUsuarioPorEmail() */
    guardarUsuario({email, password})
}   


module.exports = {registerService}