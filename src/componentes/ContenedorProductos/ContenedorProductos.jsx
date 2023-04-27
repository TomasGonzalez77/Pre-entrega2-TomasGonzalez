import React from 'react'
import Productos from '../Productos/Productos';

const ContenedorProductos = () => {
    const paleta = {
        nombre: "Bullpadel",
        precio: 40000,
        img: "https://prestigio.vteximg.com.br/arquivos/ids/172239-1000-1000/220405_.jpg?v=637927118163870000"
    };

    const pelota = {
        nombre: "Bullpadel",
        precio: 700,
        img: "https://prestigio.vteximg.com.br/arquivos/ids/170162-1000-1000/220480_.jpg?v=637838090732470000"

    };

    const zapatilla = {
        nombre: "Bullpadel",
        precio: 20000,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_847011-MLA51936791386_102022-F.webp"
    };

    return (
        <div>
            <Productos {...pelota} />
            <Productos {...zapatilla} />
            <Productos {...paleta} />
        </div>
    );
}

export default ContenedorProductos