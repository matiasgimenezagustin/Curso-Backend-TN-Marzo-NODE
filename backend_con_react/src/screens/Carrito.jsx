import React from 'react'
import { useGlobalContext } from '../Context/GlobalContext'

const Carrito = () => {
    const value = useGlobalContext()
    console.log(value)
  return (
    <div>
        Carrito


    </div>
  )
}

export default Carrito