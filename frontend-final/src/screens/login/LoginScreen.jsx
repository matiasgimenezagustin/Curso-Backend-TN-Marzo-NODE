import React from 'react'
import { login } from '../../fetching/auth.fetching'


const LoginScreen = () => {
    const handleSubmit = (event) =>{
        event.preventDefault()
        const usuario = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        console.log(usuario)
        login(usuario)
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
            <button type='submit'>Iniciar sesion</button>
        </form>
    </div>
  )
}

export default LoginScreen