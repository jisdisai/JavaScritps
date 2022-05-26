const usuarioAutenticacion = new Promise((resolve, reject) => {
  const auth = false;

  if (auth) {
    resolve('Usuario autenticado'); // El Promise se cumple
  } else {
    reject('Usuario no autenticado'); // El Promise no se cumple
  }
});

usuarioAutenticacion
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

  


//En los Promise existen 3 valores
//1. Pending : cuando se crea el objeto Promise y no se ha resuelto ni rechazado
//2. Fulfilled : cuando se resuelve el objeto Promise y se obtiene un valor de retorno
//3. Rejected : cuando se rechaza el objeto Promise y se obtiene un valor de retorno 

