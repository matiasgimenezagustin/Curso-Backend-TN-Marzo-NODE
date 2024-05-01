const API_KEY = '802a60df-eba1-4238-84b9-fc588e97a0f6'

console.log(process.env.API_KEY)
const authMiddleware = (request, response, next) =>{
    const api_key = request.headers['x-api-key']
    console.log('primero va el middleware')
    if(api_key == API_KEY){
        next()
    }
    else{
        response.status(401).json({ok: false, message: 'Invalid api-key'})
    }
}

module.exports = {authMiddleware}