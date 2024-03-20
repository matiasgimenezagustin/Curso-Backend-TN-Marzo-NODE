/* Programacion funcional */

/* 
const get_token = () => {
    return 'token'
}

const callApi = ( token ) => {
    return 'data'
}

renderResult( callApi( get_token() )) */



/* Programacion orientada a objetos */
/* 
class Api {
    constructor(URL){
        this.URL = URL
    }
    get_token() {
        fetch(this.URL)
        return 'token'  
    }
    callApi = ( route) => {
        fetch(this.URL + '/' + route, {
            headers:{
                "Authorization": this.get_token()
            }
        })
        return 'data'
    }
}


class CardModel {
    constructor(id_element){
        this.element = document.getElementById(id_element)
    }

    renderResult  (toRender) {
        this.element.innerHTML = toRender
    }
    clean (){
        this.element.innerHTML = ''
    }
}


const pokeApi = new Api('http://pokeapi/v2/')
const cardPokemon = new CardModel('contenedor')
const cardStatus = new CardModel('status-container')



cardPokemon.renderResult(pokeApi.callApi('/pokemons/ditto'))

cardStatus.renderResult('<h1>Todo bien</h1>')


cardPokemon.clean()

cardStatus.clean() */

/* Sintaxis literal */
const personaje_principal = {
    nombre: 'pepe',
    edad: 30,
    dinero: 100
}

const enemigo_principal = {
    nombre: 'Jack',
    edad: 10,
    dinero: 10000
}



/* Sintaxis */

/* Funcion para construir un objeto */
/* const crearPesonaje = (nombre, edad, dinero) => {
    return {
        nombre: nombre, 
        edad: edad,
        dinero: dinero
    }
} */

class Personaje{
    constructor(nombre, edad, dinero){
        this.nombre = nombre
        this.edad = edad
        this.dinero = dinero
        this.inventario = []
        this.mochila = {
            primer_bolsillo: [

            ],
            segundo_bolsillo:[

            ]
        }
    }
    recibir (item) {
        this.inventario.push(item)
    }
    eliminarItem = () => {//NO usar es MUY mala practica
        /* 

        Metodo de Personaje
        Hacer la logica para eliminar un item por su id

        Recibira un id, buscara por id al elemento dentro del inventario y lo eliminara
        Si no lo encuentra dira console.log("Error ACCION INVALIDA: No existe el item con id {id} dentro del inventario del personaje {nombre}")

        Recomendacion:
        findIndex => para buscar el indice
        Usar Splice => para eliminarlo
        */
    }
}

/* REVISAR PRIMERO A LUCAS M */
/* 

Tarea Programacion Orientada a objetos


Van a crear una clase nueva llamada Mochila:

Atributos:
primer_bolsillo
segundo_bolsillo
bolsillito_de_izquierda

Metodos:
guardarItem(item, tipo_bolsillo)
Vamos a guardar un item en algunos de nuestros bolsillos (esta definido por el tipo_bolsillo)
Debemos verificar primero que ese bolsillo no este lleno, por ejemplo
primer_bolsillo permite hasta 3 items
segundo_bolsillo permite hasta 2
bolsillito de la izq permite solo 1
Si se excede el limite debera decir por consola 'ERROR: el espacio de la mochila {tipo_bolsillo} esta lleno'

Ejemplo de prueba:

personaje.mochila.guardarItem(mate, 'bolsillo 1')

Eliminar Item (id_item, tipo_bolsillo)
Deberemos verificar si el id_item esta en dicho tipo_bolsillo
En caso de estar deberemos eliminarlo y retornarlo
En caso de no estar diremos por consola 'ERROR: El item con id {id_item} no esta en {tipo bolsillo}'

Ejemplo de prueba:

personaje.mochila.eliminarItem(1, 'bolsillito')

Una vez creada la mochila debera crearse una nueva mochila por cada nuevo personaje

por ejemplo

class Personaje {
    constructor(){
        this.mochila = new Mochila()
    }
}
*/

const personaje_principal_POO = new Personaje('pepe', 30, 400)
const enemigo_principal_POO = new Personaje('jack', 10, 4000)
const amigo_principal = new Personaje('charlie', 35, 1)


console.log(personaje_principal_POO)

class Item{
    constructor(nombre, categoria, nivel, costo, id)
    {
        this.nombre = nombre
        this.categoria = categoria
        this.nivel = nivel
        this.costo = costo
        this.id = id
    }
    
}


const mate_medio_vacio_y_lavado = new Item('Mate lavado', 'consumible', 'Experto informatico', 0, 1)

personaje_principal_POO.recibir(mate_medio_vacio_y_lavado)
amigo_principal.recibir(mate_medio_vacio_y_lavado)
amigo_principal.eliminarItem()
/* accion
Dar un item a x personaje
*/



console.log(amigo_principal)


/* 
Entidad Item

nombre
categoria
nivel
costo


crear 2 items de su preferencia (utilizando la class Item)
*/

/* 
Crear el metodo
gastar(dinero_gastado)
si el dinero gastado es mayor al que tenemos debera decir por consola 'ACCION invalida: Insuficiente dinero'

Si se puede gastar
Restar el dinero_gastado al dinero del personaje
dira 'El personaje {nombre de personaje} ha gastado {dinero gastado} y se queda con {dinero}'
*/


class Mochila extends Item {
    static TIPOS_BOLSILLO = {
        BOLSILLITO: 'BOLSILLITO',
        BOLSILLO_PRINCIPAL: 'BOLSILLO_PRINCIPAL',
        BOLSILLO_SECUNDARIO: 'BOLSILLO_SECUNDARIO'
    }
    constructor(nombre, categoria, nivel, costo, id) {
        super(nombre, categoria, nivel, costo, id)
        this.espacios = {
            [Mochila.TIPOS_BOLSILLO.BOLSILLITO]: [],
            [Mochila.TIPOS_BOLSILLO.BOLSILLO_PRINCIPAL]: [],
            [Mochila.TIPOS_BOLSILLO.BOLSILLO_SECUNDARIO]: []
        }
    }

    guardar (item,TIPOS_BOLSILLO_SELECCIONADO) {
        this.espacios[TIPOS_BOLSILLO_SELECCIONADO].push(item)
    }
}


