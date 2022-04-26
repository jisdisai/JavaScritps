//forma de Objeto
const product = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

//forma anterior
// const precioProducto = product.precio;
// const nombreProducto = product.nombreProducto;


//console.log(nombreProducto);
//console.log(precioProducto);

// Destructuring
const {precio, nombreProducto}=product;


console.log(precio);
console.log(nombreProducto);
