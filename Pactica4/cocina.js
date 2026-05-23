// ========================================
//            COCINA.JS
// ========================================

export let catalogo = [

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


export let pedidos=[];


// FILTROS

export let baratos =
catalogo.filter(
p=>p.precio<=50
);

export let caros =
catalogo.filter(
p=>p.precio>=65
);

export let bebidas =
catalogo.filter(
p=>
p.categoria.includes(
"Bebida"
)
);

export let postres =
catalogo.filter(
p=>
p.categoria==="Postre"
);



// RENDER MENU

export function renderMenu(
lista
){

let contenedor =
document.getElementById(
"productos"
);

contenedor.innerHTML="";


lista.forEach(
(producto,index)=>{

contenedor.innerHTML+=`

<div class="producto">

<h3>

${index+1}.
${producto.nombre}

</h3>

<p>
Precio:
$${producto.precio}
</p>

<p>
${producto.categoria}
</p>

<p>
${producto.promocion}
</p>

<button
onclick="
window.crearPedidoUI(
${producto.id}
)
">

Agregar pedido

</button>

</div>

`;

});

}



// PEDIDOS

export function crearPedido(
idProducto
){

let producto =
catalogo.find(
p=>
p.id===idProducto
);

if(producto){

pedidos.push(
producto
);

}

return producto;

}



// CAJA

export function subtotal(){

return pedidos.reduce(

(ac,p)=>

ac+p.precio,

0

);

}


export function iva(){

return subtotal()*0.16;

}


export function total(){

return subtotal()+iva();

}



// PREPARACION

export function prepararProducto(
idProducto,
actualizarEstado
){

return new Promise(
(resolve,reject)=>{

let producto =
catalogo.find(
p=>
p.id===idProducto
);


setTimeout(()=>{

actualizarEstado(
"☕ Preparando..."
);

},4000);


setTimeout(()=>{

actualizarEstado(
"📦 Empacando..."
);

},6000);


setTimeout(()=>{

let disponible =
Math.random()>0.3;


if(disponible){

resolve(
producto.nombre
);

}

else{

reject(
producto.nombre
);

}

},6000);

});

}