
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
  Notification.requestPermission()
  .then(resultado => console.log(`El Resultado es ${resultado}`))
});

if(Notification.permission == 'granted'){
  new Notification('Esta es una notificacion', {
    icon: 'img/logois.png',
    body: 'Ingeneria en Sistemas'});
}