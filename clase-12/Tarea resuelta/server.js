// server.js
const { obtenerTodosLosUsuarios, obtenerUsuarioPorId } = require('./user');
const { obtenerTodosLosPosteos, obtenerPosteoPorId, obtenerComentariosDePosteoPorId, obtenerListadoDeEmailsDeLosComentarios } = require('./post');

const obtenerDatos = async () => { 
    
  const todosLosUsuarios = await obtenerTodosLosUsuarios();
  console.log('Todos los usuarios:', todosLosUsuarios);

  const usuarioPorId = await obtenerUsuarioPorId(1);
  console.log('Usuario por ID:', usuarioPorId);

  const todosLosPosteos = await obtenerTodosLosPosteos();

  console.log('Todos los posts:', todosLosPosteos);

  const posteoPorId = await obtenerPosteoPorId(1);
  console.log('Posteo por ID:', posteoPorId);

  const comentariosDelPost = await obtenerComentariosDePosteoPorId(1);
  console.log('Comentarios del post:', comentariosDelPost);

  const listadoEmailsComentarios = await obtenerListadoDeEmailsDeLosComentarios(1);
  console.log('Listado de emails de comentarios:', listadoEmailsComentarios);
};

obtenerDatos();
