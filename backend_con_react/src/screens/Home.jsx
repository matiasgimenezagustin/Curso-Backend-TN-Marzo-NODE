import React from 'react'
import Navbar from '../components/Navbar'
import ProductDetail from './ProductDetail'

const Home = () => {
  const honda = {nombre: 'Honda civic', precio: 7000, stock: 5, id: 1}

  const carrito = []
  const agregarAlCarrito = (product) =>{
    carrito.push(product)
  }
  return (
    <div>
        <Navbar/>
        <h1>Este es el home</h1>
        <ProductDetail product={honda}/>
        <ProductDetail product={honda}/>
        <ProductDetail product={honda}/>
    </div>
  )
}

export default Home