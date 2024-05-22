let numeroRandom;
let contadorGiros = 0; // empeiza en 0, es el numero de veces que "rueda" el dado
let lanzarIntervalo;
let sonidoDado = new Audio("../../musica/dados/sonidoDados.mp3"); //Sonido del dado al rodar

// numero aleatorio y dado
function diceRoll() {

  numeroRandom = Math.floor(Math.random() * 20) + 1; // genera un numeero del 1 al 20

  let d20Imagen = "../../img/dados/CarasDados/d20" + numeroRandom +".png"; //asigna la ruta de la imagen del dado
  
  document.querySelector(".d20").setAttribute("src", d20Imagen); // inserta el src con la ruta
}

// funcion quue lanza el dado, llamada por el boton
function clickRoll() {
  lanzarIntervalo = setInterval(function() {
    sonidoDado.play(); //sonido
    if (contadorGiros < 8 || contadorGiros > 0) { //hace girar el dado 8 veces
      diceRoll();
      contadorGiros++;
      console.log(contadorGiros);
    }

    if (contadorGiros > 8) { //lo para en el ultimo giro
      clearInterval(lanzarIntervalo);
      contadorGiros = 0;

      document.getElementById("resultado").innerHTML =
        "Has sacado un " + numeroRandom + "!"; //enseña el ultimo numero random, el resultado de la tirada
    }
  }, 80);
}
