// ========================================
//              CAJA.JS
// ========================================

let pedidosCaja = [];

export function registrarPedido(producto){

pedidosCaja.push(producto);

return `
📥 Pedido registrado

Producto:
${producto}

Esperando cocina...
`;

}


export function pedidoListo(producto){

return `
✅ PEDIDO LISTO

${producto}

Entregar al cliente
`;

}


export function pedidoCancelado(producto){

return `
❌ PEDIDO CANCELADO FALTA DE INGREDIENTE 

No fue posible preparar:

${producto}
`;

}