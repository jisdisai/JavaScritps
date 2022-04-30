// for loop

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
//       console.log(`Èl número ${i} es PAR`);
//     } else {
//       console.log(`El número ${i} es IMPAR`);
//     }
// }


const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 }, 
  { nombre: "Bocina", precio: 300 },
  { nombre: "Laptop", precio: 800 },

];

/*
for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}


// while loop

let i = 0;  // Indice

while(i <= carrito.length) { // Condicion
  
  console.log(carrito[i].nombre);
  

  i++;// Incremento
}


*/


//Do while loop

let i = 100;  

do{

  console.log(i);

  i++
}while(i<10);
