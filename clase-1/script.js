/* let nombre = 'pepe'
if(true){
    nombre = 'carlos'
    console.log(nombre) //carlos
    if(true){
        let nombre ='Tamara' //Variable local
        console.log(nombre) //tamara

    }
}
console.log(nombre) 


let numero 
numero = '0'


console.log(nombre)

 */


/* truthy y falsy  */

/* console.log(Boolean('hola')) */

/* falsy 
'', "", ``
0
null
undefined
NaN
false
*/

/* let nombre = 'sadsdsda'

if( nombre.length > 5){
    console.log('es valido')
}
else{
    console.log('Es invalido')
}
 */
/* 
const personaje = {

    apellido: 'suarez'
}

if( personaje.nombre && personaje.nombre.length > 5){
    console.log('es valido')
}
else{
    console.log('Es invalido')
}
 */

/* 
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

*/

const numeros = [2, 3, 7, 10, 2]


/* Declaracion */
const sumatoria = (listaDeNumeros) =>{
    /* for(let i = 0; i < listaDeNumeros.length; i++){
        console.log(numeros[i])
    } */

    let resultado = 0
    for(let numero of listaDeNumeros){
        resultado = numero + resultado
    }

    return resultado
}

/* Invocacion */

const gastos = [100, 4000, 600, 3]
let sumatoriaDeNotas = sumatoria(numeros)
let sumatoriaDeGastos = sumatoria(gastos)
console.log(sumatoriaDeGastos)


/* 
CONST SE USA EN:

Arrays
Objetos 
Funciones
*/

