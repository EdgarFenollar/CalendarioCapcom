let contador = 1;
let contador2 = 0;
let puntuacion = 0;
/* Los códigos comentados son simplemente las distintas formas que probé para hacer las animaciones y que no funcionaban */


/*const saltoMarte = document.getElementById("saltoMarte")
const saltarMarte=document.getElementById("saltarMarte");
let posy = 30;
let salto=-433;
let saltando=false;



function saltoMarte(){
    if (saltando){
        return;
    }

    saltando = true;
    const destino = posy-salto;

    const intervalo = setInterval(() => {
        if(posy > destino){
            posy -= 1;
            saltarMarte.style.top=posy+"px";
        }else{
            clearInterval (intervalo);
            saltando=false;
        }
    }, 10);
}


saltoMarte.addEventListener("Click", saltoMarte);*/


function aceptar() {
    setTimeout(function () {
        document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/espacio.jpg)";
    }, 200);
    setTimeout(function () {
        document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/marte.jpg)";
    }, 1200);
    setTimeout(function () {
        var texto2 = document.getElementById("pMarte");
        texto2.style.display = "flex";
    }, 1000);
    var div = document.getElementById("texto1");
    div.style.opacity = '0';
    setTimeout(function () {
        div.parentNode.removeChild(div);
    }, 1000);
    setTimeout(function () {
        var texto2 = document.getElementById("texto2");
        texto2.style.display = "flex";
    }, 1000);
}

/* Esta función cambia las imágenes y sustituyes los títulos de los planetas: */
function siguientePlaneta() {
    if (contador === 1) {
        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/espacio.jpg)";
        }, 200);

        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/jupiter.jpg)";
        }, 1200);

        setTimeout(function () {
            var texto2 = document.getElementById("pMarte");
            texto2.style.display = "none";
        });

        setTimeout(function () {
            var texto3 = document.getElementById("pJupiter");
            texto3.style.display = "flex";
        }, 1000);
        contador++;
    } else if (contador === 2) {
        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/espacio.jpg)";
        }, 200);

        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/saturno.jpg)";
        }, 1200);

        setTimeout(function () {
            var texto2 = document.getElementById("pJupiter");
            texto2.style.display = "none";
        });

        setTimeout(function () {
            var texto3 = document.getElementById("pSaturno");
            texto3.style.display = "flex";
        }, 1000);
        contador++;
    } else if (contador === 3) {
        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/espacio.jpg)";
        }, 200);

        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/neptuno.jpg)";
        }, 1200);

        setTimeout(function () {
            var texto2 = document.getElementById("pSaturno");
            texto2.style.display = "none";
        });

        setTimeout(function () {
            var texto3 = document.getElementById("pNeptuno");
            texto3.style.display = "flex";
        }, 1000);
        contador++;
    } else if (contador === 4) {
        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/espacio.jpg)";
        }, 200);

        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/venus.jpg)";
        }, 1200);

        setTimeout(function () {
            var texto2 = document.getElementById("pNeptuno");
            texto2.style.display = "none";
        });

        setTimeout(function () {
            var texto3 = document.getElementById("pVenus");
            texto3.style.display = "flex";
        }, 1000);
        contador++;
    } else if (contador === 5) {
        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/espacio.jpg)";
        }, 200);

        setTimeout(function () {
            document.getElementById("bd").style.backgroundImage = "url(../../img/juego/juegoSaltarin_Hilo/mercurio.webp)";
        }, 1200);

        setTimeout(function () {
            var texto2 = document.getElementById("pVenus");
            texto2.style.display = "none";
        });

        setTimeout(function () {
            var texto3 = document.getElementById("pMercurio");
            texto3.style.display = "flex";
        }, 1000);

        setTimeout(function () {
            var sp = document.getElementById("sp");
            sp.style.display = "none";
        });
    }
}

/* Se llama saltoMarte simplemente porque el primer salto que hace es en Marte, pero sirve para todos los planetas */
function saltoMarte() {
    let eleccion = document.getElementById('d1').value;

    if (contador2 === 0) {
        /*document.querySelector('.deAstronauta').style.animation='none';
        
        document.querySelector('.deAstronauta').style.animation='saltarMarte 1.5s ease-in 1s 1 nomal both';*/

        document.body.innerHTML = document.body.innerHTML.replace(/deAstronauta/g, 'deAstronauta2');
            

        var div = document.getElementById("Bocata");
        setTimeout(function () {
            div.parentNode.removeChild(div);
        }, 500);

        document.getElementById('elSalto').textContent = '120 cm';


        if (eleccion === 120 || eleccion >= 115 && eleccion <= 125) {
            puntuacion += 1;
        } else {
            puntuacion -= 0.5;
        }
        document.getElementById("puntuar").innerHTML = puntuacion;
        contador2++;

        document.querySelector('.deAstronauta').style.animation = saltarTierra;

    } else if (contador2 === 1) {

        document.body.innerHTML = document.body.innerHTML.replace(/deAstronauta2/g, 'deAstronauta3');
        document.getElementById('elSalto').textContent = '20 cm';


        if (eleccion === 20 || eleccion >= 15 && eleccion <= 25) {
            puntuacion += 1;
        } else {
            puntuacion -= 0.5;
        }
        document.getElementById("puntuar").innerHTML = puntuacion;
        contador2++;

    } else if (contador2 === 2) {
        document.body.innerHTML = document.body.innerHTML.replace(/deAstronauta3/g, 'deAstronauta4');

        document.getElementById('elSalto').textContent = '40 cm';


        if (eleccion === 40 || eleccion >= 35 && eleccion <= 45) {
            puntuacion += 1;
        } else {
            puntuacion -= 0.5;
        }
        document.getElementById("puntuar").innerHTML = puntuacion;
        contador2++;
    } else if (contador2 === 3) {
        document.body.innerHTML = document.body.innerHTML.replace(/deAstronauta4/g, 'deAstronauta5');

        document.getElementById('elSalto').textContent = '40 cm';


        if (eleccion === 40 || eleccion >= 35 && eleccion <= 45) {
            puntuacion += 1;
        } else {
            puntuacion -= 0.5;
        }
        document.getElementById("puntuar").innerHTML = puntuacion;
        contador2++;

    } else if (contador2 === 4) {
        document.body.innerHTML = document.body.innerHTML.replace(/deAstronauta5/g, 'deAstronauta6');

        document.getElementById('elSalto').textContent = '60 cm';


        if (eleccion === 60 || eleccion >= 55 && eleccion <= 65) {
            puntuacion += 1;
        } else {
            puntuacion -= 0.5;
        }
        document.getElementById("puntuar").innerHTML = puntuacion;
        contador2++;


    } else if (contador2 === 5) {
        document.body.innerHTML = document.body.innerHTML.replace(/deAstronauta6/g, 'deAstronauta7');

        document.getElementById('elSalto').textContent = '120 cm';


        if (eleccion === 120 || eleccion >= 115 && eleccion <= 125) {
            puntuacion += 1;
        } else {
            puntuacion -= 0.5;
        }
        document.getElementById("puntuar").innerHTML = puntuacion;
        if (puntuacion >= 3) {
            alert('¡HAS GANADO!');
        } else {
            alert('HAS PERDIDO : (');
            window.location.reload();
        }
    }


}

/* Para que el bocata se haga visible a los 3s */
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("Bocata").style.visibility = "visible";
    }, 3000);
});