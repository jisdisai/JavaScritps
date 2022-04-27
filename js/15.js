// Array Methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


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

// forEach
meses.forEach(function(mes){
  if(mes == 'Marzo'){
    console.log('Marzo si existe');
  }
});

//includes
let resultado = meses.includes('Diciembre');
//const resultado2 = meses.includes('Celular');

//console.log(resultado2);

//some ideal para arreglos de objetos 
resultado = carrito.some(function(producto){
  return producto.nombre === 'Celular';
});

//reduce
resultado = carrito.reduce(function(total, producto){
  return total + producto.precio;
}, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//filter
resultado = carrito.filter(function(producto){ 
  return producto.precio >= 400;
});
 
resultado = carrito.filter(function(producto){ 
  return producto.nombre === 'Celular';
});

console.log(resultado);




  
