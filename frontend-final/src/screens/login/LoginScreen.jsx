import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'


const LoginScreen = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) =>{
        try{
            event.preventDefault()
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            console.log(usuario)
            await login(usuario)
            setErrorText('')
            navigate('/home')
        }
        catch(error){
           
            setErrorText(error.message)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Ingrese su email:</label>
                <input placeholder='joeDoe@gmail.com' id='email' name='email'/>
            </div>
            <div>
                <label htmlFor="password">Ingrese su contraseña:</label>
                <input type="text" placeholder='******' id='password' name='password' />
            </div>
            {
                errorText 
                &&
                <span style={{color: 'red'}}>{errorText}</span>
            }
            <span>Si aun no estas registrado, <Link to={'/register'}>registrate</Link></span>
            <button type='submit'>Iniciar sesion</button>
        </form>
    </div>
  )
}

export default LoginScreen