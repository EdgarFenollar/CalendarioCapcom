//Recarga Inicio desde Inicio
function reiniciarInicio(){
    location.reload();
}

function reiniciar(){
    window.location.href = "../InicioJuego.html";
}

//Sonido de boton
function sonidoBoton(){
    var sonidoClic = new Audio('../../../musica/juegoRol/botones/sonidoAtributo.wav');
    sonidoClic.play();
}

//Musica inicial
var reproduciendo = false;
function musica() {
  var musicaFondo = document.getElementById("musicaFondo");
  if (reproduciendo) {
    musicaFondo.pause();
    reproduciendo = false;
  } else {
    musicaFondo.play();
    reproduciendo = true;
  }
}

//Se declara el objeto del personaje
let personaje = {
    nombre: "",
    Fuerza: 0,
    Destreza: 0,
    Constitucion: 0,
    Inteligencia: 0,
    Sabiduria: 0,
    Carisma: 0,
    Vida: 0,
};

//Muestra la informacion en ventana flotante
function mostrarInformacion(event, mensaje) {
    var tooltip = document.getElementById('tooltip');
    tooltip.textContent = mensaje;
    tooltip.style.display = 'block';
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';
}

//Deja de mostrar la informacion en ventana flotante
function ocultarInformacion() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

//Funcion con la que se rellena la ficha a traves de los botones mas u menos de los atributos
function modificarAtributo(atributo, operacion) {
    let atributoSelec;
    switch(atributo) {
        case "Fuerza":
            atributoSelec = Fuerza;
            break;
        case "Destreza":
            atributoSelec = Destreza;
            break;
        case "Constitucion":
            atributoSelec = Constitucion;
            break;
        case "Inteligencia":
            atributoSelec = Inteligencia;
            break;
        case "Sabiduria":
            atributoSelec = Sabiduria;
            break;
        case "Carisma":
            atributoSelec = Carisma;
            break;
        default:
            alert("Atributo no válido");
            return;
    }
    let puntosRestantes = parseInt(document.getElementById("PuntosDisponibles").textContent);
    let valorAtributo = parseInt(document.getElementById("valor" + atributo).textContent);
    if (operacion === "sumar" && puntosRestantes > 0) {
        puntosRestantes--;
        atributoSelec++;
        valorAtributo++;
        personaje[atributo]++;
    } else if (operacion === "restar" && valorAtributo > 0) {
        puntosRestantes++;
        atributoSelec--;
        valorAtributo--;
        personaje[atributo]--;
    } else {
        alert("Operación no válida");
        return;
    }
    document.getElementById("PuntosDisponibles").textContent = puntosRestantes;
    document.getElementById("valor" + atributo).textContent = valorAtributo;
    console.log(personaje);
}

// Función para guardar los atributos del personaje en el almacenamiento local
function guardarAtributosPersonaje() {
    localStorage.setItem('personaje', JSON.stringify(personaje));
}

//Inicio del Juego
function comenzarAventura() {
    personaje.nombre = document.getElementById('Nombre').value;
    personaje.Fuerza = parseInt(document.getElementById('valorFuerza').textContent);
    personaje.Destreza = parseInt(document.getElementById('valorDestreza').textContent);
    personaje.Constitucion = parseInt(document.getElementById('valorConstitucion').textContent);
    personaje.Inteligencia = parseInt(document.getElementById('valorInteligencia').textContent);
    personaje.Sabiduria = parseInt(document.getElementById('valorSabiduria').textContent);
    personaje.Carisma = parseInt(document.getElementById('valorCarisma').textContent);
    personaje.Vida = parseInt(document.getElementById('valorCarisma').textContent);
    personaje.Vida = 4 + parseInt(document.getElementById('valorConstitucion').textContent);


    if (personaje.nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre antes de comenzar la aventura.");
        return;
    }

    guardarAtributosPersonaje();//Guarda la info del personaje

    window.location.href = 'Localizaciones/Necrolimbo.html';
}

//Función para cargar los atributos del personaje desde el almacenamiento local
function cargarAtributosPersonaje() {
    var personajeGuardado = localStorage.getItem('personaje');
    if (personajeGuardado) {
        personaje = JSON.parse(personajeGuardado);
    }

    console.log(personajeS)
}

//Carga los atributos 
function cargarAtributosPersonaje() {
    var personajeGuardado = localStorage.getItem('personaje');
    if (personajeGuardado) {
        personaje = JSON.parse(personajeGuardado);
        // Mostrar los atributos del personaje en el HTML
        document.getElementById('nombre').textContent = personaje.nombre;
        document.getElementById('fuerza').textContent = personaje.Fuerza;
        document.getElementById('destreza').textContent = personaje.Destreza;
        document.getElementById('constitucion').textContent = personaje.Constitucion;
        document.getElementById('inteligencia').textContent = personaje.Inteligencia;
        document.getElementById('sabiduria').textContent = personaje.Sabiduria;
        document.getElementById('carisma').textContent = personaje.Carisma;
        document.getElementById('vida').textContent = personaje.Vida;
    }
}

function verificarVida() {
    if (personaje.Vida <= 0) {
        // Si la vida del personaje es igual o menor que 0, realiza las acciones correspondientes
       mostrarMuertePersonaje();
    }
}

function mostrarMuertePersonaje() {
    // Mostrar la imagen de la muerte del personaje
    var muertePersonajeDiv = document.getElementById('muertePersonaje');
    muertePersonajeDiv.style.display = 'flex';

    // Reproducir el sonido de la muerte del personaje
    var sonidoMuerte = new Audio('../../../../musica/juegoRol/canciones/sonidoMuerte.mp3');
    sonidoMuerte.play();

    setTimeout(function() {
        reiniciar();
    }, 5000); // 5000 milisegundos = 5 segundos
}

//Ver el mejor atributo de daño
function mejorAtributo() {
    let mejorAtributo = { nombre: "", valor: -Infinity };
    
    // Compara los valores de Fuerza e Inteligencia y guarda el mayor
    if (personaje.Fuerza > personaje.Inteligencia) {
        mejorAtributo.nombre = "Fuerza";
        mejorAtributo.valor = personaje.Fuerza;
    } else {
        mejorAtributo.nombre = "Inteligencia";
        mejorAtributo.valor = personaje.Inteligencia;
    }
    
    return mejorAtributo;
}

function tirard20() {
    // Generar un número aleatorio entre 1 y 20 (resultado de un dado de 20 caras)
    var d20 = Math.floor(Math.random() * 20) + 1;
    // Devolver el total
    return d20;
}

//Primera pantalla

function caballero() {
    // Reducir la vida del personaje en una cierta cantidad
    personaje.Vida = 0;

    // Actualizar la visualización de la vida del personaje en la página HTML
    document.getElementById('vida').textContent = personaje.Vida;

    // Verificar si el personaje ha muerto
    verificarVida();
}

//Ir sitios
function lago(){
    window.location.href = 'Lago.html';
}

function irAfuerasCastillo(){
    window.location.href = 'AfuerasCastillo.html';
}

function irCastillo(){
    window.location.href = 'Castillo.html';
}

function irGodrick(){
    window.location.href = 'Godrick.html';
}


//Luchar contra el dragon
function lucharDragon() {
    // Obtener el valor del mejor atributo (excluyendo la constitución)
    let atributoAUsar = mejorAtributo(true).valor;
    // Calcular el resultado del enfrentamiento sumando el mejor atributo y el resultado del dado d20
    let resultado = atributoAUsar + tirard20();
    // Si el resultado es mayor que 15, el personaje tiene éxito en la lucha
    if (resultado > 15) {
        personaje.Fuerza += 5;
        // Mostrar un mensaje en pantalla informando sobre la obtención de la escama de dragón
        alert("¡Has derrotado al dragón y has obtenido una escama de dragón! Tu fuerza  aumenta en 5 puntos. Continuas tu camnino mas fuerte que nunca.");
        guardarAtributosPersonaje();
        window.location.href = 'Castillo.html';
    } else {
        // Si el resultado es 15 o menos, el personaje recibe daño y su vida disminuye en 7 puntos
        personaje.Vida -= 5;
        document.getElementById('vida').textContent = personaje.Vida;
        // Mostrar un mensaje en pantalla informando sobre la disminución de la vida
        alert("El dragón te ha infligido daño. Pierdes 5 puntos de vida. Vida restante: " + personaje.Vida);
        // Realizar otras acciones si el personaje falla en la lucha
        // Por ejemplo: mostrar un mensaje de derrota, disminuir recursos, etc.
        verificarVida();
    }
}


function huirDragon() {
    // Usamos la destreza del personaje para calcular la posibilidad de huir
    let atributoAUsar = personaje.Destreza;
    // Calcular el resultado del enfrentamiento sumando la destreza del personaje y el resultado del dado d20
    let resultado = atributoAUsar + tirard20();

    if (resultado >= 10) {
        // Si el resultado es mayor o igual a 10, el personaje logra huir exitosamente
        alert("¡Has huido del dragón con éxito!");
        window.location.href = 'Castillo.html';
    } else {
        // Si el resultado es menor que 10, el intento de huida falla y el personaje recibe daño
        personaje.Vida -= 5;
        document.getElementById('vida').textContent = personaje.Vida;
        // Mostrar un mensaje informando sobre el daño recibido
        alert("El dragón te ha infligido daño. Pierdes 5 puntos de vida. Vida restante: " + personaje.Vida);
        // Verificar si el personaje sigue con vida
        verificarVida();
    }
}

function abrirCofre() {
    // Generar un número aleatorio entre 1 y 20 para representar la tirada de sabiduría
    var tirada = tirard20();

    var resultadoTirada = tirada+personaje.Sabiduria;

    // Verificar si se supera la dificultad
    if (resultadoTirada >= 15) {
        alert("¡Has superado la dificultad y abierto el cofre. Encuentras un tomo de magia, aumenta tu inteligencia en 5 puntos, con la recompensa continuas al castillo");
        personaje.Inteligencia += 5;
        guardarAtributosPersonaje();
        irCastillo();
    } else {
        // Si no se supera la dificultad, reducir un punto de vida al personaje
        personaje.Vida -= 1;
        document.getElementById('vida').textContent = personaje.Vida;
        alert("El cofre se te resiste y te haces algo de daño intentandolo abrir. Pierdes 2 punto de vida. Vida restante: " + personaje.Vida);
        verificarVida();
    }
}


//Funciones para cambiar el fondo
function cambiarLago() {
    var mainElement = document.querySelector('main');
    mainElement.style.backgroundImage = "url(../../../../img/juego/JuegoRol/Fondos/fondoLago.jpg)";
}

function cambiarAfuerasCastillo() {
    var mainElement = document.querySelector('main');
    mainElement.style.backgroundImage = "url(../../../../img/juego/JuegoRol/Fondos/cofre.webp)";
}

function cambiarCastillo() {
    var mainElement = document.querySelector('main');
    mainElement.style.backgroundImage = "url(../../../../img/juego/JuegoRol/Fondos/stormVeil.webp)";
}

// Obtener el elemento del video, los botones y el contenedor del video
var video = document.getElementById('video');
var toggleSoundButton = document.getElementById('toggleSoundButton');
var skipButton = document.getElementById('skipButton');
var videoContainer = document.getElementById('videoContainer');
var contenidoPrincipal = document.getElementById('contenidoPrincipal');

// Función para alternar el sonido del video
function toggleSound() {
    if (video.muted) {
        video.muted = false; // Activar el sonido del video
        toggleSoundButton.textContent = 'Desactivar Sonido'; // Cambiar el texto del botón
    } else {
        video.muted = true; // Desactivar el sonido del video
        toggleSoundButton.textContent = 'Activar Sonido'; // Cambiar el texto del botón
    }
}

// Función para saltar el video
function skipVideo() {
    video.pause(); // Pausar la reproducción del video
    videoContainer.style.display = 'none'; // Ocultar el contenedor del video
    contenidoPrincipal.style.display = 'flex'; // Mostrar el resto del contenido del main
}

//Luchar contra godrick
var vidaGodrick = 100; // Inicialmente Godrick tiene 100 puntos de vida
var vidaMaximaGodrick = 100;

function actualizarBarraVidaGodrick() {
    var barraVidaGodrick = document.getElementById("vidaGodrick");
    var porcentajeVidaGodrick = (vidaGodrick / vidaMaximaGodrick) * 100; // Calcula el porcentaje de vida actual

    // Actualiza la anchura de la barra de vida
    barraVidaGodrick.style.width = porcentajeVidaGodrick + "%";
}

function lucharGodrick() {
    let atributoAUsar = mejorAtributo(true).valor;
    var dado20 = tirard20();

    var ataque = atributoAUsar + dado20;
    console.log(ataque);
    // Si el ataque es mayor que 20, restar esa cantidad de vida a Godrick
    if (ataque >= 20) {
        vidaGodrick -= ataque;
        alert("¡Has realizado un ataque devastador a Godrick y le has quitado " + ataque + " puntos de vida!");
    }
    // Si el ataque es menor que 15, Godrick le hará 1 punto de daño al jugador
    else if (ataque <= 15) {
        personaje.Vida -= 1;
        document.getElementById('vida').textContent = personaje.Vida;
        alert("¡Godrick contraataca y te inflige 1 punto de daño! Tu vida restante es: " + personaje.Vida);
    }
    // Si el ataque está entre 10 y 20, no pasa nada especial
    else {
        alert("Has atacado a Godrick pero no logras hacerle un daño significativo. ¡Sigue luchando!");
    }

    // Actualizar la barra de vida de Godrick después de cada ataque
    actualizarBarraVidaGodrick();

    // Verificar si Godrick sigue vivo
    if (vidaGodrick <= 0) {
        alert("¡¡¡¡Felicidades!!! Has derrotado a Godrick el Injertado");
        mostrarVictoria();
    }

    verificarVida();
}



//Rendirse ante grodrick
function rendirse() {
    // Mostrar el mensaje de rendición
    var rendirseDiv = document.getElementById('rendirse');
    rendirseDiv.style.display = 'block';

    // Ocultar el texto
    var opcionesDiv = document.getElementById('textoYElecciones');
    opcionesDiv.style.display = 'none';

    // Ocultar las opciones de elección
    var opcionesDiv = document.getElementById('opciones');
    opcionesDiv.style.display = 'none';

    // Ocultar la ficha
    var opcionesDiv = document.getElementById('infoPersonaje');
    opcionesDiv.style.display = 'none';
}

function mostrarVictoria() {
    // Mostrar la imagen de la muerte del personaje
    var victoriaJuego = document.getElementById('mensajeVic');
    victoriaJuego.style.display = 'flex';

    // Reproducir el sonido de la muerte del personaje
    var sonidoVictoria = new Audio('../../../../musica/juegoRol/canciones/victoria.mp3');
    sonidoVictoria.play();

    setTimeout(function() {
        reiniciar();
    }, 5000); // 5000 milisegundos = 5 segundos
}