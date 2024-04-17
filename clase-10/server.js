const {password_secret: password_secret_config} = require('./config')


const password_secret = 'pepito'



//declaro mi funcion
function nombre ( ){
    console.log('hola')
}

//invocar o llamar
nombre()

//referenciacion
console.log(nombre)


const array = [1, 2, 3]

/* const condicionIgualADos = (elemento) => elemento == 2


array.filter(condicionIgualADos)


array.filter(condicionIgualADos)
 */



const condicion = (elemento ) => elemento > 2 //boolean

console.log(array.filter(condicion ) )

const filtrar = (array, callback) =>{
    for(let element of array){
        if(callback(element)){
    
        }
    }
}


condicion()


/* 
Filter recibe una FUNCION
*/

//empieza la funcion filter, pero ve que hay un parametro
//empieza el proceso de la funcion condicion
//Termina el proceso de la funcion condicion (eso nos da su retorno)
//se procesa la funcion filter


/* 
Practica
Crear un archivo que se llame usuariosManager.js
Crear una funcion que se llame obtenerDatosUsuario
    La funcion debe devolver un objeto como el dejado en el ejemplo
Exportar la funcion y llamarla en otro archivo llamdo app.js
Invocar la funcion en app.js y desestructurar los resultados para obtener las sig variables
    nombre
    dni
    edad
    id_usuario

*/
//EJEMPLO:
const DATOS_USUARIO = {
    'NOMBRESIT 0': 'diogenes',
    DNI_usuariO: '33211343',
    EDAd_usuario_1: '2',
    'IDD usuario(1)': '21321d'
}
