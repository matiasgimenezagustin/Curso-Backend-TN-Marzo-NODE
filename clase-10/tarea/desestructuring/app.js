const {obtenerDatosUsuario} = require('./usuariosManager');
const {
['NOMBRESIT 0']: nombre,
['DNI_usuariO']: dni,
['EDAd_usuario_1']: edad,
['IDD usuario(1)']:id_usuario } = obtenerDatosUsuario();
console.log(nombre, dni, edad, id_usuario)