const {registerService} = require("./auth.service")

const loginController =  (req, res)=> {
    res.status(200).json({ok: true})
}

const registerController = (req, res) =>{
    const {email, password} = req.body
    try{
        const result = registerService({email: email, password: password})
    }
    catch(error){
        res.status(error.status).json(error)
    }
}

const verifyTokenController = (req, res) =>{

}


module.exports = {loginController, registerController, verifyTokenController}