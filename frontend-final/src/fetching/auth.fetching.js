import { HTTP, URL } from "./http"


const ROUTE = '/api/auth'

export const login = async (usuario) => {
    try{
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/login' , usuario)
        console.log(result)
    }
    catch(error){
        console.error('Error en logueo', error)
    }
}