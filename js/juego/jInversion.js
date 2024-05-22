class Empresa{
    constructor(ingresos, margen, nAcciones, ratioPER){
        this._ingresos=ingresos;
        this._margen=margen;
        this._nAcciones=nAcciones;
        this._ratioPER=ratioPER;
    }
    //SETTERS & GETTERS
    get ingresos(){
        return this._ingresos;
    }
    set ingresos(nuevoIngreso) {
        if (this._ingresos !== nuevoIngreso) {
          this._ingresos = nuevoIngreso;
        }
      }
    get margen(){
        return this._margen;
    }
    set margen(nuevoMargen){
        this.margen=nuevoMargen;
    }
    get nAcciones(){
        return this._nAcciones;
    }
    set nAcciones(nuevasAcciones){
        this._nAcciones=nuevasAcciones;
    }
    get ratioPER(){
        return this._ratioPER;
    }
    set ratioPER(nuevoPER){
        this._ratioPER=nuevoPER;
    }
    //METODOS
    calculaMargen(){
        let margenEmpresa=this._ingresos*(this._margen/100);
        return margenEmpresa;
    }
    calculaBenef(){
        let impuesto=0.2;
        let margenNumero=this._ingresos*(this._margen/100);
        let beneficio=margenNumero*(1-impuesto);
        return beneficio;
    }
    calculaEPS(){
        let impuesto=0.2;
        let margenNumero=this._ingresos*(this._margen/100);
        let beneficio=margenNumero*(1-impuesto);
        let eps=beneficio/this._nAcciones;
        eps=parseFloat(eps.toFixed(2)); //Al usar toFixed se convierte en una cadena y uso el parseFloat para volver a convertirlo en nº
        return eps;
    }
    calculaPrecioAccion(){
        let impuesto=0.2;
        let margenNumero=this._ingresos*(this._margen/100);
        let beneficio=margenNumero*(1-impuesto);
        let precioAcc=(beneficio/this._nAcciones)*this._ratioPER;
        precioAcc=parseFloat(precioAcc.toFixed(2));
        return precioAcc;
    }
}
//Creación datos de las empresas:
const e1=new Empresa(plantillaGeneraIngresos(),plantillaGeneraMargen(),plantillaGeneraAcciones(),plantillaGeneraPER());
const e2=new Empresa(plantillaGeneraIngresos(),plantillaGeneraMargen(),plantillaGeneraAcciones(),plantillaGeneraPER());
const e3=new Empresa(plantillaGeneraIngresos(),plantillaGeneraMargen(),plantillaGeneraAcciones(),plantillaGeneraPER());
const e4=new Empresa(plantillaGeneraIngresos(),plantillaGeneraMargen(),plantillaGeneraAcciones(),plantillaGeneraPER());
const e5=new Empresa(plantillaGeneraIngresos(),plantillaGeneraMargen(),plantillaGeneraAcciones(),plantillaGeneraPER());

//CREACIÓN ALEATORIA DE LOS DATOS PARA LA CREACIÓN DE LAS EMPRESAS.
function plantillaGeneraIngresos(){
    let min=15;
    let max=100;
    let numRamdom=Math.random()*(max-min)+min;
    let nIntRamdom=Math.floor(numRamdom);
    return nIntRamdom;
}
function plantillaGeneraMargen(){
    let min=5;
    let max=50;
    let margenRandom=Math.random()*(max-min)+min;
    let intMargenRandom=Math.floor(margenRandom);
    return intMargenRandom;
}
function plantillaGeneraAcciones(){
    let min=4;
    let max=30;
    let accRandom=Math.random()*(max-min)+min;
    let intAccRandom=Math.floor(accRandom);
    return intAccRandom;
}
function plantillaGeneraPER(){
    let minPER=3;
    let maxPER=50;
    let perRandom=Math.random()*(maxPER-minPER)+minPER;
    let intPerRandom=Math.floor(perRandom)
    return intPerRandom;
}

//Guardar las reglas para mostrarlas cada vez que pulse el botón Reglas.
const contenidoInicial = document.getElementById('resumenInfoEmpresa').innerHTML;

function muestraInfor(parametro){
    let eligeInfor=document.getElementById(parametro).value;
    console.log(eligeInfor);
    switch(eligeInfor){
        case "0":
            reglas();
            break;
        case "1":
            muestraE1(); 
            break;
        case "2":
            muestraE2();
            break;
        case "3":
            muestraE3();
            break;
        case "4":
            muestraE4();
            break;
        case "5":
            muestraE5();
            break;
    }
}

//Se muestran las reglas.
function reglas(){
    document.getElementById('resumenInfoEmpresa').innerHTML = contenidoInicial;
}

//Se muestran los datos de la empresa1.
function muestraE1(){
    const ingresosE1=e1.ingresos;
    const margenPorcentE1=e1.margen;
    const benefE1=e1.calculaBenef();
    const epsE1=e1.calculaEPS();
    const perE1=e1.ratioPER;
    const precioE1=e1.calculaPrecioAccion();
    //Muestra los datos:
    let textoE1=document.getElementById('resumenInfoEmpresa');
    textoE1.textContent="";//Se vacía el div donde están contenidas las reglas para añadir los datos empresa1
    let datosE1=document.createTextNode("Datos Financieros de la empresa 1");
    textoE1.appendChild(datosE1);
    textoE1.appendChild(document.createElement("br"));
    //Ingresos:
    let textoIngresos=document.createTextNode("Ingresos: " + ingresosE1);
    textoE1.appendChild(textoIngresos);
    textoE1.appendChild(document.createElement("br"));
    //Margen operativo:
    let textoMargPorcent=document.createTextNode("Margen operativo: " + margenPorcentE1 + "%");
    textoE1.appendChild(textoMargPorcent);
    textoE1.appendChild(document.createElement("br"));
    //EPS:
    let textoEPSE1=document.createTextNode("Beneficio por acción: " + epsE1);
    textoE1.appendChild(textoEPSE1);
    textoE1.appendChild(document.createElement("br"));
    //Precio accion:
    let textoPrecio=document.createTextNode("Precio acción: " + precioE1);
    textoE1.appendChild(textoPrecio);
    textoE1.appendChild(document.createElement("br"));
    //PER
    let textoPerE1=document.createTextNode("Ratio PER: " + perE1);
    textoE1.appendChild(textoPerE1);
}

function muestraE2(){
    const ingresosE2=e2.ingresos;
    const margenPorcentE2=e2.margen;
    const benefE2=e2.calculaBenef();
    const epsE2=e2.calculaEPS();
    const perE2=e2.ratioPER;
    const precioE2=e2.calculaPrecioAccion();
    //Muestra los datos
    let textoE2=document.getElementById('resumenInfoEmpresa');
    textoE2.textContent="";//Se vacía el div donde están contenidas las reglas para añadir los datos empresa2
    let datosE2=document.createTextNode("Datos Financieros de la empresa 2");
    textoE2.appendChild(datosE2);
    textoE2.appendChild(document.createElement("br"));
    //Ingresos
    let textoIngresos=document.createTextNode("Ingresos: " + ingresosE2);
    textoE2.appendChild(textoIngresos);
    textoE2.appendChild(document.createElement("br"));
    //Margen operativo
    let textoMargenPorc2=document.createTextNode("Margen operativo: " + e2.margen + "%");
    textoE2.appendChild(textoMargenPorc2);
    textoE2.appendChild(document.createElement("br"));
    //EPS:
    let textoEPSE2=document.createTextNode("Beneficio por acción: " + e2.calculaEPS());
    textoE2.appendChild(textoEPSE2);
    textoE2.appendChild(document.createElement("br"));
    //Precio accion:
    let textoPrecioE2=document.createTextNode("Precio acción: " + e2.calculaPrecioAccion());
    textoE2.appendChild(textoPrecioE2);
    textoE2.appendChild(document.createElement("br"));
    //PER
    let textoPerE2=document.createTextNode("Ratio PER: " + e2.ratioPER);
    textoE2.appendChild(textoPerE2);
}

function muestraE3(){
    //Muestra los datos
    let textoE3=document.getElementById('resumenInfoEmpresa');
    textoE3.textContent="";//Se vacía el div donde están contenidas las reglas para añadir los datos empresa2
    let datosE3=document.createTextNode("Datos Financieros de la empresa 3");
    textoE3.appendChild(datosE3);
    textoE3.appendChild(document.createElement("br"));
    //Ingresos
    let textoIngresosE3=document.createTextNode("Ingresos: " + e3.ingresos);
    textoE3.appendChild(textoIngresosE3);
    textoE3.appendChild(document.createElement("br"));
    //Margen operativo
    let textoMargenPorcE3=document.createTextNode("Margen operativo: " + e3.margen + "%");
    textoE3.appendChild(textoMargenPorcE3);
    textoE3.appendChild(document.createElement("br"));
    //EPS:
    let textoEPSE3=document.createTextNode("Beneficio por acción: " + e3.calculaEPS());
    textoE3.appendChild(textoEPSE3);
    textoE3.appendChild(document.createElement("br"));
    //Precio accion:
    let textoPrecioE3=document.createTextNode("Precio acción: " + e3.calculaPrecioAccion());
    textoE3.appendChild(textoPrecioE3);
    textoE3.appendChild(document.createElement("br"));
    //PER
    let textoPerE3=document.createTextNode("Ratio PER: " + e3.ratioPER);
    textoE3.appendChild(textoPerE3);
}

function muestraE4(){
    //Muestra los datos
    let textoE4=document.getElementById('resumenInfoEmpresa');
    textoE4.textContent="";//Se vacía el div donde están contenidas las reglas para añadir los datos empresa2
    let datosE4=document.createTextNode("Datos Financieros de la empresa 4");
    textoE4.appendChild(datosE4);
    textoE4.appendChild(document.createElement("br"));
    //Ingresos
    let textoIngresosE4=document.createTextNode("Ingresos: " + e4.ingresos);
    textoE4.appendChild(textoIngresosE4);
    textoE4.appendChild(document.createElement("br"));
    //Margen operativo
    let textoMargenPorcE4=document.createTextNode("Margen operativo: " + e4.margen + "%");
    textoE4.appendChild(textoMargenPorcE4);
    textoE4.appendChild(document.createElement("br"));
    //EPS:
    let textoEPSE4=document.createTextNode("Beneficio por acción: " + e4.calculaEPS());
    textoE4.appendChild(textoEPSE4);
    textoE4.appendChild(document.createElement("br"));
    //Precio accion:
    let textoPrecioE4=document.createTextNode("Precio acción: " + e4.calculaPrecioAccion());
    textoE4.appendChild(textoPrecioE4);
    textoE4.appendChild(document.createElement("br"));
    //PER
    let textoPerE4=document.createTextNode("Ratio PER: " + e4.ratioPER);
    textoE4.appendChild(textoPerE4);
}

function muestraE5(){
    //Muestra los datos
    let textoE5=document.getElementById('resumenInfoEmpresa');
    textoE5.textContent="";//Se vacía el div donde están contenidas las reglas para añadir los datos empresa2
    let datosE5=document.createTextNode("Datos Financieros de la empresa 5");
    textoE5.appendChild(datosE5);
    textoE5.appendChild(document.createElement("br"));
    //Ingresos
    let textoIngresosE5=document.createTextNode("Ingresos: " + e5.ingresos);
    textoE5.appendChild(textoIngresosE5);
    textoE5.appendChild(document.createElement("br"));
    //Margen operativo
    let textoMargenPorcE5=document.createTextNode("Margen operativo: " + e5.margen + "%");
    textoE5.appendChild(textoMargenPorcE5);
    textoE5.appendChild(document.createElement("br"));
    //EPS:
    let textoEPSE5=document.createTextNode("Beneficio por acción: " + e5.calculaEPS());
    textoE5.appendChild(textoEPSE5);
    textoE5.appendChild(document.createElement("br"));
    //Precio accion:
    let textoPrecioE5=document.createTextNode("Precio acción: " + e5.calculaPrecioAccion());
    textoE5.appendChild(textoPrecioE5);
    textoE5.appendChild(document.createElement("br"));
    //PER
    let textoPerE5=document.createTextNode("Ratio PER: " + e5.ratioPER);
    textoE5.appendChild(textoPerE5);
}

//Opción añadir una empresa:
function anyadeEmpresa(){
    //Devuelve una lista con todos los elementos que coinciden con .seleccionEmpresa
    let divEligeEmpresa = document.querySelectorAll('.seleccionEmpresa');
    //Almacena los elementos que coinciden, lo hago para Limitar la creación de estos divs a 4.
    if(divEligeEmpresa.length<4){ 
        //Se crea un nuevo div para la nueva elección del usuario 
        let nuevoDiv=document.createElement('div');
        nuevoDiv.className='seleccionEmpresa';
        //Vamos a crear el select de esta nueva elección.
        let nuevoSelect=document.createElement('select');
        nuevoSelect.innerHTML= `<option value="1">Empresa 1</option>
        <option value="2">Empresa 2</option>
        <option value="3">Empresa 3</option>
        <option value="4">Empresa 4</option>
        <option value="5">Empresa 5</option>`;
        //Añadimos el nuevoSelect al div creado
        nuevoDiv.appendChild(nuevoSelect);
        //Se crea el input:
        let nuevoInput=document.createElement('input');
        nuevoInput.id='eleccion' + (divEligeEmpresa.length+1) +'QEUR';
        nuevoInput.type='number';
        nuevoInput.placeholder='Introduzca la cantidad deseada.';
        //Añadimos el nuevoInput al div creado
         nuevoDiv.appendChild(nuevoInput);
         //Ya tenemos el contenido del nuevo div que queremos crear, ahora se mostrará:
         //obtiene el último elemento, -1 porque empieza en 0
         let ultimoDivSeleccionEmpresa=divEligeEmpresa[divEligeEmpresa.length-1]; 
         //Se añadirá tras el último elemento .seleccionEmpresa
         ultimoDivSeleccionEmpresa.parentNode.insertBefore(nuevoDiv, ultimoDivSeleccionEmpresa.nextSibling);
    }else{
        alert("Se ha alcanzado el límite de empresas a añadir.");
    }
}


function comprar(){
    //se crean dos arrays para almacenar los datos enviados por el usuario
    let arrEmpresasSelect=[];
    let arrDineroEmpr=[];
    //Guarda todos los divs con este nombre y los elementos internos
    let almacenaDivSelecEmpresa=document.querySelectorAll('.seleccionEmpresa');
    for(let i=0; i<almacenaDivSelecEmpresa.length; i++){
        //Guardamos el valor dado de select que hay en .seleccionEmpresa[i]
        arrEmpresasSelect[i]=almacenaDivSelecEmpresa[i].querySelector('select').value;
        //Guardamos el valor dado de input que hay en .seleccionEmpresa[i]
        arrDineroEmpr[i]=almacenaDivSelecEmpresa[i].querySelector('input').value;
    }
    let sumaDinero1000=0;
    //Comprobar que la cantidad introducida está entre 0 y 1000
    for(let z=0; z<arrDineroEmpr.length; z++){
        let dineroNumero=parseFloat(arrDineroEmpr[z]);
        sumaDinero1000=sumaDinero1000+dineroNumero;
    }
    //verificar que no se introduce la misma empresa.
    let verificaDistinto=false;
    let contador=0;
    for(let a=0; a<arrEmpresasSelect.length; a++){
        for(let b=0; b<arrEmpresasSelect.length; b++){
            if(arrEmpresasSelect[a]==arrEmpresasSelect[b]){
                contador++;
                if (contador>=2){
                    verificaDistinto=true;
                    break;
                }
            }
        }
        contador=0;
    }

    if(sumaDinero1000>0 && sumaDinero1000<=1000 && !verificaDistinto){
        //Creo un array para almacenar el precioJusto de cada empresa seleccionada
        let arrPJustoSelect=[];
        for(let j=0; j<arrEmpresasSelect.length; j++){
            arrPJustoSelect[j]=calculadoraResultado(arrEmpresasSelect[j], arrDineroEmpr[j]);
        }
        //Array almacena el nAcc a comprar con el dinero introducido
        let resultadoJusto=sumaDinero1000;
        for(let k=0; k<arrEmpresasSelect.length; k++){
            //todo ver si hay que sumar mil yo creo que no
            let numeroarrPJusto=parseFloat(arrPJustoSelect[k])
            resultadoJusto=resultadoJusto+numeroarrPJusto;
            resultadoJusto=parseFloat(resultadoJusto.toFixed(2));
        }
        mostrarResultado(resultadoJusto);
        mostrarImagen(resultadoJusto);
    }else{
        alert("¡Introduzca correctamente los datos!.");
    }
}


function calculadoraResultado(nEmpresa, qDinero){
    //Calculo del precio teórico debería tener según su margen de beneficios menos el precio asignado a la acción.
    if(nEmpresa==1){
        let nAccCompradas1=qDinero/e1.calculaPrecioAccion();
        let precioJustoE1;
        precioJustoE1=(e1.calculaEPS())*rangoValoracion(e1.margen);
        let resultadoE1=(precioJustoE1-e1.calculaPrecioAccion())*nAccCompradas1; //Si precioJusto>calculaPrecio Ganancias si es < pérdidas
        return resultadoE1;
    }else if(nEmpresa==2){
        let nAccCompradas2=qDinero/e2.calculaPrecioAccion();
        let precioJustoE2;
        precioJustoE2=(e2.calculaEPS())*rangoValoracion(e2.margen);
        let resultadoE2=(precioJustoE2-e2.calculaPrecioAccion())*nAccCompradas2; //Si precioJusto>calculaPrecio Ganancias si es < pérdidas
        return resultadoE2;
    }else if(nEmpresa==3){
        //Precio teórico accion empresa3
        let nAccCompradas3=qDinero/e3.calculaPrecioAccion();
        let precioJustoE3;
        precioJustoE3=(e3.calculaEPS())*rangoValoracion(e3.margen);
        let resultadoE3=(precioJustoE3-e3.calculaPrecioAccion())*nAccCompradas3; //Si precioJusto>calculaPrecio Ganancias si es < pérdidas
        return resultadoE3;
    }else if(nEmpresa==4){
        //Precio teórico accion empresa4
        let nAccCompradas4=qDinero/e4.calculaPrecioAccion();
        let precioJustoE4;
        precioJustoE4=(e4.calculaEPS())*rangoValoracion(e4.margen);
        let resultadoE4=(precioJustoE4-e4.calculaPrecioAccion())*nAccCompradas4; //Si precioJusto>calculaPrecio Ganancias si es < pérdidas
        return resultadoE4;
    }else if(nEmpresa==5){
        //Precio teórico accion empresa5
        let nAccCompradas5=qDinero/e5.calculaPrecioAccion();
        let precioJustoE5;
        precioJustoE5=(e5.calculaEPS())*rangoValoracion(e5.margen);
        let resultadoE5=(precioJustoE5-e5.calculaPrecioAccion())*nAccCompradas5; //Si precioJusto>calculaPrecio Ganancias si es < pérdidas
        return resultadoE5;
    }

}

function rangoValoracion(param){
    if(param>=30){
        let perJusto30=25;
        return perJusto30;
    }else if(param>=20 && param<30){
        let perJusto20=21;
        return perJusto20;
    }else if(param>=15 && param<20){
        let perJusto15= 18;
        return perJusto15;
    }else{
        let perJusto10=14;
        return perJusto10;
    }
}


function mostrarResultado(resultadoJ){
    //Guardamos el div resultadoNumero
    let escribirResultado=document.getElementById('resultadoNumero'); 
    if(resultadoJ>1000){
        escribirResultado.textContent=resultadoJ;
        escribirResultado.classList.add('ganancias');
        escribirResultado.classList.remove('perdidas');
    }else{
        escribirResultado.textContent=resultadoJ;
        escribirResultado.classList.add('perdidas');
        escribirResultado.classList.remove('ganancias');
    }
}

//Almacenamiento de las imágenes.
let imagenQuiebra='../../img/juego/juegoInversion/bankrupcy2.jpg';
let imagenPerderDinero='../../img/juego/juegoInversion/monigotePocasMonedas2.jpg';
let imagenBenef='../../img/juego/juegoInversion/fajoBilletes2.jpg';
let imagenMillonario='../../img/juego/juegoInversion/richMan2.jpg';

function mostrarImagen(param){
    resultadoImagen.innerHTML = "";
    let imagen=document.createElement('img');
    if(param<750){
        imagen.src=imagenQuiebra;
        //Ajustar el tamaño de la imagen al div que la contiene.
        imagen.style.width="95%";
        imagen.style.height="80%";
        document.getElementById('resultadoImagen').appendChild(imagen);
    }else if(param>=750&&param<=1000){
        imagen.src=imagenPerderDinero;
        imagen.style.width="95%";
        imagen.style.height="80%";
        document.getElementById('resultadoImagen').appendChild(imagen);
    }else if(param>1000 && param<1500){
        imagen.src=imagenBenef;
        imagen.style.width="95%";
        imagen.style.height="80%";
        document.getElementById('resultadoImagen').appendChild(imagen);
    }else{
        imagen.src=imagenMillonario;
        imagen.style.width="95%";
        imagen.style.height="80%";
        document.getElementById('resultadoImagen').appendChild(imagen);
    }
}

