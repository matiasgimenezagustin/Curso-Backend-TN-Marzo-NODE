const { validacionExistencia } = require("../helpers/validation.helper")
const {registerService,loginService} = require("./auth.service")
const jwt = require('jsonwebtoken')



const loginController = async (req, res)=> {

    const {email, password} = req.body
    try{
        const token = await loginService({email, password})
        res.status(200).json({ok: true, message: 'Usuario logueado', token: token})
    }
    catch(error){
        res.status(error.status).json(error)
    }
   
}

const registerController = async (req, res) =>{
    const {email, password} = req.body
    try{
        const result = await registerService({email: email, password: password})
        res.status(200).json(result)
    }
    catch(error){
        res.status(error.status).json(error)
    }
}

const verifyTokenController = (req, res) =>{
    const token = req.headers['authorization']

    if(!validacionExistencia(token) || !isNaN(token) || token === 'null' || token === 'undefined'){
        res.status(400).json({status:400, message: 'Debes proporcionar un token valido'})
    }
    const esValido = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if(!esValido){
        res.status(401).json({status: 401, message: 'Sin autorizacion token invalido'})
    }
    else{
        res.status(200).json({status:200, message: 'Token valido, usuario logueado'})
    }
}


module.exports = {loginController, registerController, verifyTokenController}