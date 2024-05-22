import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (product, cantidad) =>{
        const estaEnElCarrito = carrito.find(item => item.id === product.id)
        if(estaEnElCarrito){
            setCarrito(() => {
                return carrito.map((item) =>{
                    if(item.id === product.id){
                        item.cantidad = cantidad
                    }
                    return item
                } )
              
            })
        }
        else{
            setCarrito([...carrito, {...product, cantidad: cantidad}])
        }
        
    }
  return (
    <GlobalContext.Provider value={{carrito: carrito, agregarAlCarrito: agregarAlCarrito}} >
        {children}
    </GlobalContext.Provider>
  )
}
//Esta funcion es un custom hook que sirve para acceder a mi context
export const useGlobalContext = () =>{
    return useContext(GlobalContext)// Me retorna el objeto value
}

export default GlobalContextProvider