


export const HTTP = {
    GET: (url) =>{
        
    },
    POST: async (url, body) =>{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return response.json()
    },
    PUT:  () =>{

    },
    DELETE:() =>{

    }
}

export const URL = {
    URL_API: 'http://localhost:4040',
}