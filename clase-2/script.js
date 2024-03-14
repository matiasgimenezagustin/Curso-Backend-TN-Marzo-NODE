/* 

JS tiene un tipado debil y dinamico


*/

/* let nombre = 'pepe'
nombre = 10 */

/* const saludarPersona = () => 'hola'



console.log(saludarPersona()) */

/* let saludar = () =>{
    return 'hola'
} */
/* ES5 */
/* function saludar () {
    return 'hola'
} */

/* saludar = 'hola como andas' */
/* 
console.log(saludar()) */

/* const array = [1, 2, 3]

const newArr = array.map(function(numero){ return 'hola'.repeat(numero)})
const newArr2 = array.map((numero) => 'hola'.repeat(numero))
console.log(newArr2) */


const arr = [1, 2, 3]

const arr2 = [...arr, 4]

arr.pop()

console.log(arr2)