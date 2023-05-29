import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import ItemCount from '../ItemCount/ItemCount'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.error(error))
  }, [idCategoria])

  return (
    <>
      <h2> {greeting} </h2>
      <ItemList productos={productos} />
      <ItemCount />
    </>
  )
}

export default ItemListContainer