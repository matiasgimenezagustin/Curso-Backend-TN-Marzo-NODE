import React, { useState } from 'react'
import { useGlobalContext } from '../Context/GlobalContext'

const BuyButton = ({product}) => {
    /* STATE MANAGER */
    const { agregarAlCarrito } = useGlobalContext()
    const [counter, setCounter] = useState(0)
    const comprar = () =>{
        if(counter != product.stock){
            setCounter(counter + 1)
            agregarAlCarrito(product, counter)
        }
        
    }
    const quitar = () =>{
        if(counter != 0){
            setCounter(counter - 1)
        }

    }

  return (
    <>
        {
            counter === 0 
            ?
            <button onClick={comprar}>Comprar</button>
            :
            <div>
                <button onClick={quitar}>-</button>
                <span>{counter}</span>
                <button onClick={comprar}>+</button>
            </div>
        }
        
    </>
  )
}

export default BuyButton