console.log("Hola mundo js desde el servidor ")

/* medir el tiempo del proceso */
console.time("miProceso")

for(let i=0 ; i<100; i++){}

console.timeEnd("miProceso")

/* Objetos tipo tabla */

let usuarios = [
    {nombre:"ivan",edad:38},
    {nombre:"isay",edad:38},
];
console.table(usuarios)