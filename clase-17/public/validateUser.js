
const validateToken = async () =>{
    const auth_token = localStorage.getItem('auth_token')

    if(auth_token){
        const response = await fetch('./validar-token', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    auth_token
                })
            }
        )
        console.log(response)
        const data = await response.json()
        console.log({data})
    }else{
        location.href = '/login'
    }
}
