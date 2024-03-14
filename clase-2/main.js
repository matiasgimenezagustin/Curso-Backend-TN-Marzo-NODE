var nombre = 'pepe';
/* nombre = 0
 */
console.log(nombre);
var nota = '10';
nota = '10 (diez)';
var edad = null;
edad = 10;
/* true, false, null, undefined */
var seEnvio = undefined;
seEnvio = 'SI';
seEnvio = false;
var saludar = function (nombre) {
    return 'hola ' + nombre;
};
saludar('pepe');
var solicitarAyuda = function (type) {
};
solicitarAyuda('INMEDIATA');
var persona = {
    nombre: 'pepe',
    edad: 40,
    puesto: 'Senior en HTML +2 meses',
    apellido: ''
};
persona.apellido = 'suarez';
console.log(persona);
