let catalogo =[

    {

        id: 1,

        nombre: "Capuchino",

        precio: 55,

        categoria: "Bebida caliente",

    },

    {

        id: 2,

        nombre: "Latte",

        precio: 60,

        categoria: "Bebida caliente",

    },

    {

        id: 3,

        nombre: "Americano",

        precio: 40,

        categoria: "Bebida caliente",

    },

    {

        id: 4,

        nombre: "Frappé Moka",

        precio: 75,

        categoria: "Bebida fría",

    },

    {

        id: 5,

        nombre: "Cheesecake",

        precio: 65,

        categoria: "Postre",

    },

    {

        id: 6,

        nombre: "Frappuchino de Caramelo",

        precio: 70,

        categoria: "Bebida fría",

    },

    {

        id: 7,

        nombre: "Té Verde",

        precio: 45,

        categoria: "Bebida caliente",

    },

    {

        id: 8,

        nombre: "Galleta de chocolate",

        precio: 50,

        categoria: "Postre",

    },

    {

        id: 9,

        nombre: "Refresher de Frutas",

        precio: 55,

        categoria: "Bebida fría",

    },

    {

        id: 10,

        nombre: "Croissant",

        precio: 30,

        categoria: "Postre",

    },

];



function Menu() {

    console.log(`

========================================

        CAFETERÍA UPQ

========================================

            MENÚ CLIENTE

========================================

`);

    for(let i = 0; i < catalogo.length; i++) {

        console.log(`

ID: ${catalogo[i].id}

Producto: ${catalogo[i].nombre}

Precio: $${catalogo[i].precio}

Categoría: ${catalogo[i].categoria}

----------------------------------------

`);

    }

}

let pedidos = [];

let TotalAcumulado = 0;

function AgregarPedido(idProducto){

    let productoEncontrado = catalogo.find(
        producto => producto.id === idProducto
    );
    if(productoEncontrado){
        pedidos.push(productoEncontrado);
        TotalAcumulado += productoEncontrado.precio;

        console.log(`

            Pedido agregado correctamente

            Producto: ${productoEncontrado.nombre}

            Precio: $${productoEncontrado.precio}

            Total actual: $${TotalAcumulado}

`);
    }
    else {

        console.log("Producto no encontrado");

    }
}

 function mostrarTicket() {

    console.log(`

========================================

            TICKET FINAL

========================================

`);

    for(let i = 0; i < pedidos.length; i++) {

        console.log(`

${i + 1}. ${pedidos[i].nombre}

$${pedidos[i].precio}

`);

    }

    console.log(`

========================================

TOTAL A PAGAR: $${TotalAcumulado}

========================================

`);

}

Menu();


AgregarPedido(1);
AgregarPedido(4);
AgregarPedido(10);
AgregarPedido(5);

mostrarTicket();