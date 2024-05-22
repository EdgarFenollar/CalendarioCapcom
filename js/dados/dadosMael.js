var fotos = [
    "./../../img/dados/cine/d1.jpg",
    "./../../img/dados/cine/d2.jpg",
    "./../../img/dados/cine/d3.jpg",
    "./../../img/dados/cine/d4.jpg",
    "./../../img/dados/cine/d5.jpg",
    "./../../img/dados/cine/d6.jpg"
];

var dadosJ1 = document.querySelectorAll(".dadosJugador1");
var dadosJ2 = document.querySelectorAll(".dadosJugador2");
var boton = document.getElementById("boton");

var contenedorD1 = document.getElementById("dadosP1");
var contenedorD2 = document.getElementById("dadosP2");

var seleccionJ1 = document.getElementById("player1");
var seleccionJ2 = document.getElementById("player2");

var resultados = document.getElementById("Resultados");
var marcador = document.getElementById("marcador");
var sumaJ2 = 0, sumaJ1 = 0, victoriasJ1 = 0, victoriasJ2 = 0, numTiradas = 3, numDadosJ1 = 12, numDadosJ2 = 12;


// Realiza la tirada
boton.addEventListener("click", function reproducir(){
    numTiradas--;
    // Comprobamos si se han acabado las tiradas o si hay una diferencia de dos puntos
    if(numTiradas == -1 || victoriasJ1 - victoriasJ2 == 2 || victoriasJ2 - victoriasJ1 == 2) {
        imprimirGanador();
    }
    
    sumaJ1 = 0;
    sumaJ2 = 0;

    
    borrarDados();
    imprimirDados();
    resultados.innerHTML = sumaJ1 + " - "+ sumaJ2;
    victorias(sumaJ1, sumaJ2);

    
    if(numTiradas == 0 || victoriasJ1 - victoriasJ2 == 2 || victoriasJ2 - victoriasJ1 == 2) boton.innerHTML = "COMPROBAR GANADOR";
    else boton.innerHTML = "TIRADAS RESTANTES: "+numTiradas;

    numDadosJ1 = numDadosJ1 - parseInt(seleccionJ1.value);
    numDadosJ2 = numDadosJ2 - parseInt(seleccionJ2.value);
    if(numDadosJ1 < 10) borrarOpciones(seleccionJ1, numDadosJ1);
    if(numDadosJ2 < 10) borrarOpciones(seleccionJ2, numDadosJ2)
});

function borrarOpciones(jugador, num){
    for (let i = num + parseInt(seleccionJ1.value); i >= num; i--) {
        jugador.remove(i);
    }
}




function borrarDados(){
    for (var i = 0; i < 10; i++) {
        dadosJ1[i].style.display = "none";
        dadosJ2[i].style.display = "none";
    }
}

function imprimirDados(){
    var numdados1 = parseInt(seleccionJ1.value);
    var numdados2 = parseInt(seleccionJ2.value);
    // Imprime los dados
    for (var i = 0; i < numdados1; i++) {
        var numAleatorio = Math.floor(Math.random()*5)+1;
        dadosJ1[i].src = fotos[numAleatorio];
        dadosJ1[i].style.display = "block";
        sumarDadosJ1(numAleatorio);
    }

    // Imprime los dados
    for (var i = 0; i < numdados2; i++) {
        var numAleatorio = Math.floor(Math.random()*5)+1;
        dadosJ2[i].src = fotos[numAleatorio];
        dadosJ2[i].style.display = "block";
        sumarDadosJ2(numAleatorio);
    }
}

// Suma la puntuacion de los dados
function sumarDadosJ1(numAleatorio){
    if(numAleatorio == 0) sumaJ1 += 1;
    else if(numAleatorio == 1) sumaJ1 += 2;
    else if(numAleatorio == 2) sumaJ1 += 3;
    else if(numAleatorio == 3) sumaJ1 += 4;
    else if(numAleatorio == 4) sumaJ1 += 5;
    else if(numAleatorio == 5) sumaJ1 += 6;
}

// Suma la puntuacion de los dados
function sumarDadosJ2(numAleatorio){
    if(numAleatorio == 0) sumaJ2 += 1;
    else if(numAleatorio == 1) sumaJ2 += 2;
    else if(numAleatorio == 2) sumaJ2 += 3;
    else if(numAleatorio == 3) sumaJ2 += 4;
    else if(numAleatorio == 4) sumaJ2 += 5;
    else if(numAleatorio == 5) sumaJ2 += 6;
}


// Calcula el ganador de la tirada y lo imprime
function victorias(){
    if(sumaJ1 > sumaJ2) {
        victoriasJ1++;
        marcador.innerHTML = victoriasJ1 + " vs "+victoriasJ2;
    }else if(sumaJ1 < sumaJ2){
        victoriasJ2++;
        marcador.innerHTML = victoriasJ1 + " vs "+victoriasJ2;
    }else {
        victoriasJ1++;
        victoriasJ2++;
        marcador.innerHTML = victoriasJ1 + " vs "+victoriasJ2;
    }
}

// Imprime quien ha sido el ganador
function imprimirGanador(){
    document.getElementById("main").style.display = "none";
    document.getElementById("ganador").style.display = "flex";
    if(victoriasJ1 > victoriasJ2){
        document.getElementById("imagenFinal").src = document.getElementById("imagenJugador").src;
    }else{
        document.getElementById("imagenFinal").src = document.getElementById("imagenEnemigo").src;
    }
}

function cargar(srcImagen){
    document.getElementById("selectorDePersonaje").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("imagenJugador").src = srcImagen;
}