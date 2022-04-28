// metodos de propiedades
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },

   pausar: function () { 
        console.log('Pausando...');
    },

   crearPlaylist: function (nombre) {
        console.log(`Creando playlist: ${nombre}`);
    },
   reproducirPlaylist: function (nombre) {
      console.log(`Reproduciendo playlist: ${nombre}`);
  },
 
}


// prpiedades fuera del objeto
reproductor.borrarCancion = function (id) {
  console.log(`Eliminando Cancion: ${id}`);
}
//console.log(reproductor);
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Rock');