import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Estados from './screens/Estados'
import Home from './screens/Home'
import Efecto from './screens/Efecto'
import Carrito from './screens/Carrito'


const RouterList = () => {

    /* 
    <Route />
        props:
        -path = la ruta (string)
        -element = el elemento que se muestra en esa ruta (JSX.Component)
    */
  return (
    <Routes>
        <Route path='/estados' element={<Estados/>}/>
        <Route path='/efectos' element={<Efecto/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default RouterList