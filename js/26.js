// this
const reservacion = {
  nombre: "Isai",
  apellido: "Salgado",
  total:5000,
  pagado:false,
  informacion: function() {
    console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es  ${this.total}`);
  }
}

const reservacion2 = {
  nombre: "Isai",
  apellido: "Salgado",
  total:5000,
  pagado:false,
  informacion: function() {
    console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es  ${this.total}`);
  }
}

reservacion.informacion();
reservacion2.informacion();