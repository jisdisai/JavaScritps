// objetos

// forma normal
const nombreProducto = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;

//forma de Objeto
const product = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}



/*console.log(product.precio);
console.log(product.nombreProducto);
console.log(product.disponible);

//otra forma de objeto
console.log(product['precio']);

*/
// agregar un nuevo propiedad
product.imagen = 'imagen.jpg';

// eliminar una propiedad
delete product.disponible;

console.log(product);
