import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Efecto = () => {

    /* El efecto nos permite controlar la cantidad de veces que se ejecuta una funcion */
    const [response, setResponse] = useState({personajes:[], loader: true})

    const obtenerPersonajes = async () =>{
        const response = await fetch('https://swapi.dev/api/people', {
            method: 'GET'
        })
        const data = await response.json()

        setResponse( {loader: false, personajes: data.results})
    }

    //Esto hace que obtenerPersonajes() se ejecute 1 vez
    useEffect(()=>{
        obtenerPersonajes()
    }, [])
    
    
  return (
    <div>
        <Navbar/>
        <h1>Efectos</h1>
        {
            response.loader 
            ?
            <h2>Cargando...</h2>
            :
            <div>
                {
                    response.personajes.map((personaje, index) =>(
                        <div key={personaje.name + index}>
                            <h2>{personaje.name}</h2>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default Efecto