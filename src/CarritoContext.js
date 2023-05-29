import { useState, createContext } from "react";
//Voy a importar el Hook useState y createContext que me permite crear un contexto que va almacenar toda la logica de mi

export const CarritoContext = createContext({ carrito: [] });

//Creamos el componente "CarritoProvider"

export const CarritoProvider = (children) => {
    //3) Creamos un estado local llamado "carrito" con el hook useState
    const [carrito, setCarrito] = useState([]);

    //Verificamos por consola
    console.log(carrito);

    //Agregamos algunos metodos al proveedor para manipular el carrito de compras:

    //Agregar productos al carrito:
    const agregarProducto = (item, cantidad) => {

        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
        } else {
            //Si el producto ya existe, actualizamos su cantidad:
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else { return prod; }
            });
            setCarrito(carritoActualizado);
        }
    }
}