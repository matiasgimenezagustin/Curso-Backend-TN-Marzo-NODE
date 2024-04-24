/* 
Asincronia, para que sirve? cuando usarla?

*/
/* Se que esta direccion es una API */
const URL_API = 'https://jsonplaceholder.typicode.com'

const obtenerPostPorId = async () => {
    const response = await fetch(URL_API + '/posts/3', {
        method: 'GET'
    })
    if(response.status == 200){
        console.log('todo esta bien')
        const data = await response.json()
        console.log(data)
    }

}
obtenerPostPorId()


/* console.log | fetch */