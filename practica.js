class Item{
    static CATEGORIAS = {
        EQUIPAMIENTO: 'EQUIPAMIENTO',
        ARMAMENTO: 'ARMAMENTO',
        CONSUMIBLE: 'CONSUMIBLE',
        ADORNOS: 'ADORNOS'

    }
    constructor(nombre, categoria, nivel, costo, id)
    {
        this.nombre = nombre
        this.categoria = categoria
        this.nivel = nivel
        this.costo = costo
        this.id = id
    }
    
}

class EspacioMochila {
    constructor(tipo, espacio_maximo){
        this.tipo = tipo 
        this.espacio_maximo = espacio_maximo
        this.espacio = []
    }
    agregar (item){
        if(!(this.espacio.length === this.espacio_maximo)){
            this.espacio.push(item)
        }
        else{
            console.error('Error: No hay mas espacio')
        }
    }
    observar (){
        console.log(this.espacio)
    }
}



class Mochila extends Item {
    static TIPOS_BOLSILLO = {
        BOLSILLITO: 'BOLSILLITO',
        BOLSILLO_PRINCIPAL: 'BOLSILLO_PRINCIPAL',
        BOLSILLO_SECUNDARIO: 'BOLSILLO_SECUNDARIO'
    }
    constructor(nombre, nivel, costo, id) {
        super(nombre, Item.CATEGORIAS.EQUIPAMIENTO, nivel, costo, id)
        this.espacios = {
            [Mochila.TIPOS_BOLSILLO.BOLSILLITO]: new EspacioMochila(Mochila.TIPOS_BOLSILLO.BOLSILLITO, 1),
            [Mochila.TIPOS_BOLSILLO.BOLSILLO_PRINCIPAL]: new EspacioMochila(Mochila.TIPOS_BOLSILLO.BOLSILLO_PRINCIPAL, 3),
            [Mochila.TIPOS_BOLSILLO.BOLSILLO_SECUNDARIO]: new EspacioMochila(Mochila.TIPOS_BOLSILLO.BOLSILLO_SECUNDARIO, 2)
        }
    }

    guardar (item,TIPOS_BOLSILLO_SELECCIONADO) {
        this.espacios[TIPOS_BOLSILLO_SELECCIONADO].agregar(item)
    }
    observar( TIPOS_BOLSILLO_SELECCIONADO){
        this.espacios[TIPOS_BOLSILLO_SELECCIONADO].observar()
    }
}




class Personaje{
    constructor(nombre, edad, dinero){
        this.nombre = nombre
        this.edad = edad
        this.dinero = dinero
        this.inventario = []
        this.mochila = new Mochila('Mochila comun', 1, 100, 2)
    }
    recibir (item) {
        this.inventario.push(item)
    }

}


const personaje_principal = new Personaje('Kevin', 20, 0)

const mate = new Item('mate vacio', Item.CATEGORIAS.CONSUMIBLE,1, 10, 2)




personaje_principal.mochila.guardar(mate, Mochila.TIPOS_BOLSILLO.BOLSILLITO)


personaje_principal.mochila.observar(Mochila.TIPOS_BOLSILLO.BOLSILLITO)


