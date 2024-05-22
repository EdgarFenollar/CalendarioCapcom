let numDadosTirar = 2;

let tipos = {
    agua: "../../img/juegoDados/imgJuegoDadosPokemon/agua.webp",
    fuego: "../../img/juegoDados/imgJuegoDadosPokemon/fuego.webp",
    planta: "../../img/juegoDados/imgJuegoDadosPokemon/planta.webp",
};

function play(idSeccionJugador1, idSeccionJugador2) {
    
    removeImg(idSeccionJugador1);
    removeImg(idSeccionJugador2);

    let img1 = document.createElement('img');
    let img2 = document.createElement('img');

    img1.src = generarTipo();
    img1.setAttribute('id', 'imgJugador1');

    img2.src = generarTipo();
    img2.setAttribute('id', 'imgJugador2');

    document.getElementById(idSeccionJugador1).appendChild(img1).innerHTML;
    document.getElementById(idSeccionJugador2).appendChild(img2).innerHTML;
    getGanador(img1, img2);
}

function obtenerTipo(img) {
    let imgSrcRelative = img.src.substring(img.src.lastIndexOf('/') + 1); // nombre del archivo de forma relativa
    for (let key in tipos) {
        if (tipos.hasOwnProperty(key)) {
            if (tipos[key].endsWith(imgSrcRelative)) {
                return key;
            }
        }
    }
}

function getGanador(img1, img2) {
    let tipo1 = obtenerTipo(img1);
    let tipo2 = obtenerTipo(img2);

    let ganador;
    if (tipo1 === tipo2) {
        ganador = "Empate";
    } else if (
        (tipo1 === "agua" && tipo2 === "fuego") ||
        (tipo1 === "fuego" && tipo2 === "planta") ||
        (tipo1 === "planta" && tipo2 === "agua")
    ) {
        ganador = "Jugador 1";
    } else {
        ganador = "Jugador 2";
    }
    document.getElementById('ganador').textContent = "El ganador es " + ganador;
}

function generarTipo() {
    let keys = Object.keys(tipos);
    let numRandom = Math.floor(Math.random() * keys.length);
    return tipos[keys[numRandom]];
}

function removeImg(idContainer) {
    let imagenesExistentes = document.getElementById(idContainer).getElementsByTagName('img');
    for (let i = 0; i < imagenesExistentes.length; i++) {
        imagenesExistentes[i].remove();
    }
}