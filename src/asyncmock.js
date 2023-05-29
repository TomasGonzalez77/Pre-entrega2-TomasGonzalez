const productos = [
    //Paletas
    { nombre: "Paleta Wilson", descripcion: "El Blade Team v2 proporciona comodidad, durabilidad y fiabilidad para los jugadores de pádel principiantes e intermedios que trabajan en su juego. Una construcción estable de fibra de vidrio Weave se combina con un núcleo de espuma EVA de baja densidad para un contacto cómodo con la bola. La tecnología Sharp Hole asegura un patrón de orificio consistente con un buen agarre, mientras que su forma de lágrima, ofrece un atractivo punto dulce en el centro de la raqueta.", precio: 50000, id: "1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5pwg7bZgGc5JatmlTC-T5BavfhYrT1CFTw&usqp=CAU", idCat: "paletas" },
    { nombre: "Paleta Adidas", descripcion: "Más innovación, más tecnología, más soluciones inesperadas para llevar tu juego a una nueva dimensión. La pala incorpora la tecnología OCTOGONAL STRUCTURE, un diseño exclusivo que aporta gran rigidez a toda la estructura para que puedas imprimir toda tu potencia a cada golpe. Además, la pala está diseñada en formato diamante, que te ayudará aún más a sacar la mayor velocidad y potencia en tu juego. Con el sistema WEIGHT AND BALANCE SYSTEM podrás configurar la pala a tu gusto según las exigencias de tu próximo partido. Disfruta de una sensación de golpeo única con la unión de la fibra CARBON ALUMINIZED junto con la tecnología SPIN BLADE OCTOGONAL. Más potencia y efectos en todos tus golpes. Su composición en goma EVA SOFT PERFORMANCE te permitirá disfrutar del máximo confort en cada golpe.", precio: 70000, id: "2", img: "https://d28hi93gr697ol.cloudfront.net/5a1a70e1-6321-6944-ed93-67a485503504/img/Producto/0eea3652-8974-7235-3632-a18e086f3b87/ADIDAS-Metalbone-Youth-62f4530215cfd.jpg", idCat: "paletas" },
    { nombre: "Paleta Vairo", descripcion: "La Blade 5.3 es una pala diseñada para el jugador de nivel inicial que busca un balance ideal entre potencia y control. Su forma de gota invertida la convierte en una pala polivalente, equilibrando la potencia y el control en cada golpe. El Foam en su núcleo permite un juego más confortable y el Epoxy Fiber Glass le otorga a la pala mayor ligereza y resistencia.Las palas de la línea Practice Series son ideales para quien se inicia en el padel y quiere avanzar en su nivel de juego.", precio: 45000, id: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5EOLYzHzqrrqj563vVsn88mSEyJG7hqSaw&usqp=CAU", idCat: "paletas" },
    { nombre: "Paleta Bullpadel", descripcion: "Edición limitada exclusiva para Argentina. La paleta Onyx Control es muy ligera, cómoda y manejable, especialmente diseñada para jugadores de nivel medio y avanzado. Forma Redonda, Control Nucleo Evalastic, Exterior Poliglass, 38mm Balance Bajo.", precio: 47000, id: "4", img: "https://prestigio.vteximg.com.br/arquivos/ids/172242-1000-1000/220406_.jpg?v=637927134452170000", idCat: "paletas" },
    //Pelotas
    { nombre: "Pelota Head Pro", descripcion: "Tubo de pelotas Headpro. Especificas para padel, contiene tres pelotas HeadPro en un tubo sellado a presion.", precio: 700, id: "5", img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/7/1/710040075613001-1_1.jpg", idCat: "complementos" },
    { nombre: "Pelota Prince", descripcion: "Tubo de pelotas Headpro. Especificas para padel, contiene tres pelotas HeadPro en un tubo sellado a presion.", precio: 700, id: "6", img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/t/u/tubo-de-pelotas-de-padel-x3-prince-70504007p022280-1.jpg", idCat: "complementos" },
    { nombre: "Pelota Gold", descripcion: "Tubo de pelotas Headpro. Especificas para padel, contiene tres pelotas HeadPro en un tubo sellado a presion.", precio: 700, id: "7", img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/t/u/tubo-de-pelotas-x3-de-padel-gold-121040000370001-1.jpg", idCat: "complementos" },
    { nombre: "Pelota Bullpadel", descripcion: "Tubo de pelotas Headpro. Especificas para padel, contiene tres pelotas HeadPro en un tubo sellado a presion.", precio: 700, id: "8", img: "https://prestigio.vteximg.com.br/arquivos/ids/170162-1000-1000/220480_.jpg?v=637838090732470000", idCat: "complementos" },
    //CubreGrips
    { nombre: "CubreGrip Odea", descripcion: "Cubregrip perforado de la marca Odea. El empaque contiene un cubregrip perforado con su respectiva cinta adherente. Recuerde retirar la cinta protectora antes de colocarlo en el mango de la paleta. El cubregrip es un complemento ultilizado sobre el mango de la paleta para brindar mayor agarre y comodidad en la mano a la hora de jugar, evitando que la paleta resvale y dando sensacion de seguridad.", precio: 700, id: "9", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhcbUUIm5UkEaGg6MF0F7ci138dKCOFqvPQ&usqp=CAU", idCat: "complementos" },
    { nombre: "CubreGrip Vairo", descripcion: "Cubregrip liso de la marca Vairo. El empaque contiene tres cubregrip lisos con sus respectivas cintas adherentes. Recuerde retirar la cinta protectora antes de colocarlo en el mango de la paleta. El cubregrip es un complemento ultilizado sobre el mango de la paleta para brindar mayor agarre y comodidad en la mano a la hora de jugar, evitando que la paleta resvale y dando sensacion de seguridad", precio: 700, id: "10", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82-RTcenLJFzDFONyTsvrZ4npNVGt6QKEmA&usqp=CAU", idCat: "complementos" },
    { nombre: "CubreGrip Adidas", descripcion: "Cubregrip con relieve de la marca Adidas. El empaque contiene tres cubregrip que poseen un relieve perfecto para brindar comodidad y confort, con sus respectivas cintas adherentes. Recuerde retirar la cinta protectora antes de colocarlo en el mango de la paleta. El cubregrip es un complemento ultilizado sobre el mango de la paleta para brindar mayor agarre y comodidad en la mano a la hora de jugar, evitando que la paleta resvale y dando sensacion de seguridad", precio: 700, id: "11", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp-xKCxx16Q2JEemV-xwhCDgnB3YG5S93IYF0c8FUKpKaXtV8cWU2M8SKhN9s5tybeBQ&usqp=CAU", idCat: "complementos" },
    { nombre: "CubreGrip Toalson Ultra", descripcion: "Cubregrip liso de la marca Toalson. El empaque contiene tres cubregrip lisos modelo 'Ultra' con sus respectivas cintas adherentes. Recuerde retirar la cinta protectora antes de colocarlo en el mango de la paleta. El cubregrip es un complemento ultilizado sobre el mango de la paleta para brindar mayor agarre y comodidad en la mano a la hora de jugar, evitando que la paleta resvale y dando sensacion de seguridad", precio: 700, id: "12", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbp42MkosSh3zvVsol1Oe_dLC-xdWTgiLMiDlPzRdbLjt4M8HXpBC54fJ0fl6KTtKWEk&usqp=CAU", idCat: "complementos" },
    //Ropa
    { nombre: "Remera Supra Competicion", descripcion: "Aca va a ir la descripcion de la remera Supra masculina", precio: 40000, id: "13", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnprDnRSFmcB4GMDuGpZvqq_yAlBRkIYoNqA&usqp=CAU", idCat: "ropa" },
    { nombre: "Remera Supra Competicion", descripcion: "Aca va a ir la descripcion de la remera Supra femenina", precio: 60000, id: "14", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzPQEraNWL0phRf6_DLqB4n5D01oSRpQ2Dg&usqp=CAU", idCat: "ropa" },
    { nombre: "Camiseta BlackCrown", descripcion: "Aca va a ir la descripcion de la remera BlackCrown femenina", precio: 70000, id: "15", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTi3Mf3Zis61SueEdu2WaYKih6T5WCp-zYrq0uek0q-_r3RnPhEJg-hbJE4mfLYVqusc&usqp=CAU", idCat: "ropa" },
    { nombre: "Pollera Padel", descripcion: "Aca va a ir la descripcion de la pollera de padel", precio: 50000, id: "16", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp19Q67hCFE8Y8tRa7zyAzTtAp9WPvVLwWHA&usqp=CAU", idCat: "ropa" },
    { nombre: "Short Padel", descripcion: "Aca va a ir la descripcion del short de padel", precio: 50000, id: "17", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo05cbVBCbRcm_TkPF2j08YX8jkDgH6sAqzyMQhKW2QGrKtUSm5GF1agWsDwi4wsaSs0&usqp=CAU", idCat: "ropa" },
    //Zapatillas
    { nombre: "Zapatilla Fila", descripcion: "Aca va a ir la descripcion de la zapatilla Fila", precio: 40000, id: "18", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGdgyne_zDtAknrjE9H8S96VGx0g2Unzc5g&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGfd-JLQ06FxVcKRYkEJe0-o_pqEBxelMYQ&usqp=CAU", idCat: "zapatillas" },
    { nombre: "Zapatilla Puma", descripcion: "Aca va a ir la descripcion de la zapatilla Puma", precio: 60000, id: "19", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIIEVQD7eDp1Yk4voAfK0K5HHJH-X50-J_w&usqp=CAU", idCat: "zapatillas" },
    { nombre: "Zapatilla Adidas", descripcion: "Aca va a ir la descripcion de la zapatilla Adidas", precio: 70000, id: "20", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveE8EUN4m1hrD729lrliCeLCsXFb6tDxRvQ&usqp=CAU", idCat: "zapatillas" },
    { nombre: "Zapatilla Bullpadel", descripcion: "Aca va a ir la descripcion de la zapatilla Bullpadel", precio: 50000, id: "21", img: "https://contents.mediadecathlon.com/p2141787/k$e43f2738516c08cf90a1b45189001754/sq/8752743.jpg?format=auto&f=800x0", idCat: "zapatillas" },
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