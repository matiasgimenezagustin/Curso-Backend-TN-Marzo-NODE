/* Aqui guardamos los middlewares de autentificacion*/


/*
USO: El middleware es una funcion que se ejecuta ANTES del controllador, especificamente entre el ENVIO de la consulta y la respuesta
Sintaxis de middleware
request: Objeto que contiene informacion de la consulta (headers, params, query, body)
response: Objeto mediante el cual podemos enviar una respuesta
next: una funcion que al ser invocada termina mi middleware y pasa al controlador o middleware
(request, response, next)
*/


const apikeyMiddleware = (request, response, next) =>{
    const api_key_recibida = request.headers['x-api-key']
    if(api_key_recibida === process.env.API_KEY){
        next()
    }
    else{
        return response.status(401).json({ok: false, status: 401, mensaje: 'NO ESTAS AUTORIZADO (invalid api-key)'})
    }
}


module.exports = {apikeyMiddleware}