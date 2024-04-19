// post.js
const obtenerTodosLosPosteos = async () => {
    // Utilizar fetch para obtener los posts reales desde la API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
};

const obtenerPosteoPorId = async (id_post) => {
    // Utilizar fetch para obtener un post por su ID desde la API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id_post}`);
    const post = await response.json();
    return post;
};

const obtenerComentariosDePosteoPorId = async (id_post) => {
    // Utilizar fetch para obtener comentarios de un post por su ID desde la API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id_post}/comments`);
    const comentarios = await response.json();
    return comentarios;
};

const obtenerListadoDeEmailsDeLosComentarios = async (id_post) => {
    const comentarios = await obtenerComentariosDePosteoPorId(id_post)
    const lista_de_emails = comentarios.map(comentario => comentario.email )

}




/* obtenerListadoDeEmailsDeLosComentarios(1) */

module.exports = { obtenerTodosLosPosteos, obtenerPosteoPorId, obtenerComentariosDePosteoPorId, obtenerListadoDeEmailsDeLosComentarios };
