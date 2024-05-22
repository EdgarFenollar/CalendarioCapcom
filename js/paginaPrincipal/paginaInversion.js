
let currentIndex = 0;



function mueveImagen(posicion){
    const carruselCont=document.querySelector('.carruselContenedor');
    const totalImagenes=document.querySelectorAll('.contenedorImg').length; /*Quiero guardar el tamaño no todas las imagenes*/

    /*Me encapsula el tamaño para que no exceda*/
    currentIndex=(currentIndex + posicion + totalImagenes) % totalImagenes;
    /*Desplazamiento ha de ser del 100%, es como si tuvieses un carrete de fotos y sólo visualizas una por pantalla,
    para visualizarla completamente multiplicas por 100 y el - es para inidcar que se va desplazando hacia la izquierda (ejeX) */
    const desplazamiento=-currentIndex * 100;
    carruselCont.style.transform = `translateX(${desplazamiento}%)`;
}

/*Declaro una variable que llame a setInterval para poder resetearlo en siguiente y atras*/
pasaImagen=setInterval(siguiente, 4000);

function siguiente(){
   mueveImagen(1);
   /*He de limpiar el intervalo para que cuando clique el botón no se acumule ambos movimientos */
    clearInterval(pasaImagen);
    pasaImagen=setInterval(siguiente, 4000);
}

function atras(){
    mueveImagen(-1);
    clearInterval(pasaImagen);
    pasaImagen=setInterval(siguiente, 4000);
}




function actualizarContador() {
    // Verificar la existencia del contador en el almacenamiento local
    if(localStorage.getItem('visitas')) {
      // Obtener el valor actual del contador
      var contador = parseInt(localStorage.getItem('visitas'));
      contador++;
      localStorage.setItem('visitas', contador);
      document.getElementById('contador').textContent = contador;
    } else {
      // Si no existe el contador, inicializarlo.
      localStorage.setItem('visitas', 1);
      document.getElementById('contador').textContent = 1;
    }
  }

  function cargarPagina(){
    actualizarContador();
  }
  
  // Llamar a la función cuando la página se cargue  
  window.onload = cargarPagina();
