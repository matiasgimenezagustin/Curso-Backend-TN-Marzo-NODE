"use strict";
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
const alumnos = ['pepe', 'maria', 'pedro'];
const notas = [0, 7, 3];
const persona = {
    nombre: 'pepe',
    edad: 20,
    id: 1
};
const persona_2 = {
    nombre: 'maria',
    edad: 22,
    id: 2
};
const personas = [persona, persona_2];
/* Buscar a la persona con el nombre pepe */
/* find */
const pepe = personas.filter((persona) => persona.nombre === 'pepe')[0];
const pepes = personas.filter((persona) => {
    return persona.nombre === 'pepe';
});
const buscarPos_2 = personas.findIndex((persona) => persona.nombre === "pepe");
const buscar = personas.find((persona) => persona.nombre === "pepe");
const buscarPos = personas.findIndex((persona) => persona.nombre === "pepe");
const maria = personas.find((persona) => persona.id === 2);
console.log(pepe);
console.log(buscar);
console.log(personas[buscarPos]);
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
];
