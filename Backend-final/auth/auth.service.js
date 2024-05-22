const { buscarUsuarioPorEmail } = require("./auth.repository")

const registerService = (user) =>{
    const {email, password} = user
    if(!email || !password){
        
        throw {message: 'Inexistent email or password', status: 400}
    }
    buscarUsuarioPorEmail()

}   


module.exports = {registerService}