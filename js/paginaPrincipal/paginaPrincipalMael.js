// Variable de la imagen del header
let img = document.getElementById("imagenHeader");

// Array de imagenes de los posters
let imagenes = [
  "./../../img/paginaPrincipal/paginaCine/imagen1.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen2.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen3.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen4.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen5.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen6.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen7.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen8.jpg"
]

// Numero que servira para ir cambiando la imagen
var numImg = 0;

// Funcion para pasar de imagen
function pasarImagen(num) {
  numImg = numImg + num;
  if(numImg >= imagenes.length){
    numImg = 0;
  }else if(numImg < 0){
    numImg = imagenes.length - 1;
  }
  // Cambiar la imagen
  img.src = imagenes[numImg];
}

// Funcion a la que no se le pasa ningun valor para aplicar el setInterval. Esta solucion la encontré con Aitor.
function pasarImagenAuto(){
  pasarImagen(1);
}
setInterval(pasarImagenAuto, 5000)