/* Aqui gaurderamos nuestro contador middleware */
let contador = 0

const contadorMiddleware = (request, response, next) =>{

    contador++
    console.log(`Se recibio una consulta tipo ${request.method} en direccion ${request.url} (nro_consulta: ${contador})`)
    next()
}

module.exports = {contadorMiddleware}

