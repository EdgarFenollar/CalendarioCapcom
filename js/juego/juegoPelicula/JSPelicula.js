// Peliculas que adivinar
var peliculas = [
    "Titanic",
    "El Señor de los Anillos",
    "Avatar",
    "Harry Potter",
    "Jurassic Park",
    "Star Wars",
    "Rey Leon",
    "Forrest Gump",
    "Piratas del Caribe",
    "Matrix"
];

// Matriz con las imagenes que hay que adivinar
var imagenes = [
    ["./../../../img/juego/juegoPelicula/titanic1.jpg", "./../../../img/juego/juegoPelicula/titanic2.jpg", "./../../../img/juego/juegoPelicula/titanic3.jpg"],
    ["./../../../img/juego/juegoPelicula/LOTR1.jpg", "./../../../img/juego/juegoPelicula/LOTR2.jpg", "./../../../img/juego/juegoPelicula/LOTR3.jpg"],
    ["./../../../img/juego/juegoPelicula/avatar1.jpg", "./../../../img/juego/juegoPelicula/avatar2.jpg", "./../../../img/juego/juegoPelicula/avatar3.jpg"],
    ["./../../../img/juego/juegoPelicula/harry1.jpg", "./../../../img/juego/juegoPelicula/harry2.jpg", "./../../../img/juego/juegoPelicula/harry3.jpg"],
    ["./../../../img/juego/juegoPelicula/jurasic1.jpg", "./../../../img/juego/juegoPelicula/jurasic2.jpg", "./../../../img/juego/juegoPelicula/jurasic3.jpg"],
    ["./../../../img/juego/juegoPelicula/star1.jpg", "./../../../img/juego/juegoPelicula/star2.jpg", "./../../../img/juego/juegoPelicula/star3.jpg"],
    ["./../../../img/juego/juegoPelicula/rey1.jpg", "./../../../img/juego/juegoPelicula/rey2.jpg", "./../../../img/juego/juegoPelicula/rey3.jpg"],
    ["./../../../img/juego/juegoPelicula/forrest1.jpg", "./../../../img/juego/juegoPelicula/forrest2.jpg", "./../../../img/juego/juegoPelicula/forrest3.jpg"],
    ["./../../../img/juego/juegoPelicula/piratas1.jpg", "./../../../img/juego/juegoPelicula/piratas2.jpg", "./../../../img/juego/juegoPelicula/piratas3.jpg"],
    ["./../../../img/juego/juegoPelicula/matrix1.jpg", "./../../../img/juego/juegoPelicula/matrix2.jpg", "./../../../img/juego/juegoPelicula/matrix3.jpg"]
];

// Imagenes de las vidas y la cantidad de vidas restantes
let vidas = document.querySelectorAll(".vida");
let vidasRestantes = 2;

let img = document.getElementById("img");

let racha = 0;

let numPeliculas = 9;
let numAleatorio;
let dificultad;

document.addEventListener("DOMContentLoaded", cargar(numPeliculas));

function reiniciar(){
    location.href = "AdivinaPelicula.html";
}

function cargar(numPeliculas){
    numAleatorio = Math.floor(Math.random() * numPeliculas + 1);
    dificultad = 0;
    console.log(numAleatorio);

    vidas[0].style.display = "block";
    vidas[1].style.display = "block";
    vidas[2].style.display = "block";

    document.getElementById("racha").innerHTML = "Racha de victorias: "+racha;

    img.src = imagenes[numAleatorio][dificultad];
}

function salir(){
    location.href = "./../../../html/juego/juegoPelicula/SeleccionModo.html";
}

texto.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Verifica si la tecla presionada es "Enter"
      comprobar(); // Llama a la funcion del boton.
    }
});

function comprobar(){
    // Leemos la pelicula que hay que adivinar y la escrita.
    let texto = document.getElementById("texto").value;
    let textoEscrito = texto;
    let textoAComprobar = peliculas[numAleatorio];

    console.log("Vidas: "+(vidasRestantes+1))
    console.log(peliculas)

    // Comparamos las peliculas (No he conseguido implementar el "toLowerCase")
    if(textoEscrito.includes(textoAComprobar)){
        // Mostramos un mensaje, eliminamos la imagen del array, reducimos en numero de peliculas y aumentamos la racha.
        texto.textContent = "CORRECTO";
        imagenes.splice(numAleatorio, 1);
        peliculas.splice(numAleatorio, 1);
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
            dificultad += 1;
            img.src = imagenes[numAleatorio][dificultad];
        }
    }
}
