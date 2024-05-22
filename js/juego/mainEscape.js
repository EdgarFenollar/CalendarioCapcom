const cofrePass = '1890';
var walkieEncontrado = false;
var cofreabierto = false;
var llaveCuartoEncontrada = false;

//CONSTANTES DE DIÁLOGO
const dialogo = document.getElementById('dialogo');
const dialogo2 = document.getElementById('dialogo2');
const mensaje = document.getElementById('mensaje');
const mensaje2 = document.getElementById('mensaje2');
const cerrarBoton = document.getElementById('cerrar');

const minX = 50; // Coordenada X mínima del área de la puerta
const maxX = 150; // Coordenada X máxima del área de la puerta
const minY = 100; // Coordenada Y mínima del área de la puerta
const maxY = 140; // Coordenada Y máxima del área de la puerta

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const backgroundImg = new Image();
backgroundImg.src = '../../img/juego/juegoEscape/backgroundBase.jpg'

const playerImg = new Image();
playerImg.src = '../../img/juego/juegoEscape//Fantasma.png';

const cofreImg = new Image();
cofreImg.src = '../../img/juego/juegoEscape/cofre.png'

const bedImg = new Image();
bedImg.src = '../../img/juego/juegoEscape/bed.png'

const desktImg = new Image();
desktImg.src = '../../img/juego/juegoEscape/desktop.png'

const tvTopImg = new Image();
tvTopImg.src = '../../img/juego/juegoEscape/tvTop.png'
const tvBotImg = new Image();
tvBotImg.src = '../../img/juego/juegoEscape/tvBot.png'

const shelvTopImg = new Image();
shelvTopImg.src = '../../img/juego/juegoEscape/shelvTop.png'
const shelvBotImg = new Image();
shelvBotImg.src = '../../img/juego/juegoEscape/shelvBot.png'

const closetTopImg = new Image();
closetTopImg.src = '../../img/juego/juegoEscape/closetTop.png'
const closetBotImg = new Image();
closetBotImg.src = '../../img/juego/juegoEscape/closetBot.png'

const sofaTopImg = new Image();
sofaTopImg.src = '../../img/juego/juegoEscape/sofaTop.png'
const sofaBotImg = new Image();
sofaBotImg.src = '../../img/juego/juegoEscape/sofaBot.png'

const backgroundWidth = 2000;
const backgroundHeight = 1500;
let backgroundX = 0;

const player = {
    x: 350,
    y: 250,
    width: 100,
    height: 100,
    speed: 5,
    //Siguientes lineas añaden movimiento más fluido y diagonales (2)
    dx: 0,
    dy: 0
};

const cofre ={
    x: 450,
    y: 135,
    width: 100,
    height: 100,
    speed: 0
}

const bed = {
    x: 730,
    y: 150,
    width: 150,
    height: 200
}

const desktop = {
    x: 760,
    y: 330,
    width: 120,
    height: 170
}

const sofaTop = {
    x: 35,
    y: 340,
    width: 220,
    height: 60
}

const sofaBot = {
    x: 35,
    y: 400,
    width: 220,
    height: 90
}

const tvTop = {
    x: 80,
    y: 530,
    width: 120,
    height: 110
}

const tvBot = {
    x: 80,
    y: 640,
    width: 120,
    height: 60
}

const shelvTop = {
    x: 340,
    y: 490,
    width: 120,
    height: 170
}

const shelvBot = {
    x: 340,
    y: 660,
    width: 120,
    height: 40
}

const closetTop = {
    x: 460,
    y: 490,
    width: 120,
    height: 170
}

const closetBot = {
    x: 460,
    y: 660,
    width: 120,
    height: 40
}

function drawBackground(){
    ctx.drawImage(backgroundImg, backgroundX, 0, canvas.width, canvas.height,
        0, 0, canvas.width, canvas.height);
}

let playerFacinfRight = true;
function drawPlayer() {
    //Voltear si el desplazamineto es hacia la izquierda
    if (player.dx < 0 || (player.dx === 0 && !playerFacinfRight)){
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(playerImg, -player.x - player.width, player.y, player.width, player.height);
        ctx.restore();
        playerFacinfRight = false;
    } else {
        ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
        playerFacinfRight = true;
    }
    
}

function drawCofre(){
    ctx.drawImage(cofreImg, cofre.x, cofre.y, cofre.width, cofre.height);
}

function drawBed(){
    ctx.drawImage(bedImg, bed.x, bed.y, bed.width, bed.height);
}

function drawDesk(){
    ctx.drawImage(desktImg, desktop.x, desktop.y, desktop.width, desktop.height);
}

function drawSofaTop(){
    ctx.drawImage(sofaTopImg, sofaTop.x, sofaTop.y, sofaTop.width, sofaTop.height);
}

function drawSofaBot(){
    ctx.drawImage(sofaBotImg, sofaBot.x, sofaBot.y, sofaBot.width, sofaBot.height);
}

function drawTvTop(){
    ctx.drawImage(tvTopImg, tvTop.x, tvTop.y, tvTop.width, tvTop.height);
}

function drawTvBot(){
    ctx.drawImage(tvBotImg, tvBot.x, tvBot.y, tvBot.width, tvBot.height);
}

function drawShelvTop(){
    ctx.drawImage(shelvTopImg, shelvTop.x, shelvTop.y, shelvTop.width, shelvTop.height);
}

function drawShelvBot(){
    ctx.drawImage(shelvBotImg, shelvBot.x, shelvBot.y, shelvBot.width, shelvBot.height);
}

function drawClosetTop(){
    ctx.drawImage(closetTopImg, closetTop.x, closetTop.y, closetTop.width, closetTop.height);
}

function drawClosetBot(){
    ctx.drawImage(closetBotImg, closetBot.x, closetBot.y, closetBot.width, closetBot.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function update() {
    clearCanvas();
    drawBackground();
    drawCofre();
    drawBed();
    drawDesk();
    drawSofaBot();  
    movePlayer(); //Necesario para añadir fluidez en el movimiento (2)
    drawPlayer();
    drawTvTop();
    drawTvBot();
    drawTvBot();
    drawShelvTop();
    drawShelvBot();
    drawClosetTop();
    drawClosetBot();
    drawSofaTop();
    
    requestAnimationFrame(update); //Necesario para añadir fluidez en el movimiento (2). Actualiza el juego a una velocidad más suave y constante
}



function movePlayer() {

    // Guardar la posición previa del jugador
    let prevX = player.x;
    let prevY = player.y;

    // Mover al jugador
    player.x += player.dx;
    player.y += player.dy;

    // Verificar los límites del lienzo
    // Lado izquierdo
    if (player.x < 25) {
        player.x = 25;
    }
    // Parte superior
    if (player.y < 120) {
        player.y = 120;
    }
    // Lado derecho
    if (player.x + player.width > canvas.width - 25) {
        player.x = (canvas.width - 25) - player.width;
    }
    // Parte inferior
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
    }

    // Verificar colisión con el cofre
    if (checkCollision(player, cofre)) {
        // Calcular superposición en los ejes X e Y
        let overlapX = Math.max(0, Math.min(player.x + player.width, cofre.x + cofre.width) - Math.max(player.x, cofre.x));
        let overlapY = Math.max(0, Math.min(player.y + player.height, cofre.y + cofre.height) - Math.max(player.y, cofre.y));

        // Ajustar la posición horizontal y vertical del jugador para evitar la colisión
        if (overlapX < overlapY) {
            // Ajustar la posición horizontal
            if (player.x < cofre.x) {
                player.x -= overlapX;
            } else {
                player.x += overlapX;
            }
        } else {
            // Ajustar la posición vertical
            if (player.y < cofre.y) {
                player.y -= overlapY;
            } else {
                player.y += overlapY;
            }
        }
        player.x = prevX;
        player.y = prevY;
    }

    // Verificar colisión con la cama
    if (checkCollision(player, bed)) {
        // Calcular superposición en los ejes X e Y
       let overlapX = Math.max(0, Math.min(player.x + player.width, bed.x + bed.width) - Math.max(bed.x, bed.x));
       let overlapY = Math.max(0, Math.min(player.y + player.height, bed.y + bed.height) - Math.max(player.y, bed.y));

       // Ajustar la posición horizontal y vertical del jugador para evitar la colisión
       if (overlapX < overlapY) {
           // Ajustar la posición horizontal
           if (player.x < bed.x) {
               player.x -= overlapX;
           } else {
               player.x += overlapX;
           }
       } else {
           // Ajustar la posición vertical
           if (player.y < bed.y) {
               player.y -= overlapY;
           } else {
               player.y += overlapY;
           }
       }
       player.x = prevX;
       player.y = prevY;
    }

    // Verificar colisión con el escritorio
    if (checkCollision(player, desktop)) {
       // Calcular superposición en los ejes X e Y
       let overlapX = Math.max(0, Math.min(player.x + player.width, desktop.x + desktop.width) - Math.max(player.x, desktop.x));
       let overlapY = Math.max(0, Math.min(player.y + player.height, desktop.y + desktop.height) - Math.max(player.y, desktop.y));

       // Ajustar la posición horizontal y vertical del jugador para evitar la colisión
       if (overlapX < overlapY) {
           // Ajustar la posición horizontal
           if (player.x < desktop.x) {
               player.x -= overlapX;
           } else {
               player.x += overlapX;
           }
       } else {
           // Ajustar la posición vertical
           if (player.y < desktop.y) {
               player.y -= overlapY;
           } else {
               player.y += overlapY;
           }
       }
       player.x = prevX;
       player.y = prevY;
   }

   if (checkCollision(player, tvBot)) {
        // Calcular superposición en los ejes X e Y
        let overlapX = Math.max(0, Math.min(player.x + player.width, tvBot.x + tvBot.width) - Math.max(player.x, tvBot.x));
        let overlapY = Math.max(0, Math.min(player.y + player.height, tvBot.y + tvBot.height) - Math.max(player.y, tvBot.y));

        // Ajustar la posición horizontal y vertical del jugador para evitar la colisión
        if (overlapX < overlapY) {
            // Ajustar la posición horizontal
            if (player.x < tvBot.x) {
                player.x -= overlapX;
            } else {
                player.x += overlapX;
            }
        } else {
            // Ajustar la posición vertical
            if (player.y < tvBot.y) {
                player.y -= overlapY;
            } else {
                player.y += overlapY;
            }
        }
        player.x = prevX;
        player.y = prevY;
    }

    if (checkCollision(player, shelvBot)) {
        // Calcular superposición en los ejes X e Y
        let overlapX = Math.max(0, Math.min(player.x + player.width, shelvBot.x + shelvBot.width) - Math.max(player.x, shelvBot.x));
        let overlapY = Math.max(0, Math.min(player.y + player.height, shelvBot.y + shelvBot.height) - Math.max(player.y, shelvBot.y));

        // Ajustar la posición horizontal y vertical del jugador para evitar la colisión
        if (overlapX < overlapY) {
            // Ajustar la posición horizontal
            if (player.x < shelvBot.x) {
                player.x -= overlapX;
            } else {
                player.x += overlapX;
            }
        } else {
            // Ajustar la posición vertical
            if (player.y < shelvBot.y) {
                player.y -= overlapY;
            } else {
                player.y += overlapY;
            }
        }
        player.x = prevX;
        player.y = prevY;
    }

    if (checkCollision(player, closetBot)) {
        // Calcular superposición en los ejes X e Y
        let overlapX = Math.max(0, Math.min(player.x + player.width, closetBot.x + closetBot.width) - Math.max(player.x, closetBot.x));
        let overlapY = Math.max(0, Math.min(player.y + player.height, closetBot.y + closetBot.height) - Math.max(player.y, closetBot.y));

        // Ajustar la posición horizontal y vertical del jugador para evitar la colisión
        if (overlapX < overlapY) {
            // Ajustar la posición horizontal
            if (player.x < closetBot.x) {
                player.x -= overlapX;
            } else {
                player.x += overlapX;
            }
        } else {
            // Ajustar la posición vertical
            if (player.y < closetBot.y) {
                player.y -= overlapY;
            } else {
                player.y += overlapY;
            }
        }

        player.x = prevX;
        player.y = prevY;
    }

    if (checkCollision(player, sofaBot)) {
        // Calcular superposición en los ejes X e Y
        let overlapX = Math.max(0, Math.min(player.x + player.width, sofaBot.x + sofaBot.width) - Math.max(player.x, sofaBot.x));
        let overlapY = Math.max(0, Math.min(player.y + player.height, sofaBot.y + sofaBot.height) - Math.max(player.y, sofaBot.y));

        // Ajustar la posición horizontal y vertical del jugador para evitar la colisión
        if (overlapX < overlapY) {
            // Ajustar la posición horizontal
            if (player.x < sofaBot.x) {
                player.x -= overlapX;
            } else {
                player.x += overlapX;
            }
        } else {
            // Ajustar la posición vertical
            if (player.y < sofaBot.y) {
                player.y -= overlapY;
            } else {
                player.y += overlapY;
            }
            
        }

        player.x = prevX;
        player.y = prevY;
    }


}

function checkCollision(player, object) {
     // Calcular los límites del jugador
     const playerLeft = player.x;
     const playerRight = player.x + player.width;
     const playerTop = player.y + player.height / 2; // Usar la mitad de la altura del jugador
     const playerBottom = player.y + player.height;
 
     // Calcular los límites del objeto
     const objectLeft = object.x;
     const objectRight = object.x + object.width;
     const objectTop = object.y;
     const objectBottom = object.y + object.height;
 
     // Verificar si hay colisión en los ejes X e Y
     if (playerRight > objectLeft && playerLeft < objectRight && playerBottom > objectTop && playerTop < objectBottom) {
         return true; // Hay colisión
     } else {
         return false; // No hay colisión
     }
}

function keyDownHandler(event) {
    const keyPressed = event.key;
    switch(keyPressed) {
        case 'ArrowUp':
            player.dy = -player.speed;
            break;
        case 'ArrowDown':
            player.dy = player.speed;
            break;
        case 'ArrowLeft':
            player.dx = -player.speed;
            break;
        case 'ArrowRight':
            player.dx = player.speed;
            break;
    }
}

function keyUpHandler(event) {  //Ajusta el movimiento del jugador (2)
    const keyReleased = event.key;
    switch(keyReleased) {
        case 'ArrowUp':
        case 'ArrowDown':
            player.dy = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player.dx = 0;
            break;
    }
}

//INTERACCIÓN COFRE
// Función para verificar si el jugador está cerca del cofre
function playerCercaDeCofre() {
    const distance = Math.sqrt(Math.pow(player.x - cofre.x, 2) + Math.pow(player.y - cofre.y, 2));
    return distance < 100; // Define un radio de proximidad al cofre
}


function checkPassCofre(userInput){
    return userInput === cofrePass;
}

function manejarInputCofrePass(userInput){
    if(checkPassCofre(userInput)){
        //Abrir cofre
        alert('¡Contraseña correcta! Se ha abierto el cofre')
        abrirDialogo('Ya tengo la miniatura')
        cofreabierto = true;
    } else {
        alert('Constraseña incorrecta...')
    }
}


//*Calculos euclidianos
//INTERACCIÓN SOFÁ
function playerCercaSofa(){
    const distance = Math.sqrt(Math.pow(player.x - sofaBot.x, 2) + Math.pow(player.y - sofaBot.y, 2));
    return distance < 100;
}

//INTERACCIÓN ESTANTERÍA
function playerCercaShelv() {
    const shelfBotX = shelvBot.x + shelvBot.width / 2;
    const shelfBotY = shelvBot.y;
    const distance = Math.sqrt(Math.pow(player.x - shelfBotX, 2) + Math.pow(player.y - shelfBotY, 2));
    return distance < 150;
}

//INTERACCIÓN CAMA
function playerCercaCama() {
    const bedLeftX = bed.x;  // Coordenada X del lado izquierdo de la cama
    const bedY = bed.y + bed.height / 2;  // Coordenada Y del centro vertical de la cama
    const distance = Math.sqrt(Math.pow(player.x - bedLeftX, 2) + Math.pow(player.y - bedY, 2));
    return distance < 110;  // Ajusta el radio según sea necesario
}


document.addEventListener('keydown', keyDownHandler); //'Escucha' el evento 'keydown'. Es decir, llama keyDownHandler cada vez que se pulsa una tecla
document.addEventListener('keyup', keyUpHandler); //Permite que se llame la función keyUpHandler cada vez que se suelta una tecla del teclado

document.addEventListener('keydown', function(event){ //Se encarga de escuchar si el personaje está cerca del cofre para interactuar con él
    //Verificar player cerca de cofre y pulsando la tecla 'E'
    if(playerCercaDeCofre() && event.key === 'e' && cofreabierto === false){
        const userInput = prompt('Introduce la contraseña del cofre:')
        
        manejarInputCofrePass(userInput);   //Verificar contraseña cofre
    }
})
document.addEventListener('keydown', function(event){   //Interactuar con el sofá
    if(playerCercaSofa() && event.key === 'e' && llaveCuartoEncontrada === false){
        abrirDialogo('Rayos! ¿Qué hace aquí la llave de la habitación?')
        abrirDialogo('Has obtenido la llave de la habitación')
        llaveCuartoEncontrada = true;
    } else if (playerCercaSofa() && event.key === 'e' && llaveCuartoEncontrada === true){
        abrirDialogo('Aquí solo quedan migas y pelusillas...')
    }
});

document.addEventListener('keydown', function(event){   //Interactuar con la estantería/librería
    if(playerCercaShelv() && event.key === 'e'){
        abrirDialogo('Entre otros libros hay una biografía:\n\nHoward Phillips Lovecraft \n(Providence, 20 de agosto de 1890  -  ' +
            'Providence, 15 de marzo de 1937),\nmás conocido como H. P. Lovecraft.')
    }
});

document.addEventListener('keydown', function(event){   //Interactuar con la cama
    if(playerCercaCama() && event.key === 'e' && walkieEncontrado === false){
        setTimeout(function() {
            abrirDialogo('Aquí está el walkie');
        }, 5); //Retraso para mostrar el primer diálogo y que no se superpongan
        setTimeout(function() {
            abrirDialogo('Aquí Casper. Cambio');
        }, 1000); //Retraso para mostrar el primer diálogo y que no se superpongan
        setTimeout(function() {
            cerrarDialogo();
            abrirDialogo2('Si que has tardado en contestar tío');    
        }, 3000);
        setTimeout(function() {
            cerrarDialogo2();
            abrirDialogo('...');    
        }, 5000);
        setTimeout(function() {
            cerrarDialogo();
            abrirDialogo2('...');    
        }, 7000);
        setTimeout(function() {
            cerrarDialogo();
            abrirDialogo2('¿Estás ahí Casper?');    
        }, 9000);
        setTimeout(function() {
            cerrarDialogo2();
            abrirDialogo('Tienes que decir "Cambio" al finalizar. Cambio');    
        }, 11000);
        setTimeout(function() {
            cerrarDialogo();
            abrirDialogo2('... Cambio ...');    
        }, 13000);
        setTimeout(function() {
            cerrarDialogo2();
            abrirDialogo('Lo siento, me he quedado dormido en el sofá y no encontraba el walkie. Cambio');    
        }, 15000);
        setTimeout(function() {
            cerrarDialogo();
            abrirDialogo2('No olvides traer la miniatura del Demogorgon');    
        }, 17500);
        setTimeout(function() {
            cerrarDialogo2();
            abrirDialogo('...');    
        }, 19000);
        setTimeout(function() {
            cerrarDialogo();
            abrirDialogo2('...caaaambio');    
        }, 20000);
        setTimeout(function() {
            cerrarDialogo2();
            abrirDialogo('La miniatura. Casi la olvidaba. Enseguida voy a tu casa. Cambio')    
        }, 22000);
        setTimeout(function() {
            cerrarDialogo();
            abrirDialogo2('Aquí te esperamos. Corto');    
        }, 26000);
        setTimeout(function() {
            cerrarDialogo2();
            abrirDialogo('¿Dónde dejé la miniatura?')    
        }, 28000);
        setTimeout(function(){
            cerrarDialogo();
        }, 30000);
        walkieEncontrado = true;
    } else if(playerCercaCama() && event.key === 'e' && walkieEncontrado === true){
        abrirDialogo('Empieza el día haciendo tu cama y ya habrás cumplido tu primer objetivo diario :)')
    }
});

document.addEventListener('keydown', function(event) {
    
    // Verificar si player está dentro del rango de coordenadas de la puerta
    if ((player.x >= minX  && player.x <= maxX  && player.y >= minY  && player.y <= maxY ) && event.key === 'e' && walkieEncontrado === false){
        abrirDialogo('Necesito el walkie antes de irme...');
        

    } else if ((player.x >= minX  && player.x <= maxX  && player.y >= minY  && player.y <= maxY ) && event.key === 'e' && cofreabierto === false){
        abrirDialogo('No puedo irme sin la miniatura...');

    } else if ((player.x >= minX  && player.x <= maxX  && player.y >= minY  && player.y <= maxY ) && event.key === 'e' && llaveCuartoEncontrada === false){
        abrirDialogo('Está bloqueda. ¿Por qué tendré la estúpida costumbre de cerrar el cuarto con llaves...?')

    } else if ((player.x >= minX  && player.x <= maxX  && player.y >= minY  && player.y <= maxY ) && event.key === 'e' && walkieEncontrado === true
        && cofreabierto === true && llaveCuartoEncontrada === true){
        fundidoANegro();
    }
});

function fundidoANegro() {
    const objFundido = document.getElementById('blackIn');
    const textFin = document.getElementById('textoFin');
    objFundido.style.opacity = '1';  // Cambia la opacidad del fondo negro a 1
    abrirDialogo('Fin de la demostración :)')
}

function abrirDialogo(msg){ //Abre el cuadro de diálogo
    mensaje.textContent = msg;
    dialogo.style.display = 'block';
}

function cerrarDialogo(){   //Cierra el cuadro de diálogo
    dialogo.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de keydown para cerrar el diálogo al presionar la tecla de espacio
    document.addEventListener('keydown', function(event) {
        if (event.key === ' ' && dialogo.style.display === 'block') {
            cerrarDialogo(); // Llama a la función para cerrar el diálogo
        }
    });
});

function abrirDialogo2(msg){ //Abre el cuadro de diálogo
    mensaje2.textContent = msg;
    dialogo2.style.display = 'block';
}

function cerrarDialogo2(){   //Cierra el cuadro de diálogo
    dialogo2.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de keydown para cerrar el diálogo al presionar la tecla de espacio
    document.addEventListener('keydown', function(event) {
        if (event.key === ' ' && dialogo2.style.display === 'block') {
            cerrarDialogo2(); // Llama a la función para cerrar el diálogo
        }
    });
});


function mostrarDialogoInicial() {
    abrirDialogo("Me he vuelto a quedar dormido en el sofá...\nCreo que hoy había quedado en hacer algo...\n(Bostezo)");
}

mostrarDialogoInicial(); 

function mostrarLlamadaWalkie(){
    abrirDialogo2("Casper... Casper... Me recibes?")
}
 
const intervaloDialogo = setInterval(function() {
    if (!walkieEncontrado) {
        mostrarLlamadaWalkie();
    } else {
        clearInterval(intervaloDialogo); // Detener el intervalo cuando se cumple la condición
    }
}, 5000); // Mostrar el diálogo cada 5 segundos (5000 milisegundos)



playerImg.onload = function(){
    update(); // Comienza el bucle del juego
};
