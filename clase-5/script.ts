
class Trabajo {
    nombre: string
    constructor(nombre: string){
        this.nombre = nombre
    }
}
class Empleado {
    nombre: string
    sueldo: number
    id: number
    fecha_de_contratacion: string
    puesto: string 
    categoria: string
    trabajos_asignados: Trabajo[]
    constructor(nombre: string, sueldo: number, id_empleado: number, puesto: string, categoria: string){
        this.nombre = nombre
        this.sueldo = sueldo
        this.id = id_empleado
        this.fecha_de_contratacion = new Date().toDateString()
        this.puesto = puesto
        this.categoria = categoria
        this.trabajos_asignados = []
    }
    asignarTrabajo(trabajo: Trabajo) :void{
        this.trabajos_asignados.push(trabajo)
    }
}



class Developer extends Empleado{
    constructor(nombre: string, sueldo: number, id_empleado: number, puesto: string){
        super(nombre, sueldo, id_empleado, puesto, 'Desarrollador') //ACA NO HAY QUE PONER TIPADO
    }
}

class Marketing extends Empleado{
    constructor(nombre: string, sueldo: number, id_empleado: number, puesto: string){
        super(nombre, sueldo, id_empleado, puesto, 'Marketing') //ACA NO HAY QUE PONER TIPADO
    }
}

class Designer {
    nombre: string
    constructor(nombre: string){
        this.nombre = nombre
    }
}

const juan = new Designer('juan')

const nico = new Developer('Nicolas', 700000, 2, 'Junior Fullstack developer')

const mati = new Marketing('Matias', 400000, 1, 'Trainee Google ads')

mati.asignarTrabajo(new Trabajo('Hacer campaña de facebook para buscar un nuevo diseñador/a'))

nico.asignarTrabajo(new Trabajo('Hacer el modulo de ejecucion de sueldos'))


/* 
Tarea: 

Resolver la consigna de la clase pasada pero USANDO Typescript
*/
interface TIPOS_USUARIO {
    CELULAR: string, 
    COMPUTADORA: string, 
    TABLET: string}

class Usuario{
    static TIPOS_USUARIO : TIPOS_USUARIO = {
        CELULAR:"CELULAR",
        COMPUTADORA: "COMPUTADORA",
        TABLET: "TABLET"
    }
    tipo_usuario: TIPOS_USUARIO
    nombre: string
    constructor(nombre :string , tipo_usuario: TIPOS_USUARIO ){
        this.nombre = nombre
        this.tipo_usuario = tipo_usuario
    }
}