import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Estados = () => {
  //Sintaxis de un estado
  //const [stateName, setStateName] = useState(initialValue)
  const [counter, setCounter] = useState(1)
  const incrementar =() =>{
    setCounter(counter + 1)
  }
  const decrementar = ()=>{
    setCounter(counter - 1)
  }
  
  
  console.log('Se cargo mi componente')
  return (
    <div>
      <Navbar/>
      <h1>Esta es la pagina de estados</h1>
      <div>
        <button onClick={decrementar}>-</button>
        <span>{counter}</span>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  )
}

export default Estados