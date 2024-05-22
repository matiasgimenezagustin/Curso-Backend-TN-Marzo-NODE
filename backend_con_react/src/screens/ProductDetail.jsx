import React from 'react'
import BuyButton from '../components/BuyButton'

const ProductDetail = ({product}) => {
   
    
    return (
        <div>
            <h1>{product.nombre}</h1>
            <span>Precio: ${product.precio}</span>
            <BuyButton product={product} />
        </div>
    )
}

export default ProductDetail