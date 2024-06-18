const { agregarAlCarrito } = require("./carts.service")

const postCartController = async (req, res) =>{
    const {product_id, cantidad} = req.body 
    const user = req.user
    console.log('Este es el usuario: ', user)
 

    /* Agregan las validaciones de los datos o lo hacen en service*/
    try{
        await agregarAlCarrito({user_id, product_id, cantidad})
    }
    catch(error){
        res.status(error.status).json(error)
    }
}






module.exports = {postCartController}