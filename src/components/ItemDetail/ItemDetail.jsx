//Descripción general por producto - individual

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }
  return (
    <div className='contenedorItem'>
      <div className='descripContenedor'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <h3>ID: {id} </h3>
        <p>{descripcion}</p>
        {/* <ItemCount/> */}
      </div>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? (<Link to='/cart'>Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
    </div>
  )
}


export default ItemDetail