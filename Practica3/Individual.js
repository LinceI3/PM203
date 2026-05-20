let menu = [

{
nombre:"Cafe Americano",
precio:45,
promocion:"10% OFF"
},

{
nombre:"Latte",
precio:65,
promocion:"2x1"
},

{
nombre:"Frappe",
precio:80,
promocion:"Sin promoción"
}

];

let contenedor = document.getElementById(
"productos"
);



menu.forEach((producto,index)=>{

contenedor.innerHTML += `

<div class="producto">

<h3>${index+1}. ${producto.nombre}</h3>

<p>Precio: $${producto.precio}</p>

<p>Promoción: ${producto.promocion}</p>

</div>

`;

});



let disponibles = menu.map(
producto => producto.nombre
);

console.log(
"Productos disponibles:"
);

console.log(disponibles);