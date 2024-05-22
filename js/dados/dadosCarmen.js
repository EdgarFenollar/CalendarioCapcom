let sumaJugador1=0;
let sumaJugador2=0;
let contJugador1=0;
let contJugador2= 0;

function dadoRandom(identificador){
    let jugador = document.getElementById(`numero${identificador}`);
    let salida = document.getElementById(`salida${identificador}`);
    let sumaDados = 0;
    salida.innerHTML="";

    for(let i = 1; i <= jugador.value; i++){

        let result = Math.floor(Math.random()*6)+1;
        sumaDados += result

        let imagenDD = document.createElement("img");
        imagenDD.src = "../../img/dados/d" + result + ".png";
        imagenDD.width= "60";
        imagenDD.height= "60";
        salida.appendChild(imagenDD);
    }

    if(identificador=="DadoRandom1"){
        sumaJugador1=sumaDados;
    }else{
        sumaJugador2=sumaDados;
    }
}
 
function ganador(){
	var result = "";
  console.log("dado1-" + sumaJugador1)
  console.log("dado2-" + sumaJugador2)
  
    if(sumaJugador1 > sumaJugador2){
        alert('JUGADOR 1 gana 1 punto');
        contJugador1++;
    }else if(sumaJugador1 < sumaJugador2){
        alert('JUGADOR 2 gana 1 punto');
        contJugador2++;
    }else{
        alert('EMPATE')
    }
 
    if (contJugador1 == 2){
        alert('Gana el jugador 1');
    }else if(contJugador2 == 2){
        alert('Gana el jugador 2');
    }
}

