// ========================================
//              APP.JS
// ========================================

import {

catalogo,
baratos,
caros,
bebidas,
postres,

pedidos,

renderMenu,
crearPedido,

subtotal,
iva,
total,

prepararProducto

}

from "./cocina.js";


import {

registrarPedido,
pedidoListo,
pedidoCancelado

}

from "./caja.js";



// CARGA INICIAL

renderMenu(
catalogo
);



// FILTROS

window.mostrarFiltro=
(tipo)=>{

switch(tipo){

case "baratos":

renderMenu(
baratos
);

break;


case "caros":

renderMenu(
caros
);

break;


case "bebidas":

renderMenu(
bebidas
);

break;


case "postres":

renderMenu(
postres
);

break;


default:

renderMenu(
catalogo
);

}

};




// ========================================
//      CONFIRMACION PEDIDOS
// ========================================

let pedidoPendiente = [];
let pedidoConfirmado = [];


// AGREGAR PRODUCTO AL CARRITO

window.crearPedidoUI=
(idProducto)=>{

let producto =
crearPedido(
idProducto
);

pedidoPendiente.push(
producto
);

actualizarCaja();


document.getElementById(
"estado"
)

.innerText=

`🛒 Producto agregado

${producto.nombre}

Esperando confirmación...`;

};


// CONFIRMAR PEDIDO

window.confirmarPedido=
()=>{

if(
pedidoPendiente.length===0
){

document.getElementById(
"estado"
)

.innerText=
"⚠️ No hay productos";

return;

}

pedidoConfirmado = [
...pedidoPendiente
];

pedidoPendiente=[];

let nombres =
pedidoConfirmado.map(
p=>p.nombre
);

actualizarCaja();


document.getElementById(
"estado"
)
.innerText=
`
📥 Pedido enviado

${nombres.join(", ")}

Enviando a cocina...
`;

setTimeout(()=>{

document.getElementById(
"estado"
)
.innerText=
"☕ Preparando pedido completo...";

},2000);

setTimeout(()=>{

document.getElementById(
"estado"
)
.innerText=
"📦 Empacando pedido...";

},4000);

setTimeout(()=>{

let disponible =
Math.random()>0.2;

if(disponible){

document.getElementById(
"estado"
)
.innerText=
`
✅ PEDIDO LISTO

${nombres.join(", ")}

Entregar cliente
`;

}
else{

document.getElementById(
"estado"
)
.innerText=
`
❌ PEDIDO CANCELADO

ingredientes faltantes

${nombres.join(", ")}
`;

}

pedidoConfirmado=[];
pedidos.length=0;

actualizarCaja();

},7000);

};





function actualizarCaja(){

let pedidosHTML =
document.getElementById(
"pedidos"
);

pedidosHTML.innerHTML="";


pedidoPendiente.forEach(

(p,index)=>{

pedidosHTML.innerHTML+=`

<p>

${index+1}.

${p.nombre}

<br>

$${p.precio}

</p>

`;

}

);



document.getElementById(
"subtotal"
)

.innerText=

`Subtotal:
$${subtotal().toFixed(2)}`;



document.getElementById(
"iva"
)

.innerText=

`IVA:
$${iva().toFixed(2)}`;



document.getElementById(
"total"
)

.innerHTML=

`<b>

Total:

$${total().toFixed(2)}

</b>`;

}