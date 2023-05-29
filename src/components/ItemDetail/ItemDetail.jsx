//Descripción general por producto - individual

import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
  return (
    <div className='contenedorItem'>
      <div className='descripContenedor'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: s/ {precio} </h3>
        <h3>ID: {id} </h3>
        <p>{descripcion}</p>
      </div>
      <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail