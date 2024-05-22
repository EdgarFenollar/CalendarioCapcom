let caras = {
    c1: "../../img/pruebaEvaluable/pruebaJavi/d1.png",
    c2: "../../img/pruebaEvaluable/pruebaJavi/d2.png",
    c3: "../../img/pruebaEvaluable/pruebaJavi/d3.png",
    c4: "../../img/pruebaEvaluable/pruebaJavi/d4.png",
    c5: "../../img/pruebaEvaluable/pruebaJavi/d5.png",
    c6: "../../img/pruebaEvaluable/pruebaJavi/d6.png"
};
let numDadosP1 = 12;
let numDadosP2 = 12;
let puntosP1 = 0;
let puntosP2 = 0;

function lanzar(){
    let numDados = document.getElementById('player1').value;
    numDadosP1 -= numDados;
    let numDados2 = document.getElementById('player2').value;
    numDadosP2 -= numDados2;
    let cont1 = document.getElementById('container_dados1');
    let cont2 = document.getElementById('container_dados2');
    cont1.innerHTML = "";
    cont2.innerHTML = "";
    let total1 = 0, total2 = 0;
    for (let i = 0; i < numDados; i++){
        let dado = document.createElement('img');
        dado.setAttribute('src', randomDado());
        dado.setAttribute('class', 'dado');
        cont1.appendChild(dado);
        total1 = sumar(total1, dado.getAttribute('src'));
    }
    for (let i = 0; i < numDados2; i++){
        let dado = document.createElement('img');
        dado.setAttribute('src', randomDado());
        dado.setAttribute('class', 'dado');
        cont2.appendChild(dado);
        total2 = sumar(total2, dado.getAttribute('src'));
    }
    actualizarContador(total1, total2);
}

function actualizarContador(num1, num2){
    if (num1 > num2){
        puntosP1++;
    } else if (num2 > num1){
        puntosP2++;
    }
    document.getElementById('marcador').innerHTML = puntosP1 + ":" + puntosP2;
}

function sumar(total, atributo){
    //Sé que no es lo más elegante del mundo
    if (atributo == caras.c1) total += 1;
    else if (atributo == caras.c2) total += 2;
    else if (atributo == caras.c3) total += 3;
    else if (atributo == caras.c4) total += 4;
    else if (atributo == caras.c5) total += 5;
    else if (atributo == caras.c6) total += 6;
    return total;
}

function randomDado(){
    let shuffledDados = shuffle(Object.values(caras));
    return shuffledDados[0];
}

//Esta función la copié del juego, copiada de internet
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there are elements remaining to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}