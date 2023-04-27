import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    const imgCarrito = "https://img.freepik.com/vector-premium/icono-carrito-compras-estilo-color-plano_755164-732.jpg?w=740"
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
            <strong> 3 </strong>
        </div>
    )
}

export default CardWidget