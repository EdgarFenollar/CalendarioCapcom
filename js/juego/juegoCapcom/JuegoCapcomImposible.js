let navePosicionX = 50;
let navePosicionY = 450;
let piedraVelocidad = 10;
let flechaDerPulsada = false;
let flechaIzqPulsada = false;
let flechaArribaPulsada = false;
let felchaAbajoPulsada = false;

let puntuacion = 0;
let contpunt = true;
let boolpiedras = true;

function aumentarPuntuacion() {
  if (contpunt){
    puntuacion += 1;
  }
  document.getElementById("puntuacion").innerText = puntuacion;
}

setInterval(aumentarPuntuacion, 1);

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    flechaDerPulsada = true;
  } else if (event.key === 'ArrowLeft') {
    flechaIzqPulsada = true;
  } else if (event.key === 'ArrowUp') {
    flechaArribaPulsada = true;
  } else if (event.key === 'ArrowDown') {
    felchaAbajoPulsada = true;
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'ArrowRight') {
    flechaDerPulsada = false;
  } else if (event.key === 'ArrowLeft') {
    flechaIzqPulsada = false;
  } else if (event.key === 'ArrowUp') {
    flechaArribaPulsada = false;
  } else if (event.key === 'ArrowDown') {
    felchaAbajoPulsada = false;
  }
});

function moverNave() {
  if (flechaDerPulsada && navePosicionX < window.innerWidth - 50) {
    navePosicionX += 10;
  }
  if (flechaIzqPulsada && navePosicionX > 0) {
    navePosicionX -= 10;
  }
  if (flechaArribaPulsada && navePosicionY > 0) {
    navePosicionY -= 10;
  }
  if (felchaAbajoPulsada && navePosicionY < window.innerHeight - 50) {
    navePosicionY += 10;
  }
  let nave = document.getElementById('nave');
  nave.style.left = navePosicionX + 'px';
  nave.style.top = navePosicionY + 'px';
  requestAnimationFrame(moverNave);
}

function crearPiedras() {
  if (boolpiedras){
    let piedra = document.createElement('img');
    piedra.src = '../../../img/juego/juegoCapcom/asteroide.jpg';
    piedra.classList.add('piedra');
    piedra.style.right = '0px';
    piedra.style.width = '70px';
    piedra.style.height = '70px';
    piedra.style.bottom = Math.floor(Math.random() * window.innerHeight) + 'px';
    document.querySelector('.game-container').appendChild(piedra);
  }
}

function moverPiedra() {
  let piedras = document.querySelectorAll('.piedra');
  piedras.forEach(function (piedra) {
    let currentPosicion = parseInt(piedra.style.right) || 0;
    currentPosicion += piedraVelocidad;
    piedra.style.right = currentPosicion + 'px';
    if (currentPosicion > window.innerWidth) {
      piedra.remove();
      crearPiedras();
    }
    if (siColisiona(piedra, document.getElementById('nave'))) {
      nave.src = '../../../img/juego/juegoCapcom/explosion.gif';
      contpunt = false;
      setTimeout(mostrarModal, 1000);
    }
  });

  requestAnimationFrame(moverPiedra);
}

function siColisiona(piedra, nave) {
  let piedraRect = piedra.getBoundingClientRect();
  let naveRect = nave.getBoundingClientRect();
  return !(
    piedraRect.top > naveRect.bottom ||
    piedraRect.right < naveRect.left ||
    piedraRect.bottom < naveRect.top ||
    piedraRect.left > naveRect.right
  );
}

function mostrarModal() {
  var modal = document.getElementById("menu");
  modal.style.display = "block";

  var gameOver = document.getElementById("puntuacionMenu");
  var puntuacionMenu = document.getElementById("puntuacionTitulo");
  gameOver.innerText = "GAME OVER";
  gameOver.style.fontSize = "60px";
  puntuacionMenu.innerText = "Puntuación: " + puntuacion;
  puntuacionMenu.style.fontSize = "50px";
  puntuacionMenu.style.marginTop = "-40px"


  document.getElementById("volverAJugar").onclick = function() {
    window.location.reload();
    modal.style.display = "none";
  }

  document.getElementById("salirAlMenuPrincipal").onclick = function() {
    window.location.href = "../../../html/juego/juegoCapcom/principalJuegoCapcom.html";
  }
}

setInterval(crearPiedras, 500);
moverNave();
moverPiedra();
