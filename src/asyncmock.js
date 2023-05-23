const productos = [
    { nombre: "Paleta Wilson", precio: 50000, id: "1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5pwg7bZgGc5JatmlTC-T5BavfhYrT1CFTw&usqp=CAU", idCat: "paletas" },
    { nombre: "Paleta Adidas", precio: 70000, id: "2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5hjCTcS3OWAP845WuccNJ2VViAm1YbBchw&usqp=CAU", idCat: "paletas" },
    { nombre: "Paleta Vairo", precio: 45000, id: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5EOLYzHzqrrqj563vVsn88mSEyJG7hqSaw&usqp=CAU", idCat: "paletas" },
    { nombre: "Paleta Bullpadel", precio: 47000, id: "4", img: "https://prestigio.vteximg.com.br/arquivos/ids/172239-1000-1000/220405_.jpg?v=637927118163870000", idCat: "paletas" },
    { nombre: "Pelota Head Pro", precio: 700, id: "5", img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/7/1/710040075613001-1_1.jpg", idCat: "complementos" },
    { nombre: "Pelota Prince", precio: 700, id: "6", img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/t/u/tubo-de-pelotas-de-padel-x3-prince-70504007p022280-1.jpg", idCat: "complementos" },
    { nombre: "Pelota Gold", precio: 700, id: "7", img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/t/u/tubo-de-pelotas-x3-de-padel-gold-121040000370001-1.jpg", idCat: "complementos" },
    { nombre: "Pelota Bullpadel", precio: 700, id: "8", img: "https://prestigio.vteximg.com.br/arquivos/ids/170162-1000-1000/220480_.jpg?v=637838090732470000", idCat: "complementos" },
    { nombre: "Zapatilla Fila", precio: 40000, id: "9", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGdgyne_zDtAknrjE9H8S96VGx0g2Unzc5g&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGfd-JLQ06FxVcKRYkEJe0-o_pqEBxelMYQ&usqp=CAU", idCat: "zapatillas" },
    { nombre: "Zapatilla Puma", precio: 60000, id: "10", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIIEVQD7eDp1Yk4voAfK0K5HHJH-X50-J_w&usqp=CAU", idCat: "zapatillas" },
    { nombre: "Zapatilla Adidas", precio: 70000, id: "11", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveE8EUN4m1hrD729lrliCeLCsXFb6tDxRvQ&usqp=CAU", idCat: "zapatillas" },
    { nombre: "Zapatilla Bullpadel", precio: 50000, id: "12", img: "https://contents.mediadecathlon.com/p2141787/k$e43f2738516c08cf90a1b45189001754/sq/8752743.jpg?format=auto&f=800x0", idCat: "zapatillas" },
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}