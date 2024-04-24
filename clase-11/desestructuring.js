const { obtenerDatos } = require("./config")
/* 
obtenerDatos() */

const camion = {
    mesa: 'mesa',
    silla: 'silla',

}

const {silla: sillita, mesa} = camion

console.log('llevo dentro del camion una ' + camion.mesa)

console.log('llevo dentro del camion una ' + camion['mesa'])


console.log(sillita)

/* const usuario = {
    'Nombre Completo': 'pepe',
    'edad': 18
} */

console.log(usuario)
const {['Nombre Completo'] : nombre_usuario, edad: edad_usuario} = usuario

/* const {nombre} = obtenerDatos()
 */
console.log(nombre, edad_usuario)

/* const {
    ['NOMBRESIT 0']: nombre
} = obtnerDatosUsuario() */

