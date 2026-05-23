function iniciarPedido(){

    let estado = document.getElementById("estado");

    estado.innerHTML = " Pedido recibido";

    setTimeout(() => {

        estado.innerHTML = "☕ Preparando...";

    },2000);


    setTimeout(() => {

        estado.innerHTML = "📦 Empacando...";

    },5000);


    setTimeout(() => {

        let cancelar = Math.random() < 0.25;

        if(cancelar){

            estado.innerHTML =
            " Pedido cancelado";

        }

        else{

            estado.innerHTML =
            "Pedido entregado";

        }

    },8000);

}