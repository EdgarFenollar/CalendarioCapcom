
let slideIndex = 0;

let imagenesHeader = [
    "../../img/paginaPrincipal/paginaPrincipalPokemon/header1.jpg",
    "../../img/paginaPrincipal/paginaPrincipalPokemon/header2.jpg",
    "../../img/paginaPrincipal/paginaPrincipalPokemon/header3.jpg",
    "../../img/paginaPrincipal/paginaPrincipalPokemon/header4.jpg",
    "../../img/paginaPrincipal/paginaPrincipalPokemon/header5.jpg",
]

function cambiarImgHeader(numInput) {
    let num = parseInt(numInput);
    let imagen = document.querySelector('header').querySelector('figure').querySelector('img');
    slideIndex += num;
    
    if (slideIndex < 0) {
        slideIndex = imagenesHeader.length - 1;
    } else if (slideIndex >= imagenesHeader.length) {
        slideIndex = 0;
    }
    
    imagen.src = imagenesHeader[slideIndex];
}


// He creado esta funcion para usarla en el setInterval ya que cuando uso setInterval
// no puedo pasar parametros de entrada en la funcion cambiarImgHeader.
function cambiarImgHeaderAuto() {
    cambiarImgHeader('1');
}

setInterval(cambiarImgHeaderAuto, 5000);

function mostrarTrabajos(idImgMore) {
    let img = document.getElementById(idImgMore);
    let ruta = img.getAttribute('src');
    let rutaNueva, displayNuevo;

    if (ruta === "../../img/paginaPrincipal/paginaPrincipalPokemon/more.webp") {
        rutaNueva = "../../img/paginaPrincipal/paginaPrincipalPokemon/moreActive.webp";
        displayNuevo = 'flex';
    } else {
        rutaNueva = "../../img/paginaPrincipal/paginaPrincipalPokemon/more.webp";
        displayNuevo = 'none';
    }
    img.setAttribute('src', rutaNueva);
    document.querySelector('#trabajos').style.display = displayNuevo;
}
