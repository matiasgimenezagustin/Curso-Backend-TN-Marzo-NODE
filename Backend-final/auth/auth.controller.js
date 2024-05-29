const {registerService} = require("./auth.service")

const loginController =  (req, res)=> {
    res.status(200).json({ok: true})
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

}


module.exports = {loginController, registerController, verifyTokenController}