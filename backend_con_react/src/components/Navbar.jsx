import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/estados'}>Estados</Link>
            <Link to={'/efectos'}>Efectos</Link>
            <Link to={'/carrito'}>Carrito</Link>
        </nav>
    </header>
  )
}

export default Navbar