import React from 'react'
import './Productos.css'

const Productos = ({nombre,precio,img}) => {
    return (
        <div className='productos'> 
            <h2>Mi Producto</h2>
            <p>Nombre: {nombre}</p>
            <p>Precio: {precio}</p>
            <img src={img} alt="Producto" />
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Productos