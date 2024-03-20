
class Item{
    constructor(nombre, categoria, nivel, costo, id)
    {
        this.nombre = nombre
        this.categoria = categoria
        this.nivel = nivel
        this.costo = costo
        this.id = id //Despues lo podemos automatizar
    }
    
}


class Personaje{
    constructor(nombre, edad, dinero, apellido){
        this.nombre = nombre
        this.edad = edad
        this.dinero = dinero
        this.inventario = []
        this.mochila = {
            primer_bolsillo: [

            ],
            segundo_bolsillo:[

            ]
        },
        this.apellido = apellido
    }
    recibir (item) {
        this.inventario.push(item)
    }
    eliminarItem = (id_buscado) => {
        /* index | -1 */
        const indice_a_eliminar = this.inventario.findIndex((item) => item.id === id_buscado) 
        if(indice_a_eliminar === -1){
            console.log(`Error ACCION INVALIDA: No existe el item con id ${id_buscado} dentro del inventario del personaje ${this.nombre}`)
        }
        else{
            //arr.splice(posicion_a_empezar, cuantos_elimino) => devuelve un array con los elementos eliminados

            const item_eliminado  = this.inventario.splice(indice_a_eliminar, 1)[0] //elimino el elemento
            console.log(item_eliminado)
            console.log(`Item ${item_eliminado.nombre} se elimino del inventario`)
        }
    }

   /*  eliminarItem2 (id_buscado) {
        const elemento_a_eliminar = this.inventario.find(item => item.id === id_buscado)
        if(!elemento_a_eliminar){
            console.log(`Error ACCION INVALIDA: No existe el item con id ${id_buscado} dentro del inventario del personaje ${this.nombre}`)
        }
        else{
            this.inventario = this.inventario.filter(item => item.id === id_buscado)
            console.log(`Item ${elemento_a_eliminar.nombre} se elimino del inventario`)
        }
    } */
}

const vaso = new Item('vaso metalico', 'Equipamiento', 1, 1000, 1)

const personaje = new Personaje('pepe', 50, 400, 'suarez')

personaje.recibir(vaso)

personaje.eliminarItem(1)
console.log(personaje)
/* 
Hacer un celular de baja gama
hacer un celular de alta gama
todos los celulares deben estar descargados (no van a tener bateria)
*/
/* 
nombre
precio
memoria_ram
memoria_rom
pantalla
bateria
marca
*/
class Celular {
    constructor(nombre, ){
        this.nombre = nombre
        this.bateria = 0
    }
}

const celularCaro = new Celular('Iphone')


/* Esta forma es incorrecta */
const celularBarato ={
    nombre: 'CeluPhone',
    memoria_ram: 4
}


/* JSDocs */
/**
 *  Nos calcula cuanta plata nos quedaria luego de comprar un celular
 *  @param {Item} celular - Es el producto que vamos a comprar
 *  @return {number | undefined} Es el dinero restante luego de hacer la compra, si es indefinido, significa que no teniamos la plata suficiente
 * */ 

/**
 * Una función que calcula el dinero restante después de comprar un celular.
 *
 * @param {object} celular - un objeto que representa el celular con una propiedad 'precio'
 * @return {number} la cantidad restante de dinero después de comprar el celular
 */
const comprar = (celular) =>{
    const precioAGastar = celular.precio
    let dinero = 200
    dinero = dinero - precioAGastar //NaN

    return dinero
}

comprar(celularBarato)

/* Celular, compu, tablet */
class Usuario{
    static TIPOS_USUARIO  = {
        CELULAR:"CELULAR",
        COMPUTADORA: "COMPUTADORA",
        TABLET: "TABLET"
    }
    constructor(nombre, tipo_usuario){
        this.nombre = nombre
        this.tipo_usuario = tipo_usuario
    }
}


const usuarioNuevo = new Usuario('Juan@gmail.com', Usuario.TIPOS_USUARIO.COMPUTADORA)