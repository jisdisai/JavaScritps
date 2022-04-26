//"use strict"; // Correr JS en modo estrito
//forma de Objeto
const product = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

// Object.freeze(product);

// //product.imagen = "imagen.jpg";
// console.log(product);

// product.imagen = "imagen.jpg";

// console.log(Object.isFreezen(product));

// console.log(product);

// Object.freeze(product);

//seal
Object.seal(product);

product.imagen = "imagen.jpg";

console.log(Object.isseal(product));

console.log(product);