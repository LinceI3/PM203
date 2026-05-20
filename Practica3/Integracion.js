
let catalogo = [
{
id:1,
nombre:"Capuchino",
precio:55,
categoria:"Bebida caliente",
promocion:"10% OFF"
},
{
id:2,
nombre:"Latte",
precio:60,
categoria:"Bebida caliente",
promocion:"2x1"
},
{
id:3,
nombre:"Americano",
precio:40,
categoria:"Bebida caliente",
promocion:"Sin promoción"
},
{
id:4,
nombre:"Frappé Moka",
precio:75,
categoria:"Bebida fría",
promocion:"15% OFF"
},
{
id:5,
nombre:"Cheesecake",
precio:65,
categoria:"Postre",
promocion:"Combo café + postre"
}
];

let contenedor = document.getElementById("productos");
let pedidos = [];

// MENU DINAMICO

function renderMenu(listaProductos){

contenedor.innerHTML = "";

listaProductos.forEach((producto,index)=>{

contenedor.innerHTML += `
<div class="producto">
<h3>${index + 1}. ${producto.nombre}</h3>
<p>Precio: $${producto.precio}</p>
<p>Categoría: ${producto.categoria}</p>
<p>Promoción: ${producto.promocion}</p>
<button onclick="crearPedido(${producto.id})">
Agregar pedido
</button>
</div>
`;

});

}

renderMenu(catalogo);

// CLIENTE
function mostrarProductos(){
return catalogo.map(producto => producto.nombre);
}

// COCINA
// Productos baratos
let baratos = catalogo.filter(
producto => producto.precio <= 50
);

// Productos caros
let caros = catalogo.filter(
producto => producto.precio >= 65
);

// Bebidas
let bebidas = catalogo.filter(
producto => producto.categoria.includes("Bebida")
);

// Postres
let postres = catalogo.filter(
producto => producto.categoria === "Postre"
);

// Buscar producto
let productoBuscado = catalogo.find(
producto => producto.id === 4
);


// PEDIDOS
function crearPedido(idProducto){

let producto = catalogo.find(
item => item.id === idProducto
);

if(producto){
pedidos.push(producto);
actualizarPedido();
}

}

function mostrarPedidos(){
return pedidos;
}

// CAJA
function calcularSubtotal(){
return pedidos.reduce(
(acumulador,producto)=> acumulador + producto.precio,
0
);
}

function calcularIVA(){
return calcularSubtotal() * 0.16;
}

function calcularTotal(){
return calcularSubtotal() + calcularIVA();
}

function actualizarPedido(){
let contenedorPedidos = document.getElementById("pedidos");

let subtotalHTML = document.getElementById("subtotal");
let ivaHTML = document.getElementById("iva");
let totalHTML = document.getElementById("total");

contenedorPedidos.innerHTML = "";

pedidos.forEach((pedido,index)=>{

const { nombre, precio, categoria } = pedido;

contenedorPedidos.innerHTML += `
<p>
${index + 1}. ${nombre}
<br>
Precio: $${precio}
<br>
Categoría: ${categoria}
</p>
`;

});

subtotalHTML.innerText = `Subtotal: $${calcularSubtotal().toFixed(2)}`;

ivaHTML.innerText = `IVA: $${calcularIVA().toFixed(2)}`;

totalHTML.innerHTML = `<b>Total: $${calcularTotal().toFixed(2)}</b>`;
}

function mostrarFiltro(tipo){

switch(tipo){

case "baratos":
renderMenu(baratos);
break;

case "caros":
renderMenu(caros);
break;

case "bebidas":
renderMenu(bebidas);
break;

case "postres":
renderMenu(postres);
break;

default:
renderMenu(catalogo);

}

}