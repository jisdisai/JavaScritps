const product = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

const medida = {
  peso: "1kg",
  medida: "1m"
}

const nuevoProducto = {...product, ...medida};

console.log(product);
console.log(medida);