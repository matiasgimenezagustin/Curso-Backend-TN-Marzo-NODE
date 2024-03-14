"use strict"

/* Clase 3 */



/* let nombre : string = 'pepe' 


let respuesta : string | null = prompt()
 */
/* 
const funcion = (condicion : boolean) : string | undefined =>{
    if(!condicion){
        return 'hola'
    }
} */

/* 
string
*/
/* if(typeof funcion(true) === 'string' && funcion(true)){
    alert('correcto')
} */

/* 
boolean
string
null
*/


const alumnos : string[] = ['pepe', 'maria', 'pedro']

const notas : number[] = [0, 7, 3]


/* interface  */

interface Persona {
    nombre: string, 
    edad: number,
    id: number
}

const persona : Persona = {
    nombre: 'pepe',
    edad: 20,
    id: 1
}

const persona_2 : Persona = {
    nombre: 'maria',
    edad: 22,
    id: 2
}

const personas : Persona[] = [persona, persona_2]


/* Buscar a la persona con el nombre pepe */


/* find */
const pepe : Persona = personas.filter(
    (persona : Persona) : boolean => 
        persona.nombre === 'pepe'
)[0];
const pepes : Persona[] = personas.filter(
    ( persona : Persona ) : boolean =>{
        return persona.nombre === 'pepe'
    } 
);
const buscarPos_2 :  number  = personas.findIndex((persona:Persona):boolean => persona.nombre === "pepe")

const buscar : Persona | undefined = personas.find((persona)=> persona.nombre === "pepe");
const buscarPos = personas.findIndex((persona) => persona.nombre === "pepe");
const maria = personas.find((persona)=> persona.id === 2);
console.log(pepe)
console.log(buscar)
console.log(personas[buscarPos])


/* 
A partir del sig array


*/

//un array de cursos de programacion con nombre, codigo, precio, duracion



const cursos = [
    {
        nombre: 'java',
        precio: 10,
        duracion: '2 minutos y 50 años',
        codigo: 'a-123'
    },
    {
        nombre: 'python',
        precio: 150,
        duracion: 'ya lo sabes',
        codigo: 'a-3'
    },
    {
        nombre: 'javascript',
        precio: 1000,
        duracion: '80 hrs (con suerte)',
        codigo: 'a-54'
    }
]


/*  
Crear una interface para los cursos
Dar tipado al array cursos
Dar tipado a toda parte del codigo que usen para resolver los enunciados

Buscar al curso con el codigo a-123
Obterner un array con todos los nombres de los cursos
Obtener un array con todos los cursos que tengan en su nombre la palabra java
Obterner un array con todos los nombres de los cursos que cuesten mas de 100
Obtener la posicion del curso con el nombre javascript
*/


