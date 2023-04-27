import './App.css';
import NavBar from './componentes/NavBar/NavBar';
//import ContenedorProductos from './componentes/ContenedorProductos/ContenedorProductos';(Se deja el import para agregar productos en la siguiente entrega.)
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting ="¡Bienvenidos a la tienda online!" />

    </>
  );
}

export default App;
