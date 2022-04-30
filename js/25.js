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

// foreach

carrito.forEach(producto => console.log(producto.nombre)); // iterar o mostrar consola

//map

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`); //crear un nuevo arreglo o asignar nueva variable

console.log(arreglo2);