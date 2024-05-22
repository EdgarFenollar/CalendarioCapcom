var frasesCineCompletas = [
    "Que la fuerza te acompañe",
    "Tócala otra vez, Sam",
    "Voy a hacerle una oferta que no podrá rechazar",
    "Hasta el infinito y más allá",
    "Houston, tenemos un problema",
    "La vida es como una caja de chocolates, nunca sabes qué te va a tocar",
    "Soy el rey del mundo",
    "Hasta la vista, baby",
    "Bond, James Bond",
    "Yo soy tu padre"
];

var frasesCineIncompletas = [
    'Que la fuerza te ',
    'Tócala otra vez, ',
    'Voy a hacerle una oferta que no ',
    'Hasta el infinito y ',
    "Houston, tenemos un ",
    "La vida es como una caja de chocolates, nunca sabes qué te va a ",
    "Soy el rey del ",
    "Hasta la vista, ",
    "Bond, James ",
    "Yo soy tu "
];

var imagenes = [
    './../../../img/juego/juegoPelicula/imagen1.jpg',
    './../../../img/juego/juegoPelicula/imagen2.jpg',
    './../../../img/juego/juegoPelicula/imagen3.jpg',
    './../../../img/juego/juegoPelicula/imagen4.jpg',
    './../../../img/juego/juegoPelicula/imagen5.jpg',
    './../../../img/juego/juegoPelicula/imagen6.jpg',
    './../../../img/juego/juegoPelicula/imagen7.jpg',
    './../../../img/juego/juegoPelicula/imagen8.jpg',
    './../../../img/juego/juegoPelicula/imagen9.jpg',
    './../../../img/juego/juegoPelicula/imagen10.jpg',
];

// Imagenes de las vidas y la cantidad de vidas restantes
let vidas = document.querySelectorAll(".vida");
let vidasRestantes = 2;

let img = document.getElementById("img");

let textoIncompleto = document.getElementById("fraseIncompleta");

let racha = 0;

let numPeliculas = 9;
let numAleatorio;
let dificultad;

document.addEventListener("DOMContentLoaded", cargar(numPeliculas));

function cargar(numPeliculas){
    numAleatorio = Math.floor(Math.random() * numPeliculas + 1);
    dificultad = 0;
    console.log(numAleatorio);
    textoIncompleto.innerHTML = frasesCineIncompletas[numAleatorio];

    vidas[0].style.display = "block";
    vidas[1].style.display = "block";
    vidas[2].style.display = "block";

    document.getElementById("racha").innerHTML = "Racha de victorias: "+racha;

    img.src = imagenes[numAleatorio];
}

texto.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Verifica si la tecla presionada es "Enter"
      comprobar(); // Llama a la funcion del boton.
    }
});


function comprobar(){
    // Leemos la pelicula que hay que adivinar y la escrita.
    let texto = document.getElementById("texto").value;
    let fraseCompleta = frasesCineIncompletas[numAleatorio] + texto;

    console.log("Vidas: "+(vidasRestantes+1))
    console.log(frasesCineCompletas[numAleatorio])
    console.log(fraseCompleta)

    // Comparamos las peliculas (No he conseguido implementar el "toLowerCase")
    if(fraseCompleta == frasesCineCompletas[numAleatorio]){
        // Mostramos un mensaje, eliminamos la imagen del array, reducimos en numero de peliculas y aumentamos la racha.
        imagenes.splice(numAleatorio, 1);
        frasesCineCompletas.splice(numAleatorio, 1);
        frasesCineIncompletas.splice(numAleatorio, 1);
        numPeliculas -= 1;
        racha += 1;
        cargar(numPeliculas)
    }else{
        if(vidasRestantes == 0){
            document.getElementById("header").style.display = "none";
            document.getElementById("main").style.display = "none";
            document.getElementById("perder").style.display = "block";
        }else{
            // Reiniciamos la racha, disminuimos la vida restante, quitamos uno de los corazones, y imprimimos la ciguiente imagen (mas facil)
            racha = 0;
            vidas[vidasRestantes].style.display = "none";
            vidasRestantes -= 1;
        }
    }
}

function reiniciar(){
    location.href = "AdivinaFrase.html";
}

function salir(){
    location.href = "./../../../html/juego/juegoPelicula/SeleccionModo.html";
}