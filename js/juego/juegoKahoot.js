let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;

window.onload = function () {
  base_preguntas = readText("../../baseDatos/preguntas.json");
  interprete_bp = JSON.parse(base_preguntas); /* Es una fase de inicialización de los archivos,recomendable link:https://es.javascript.info/onload-ondomcontentloaded*/
  escogerPreguntaAleatoria();
};

let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"), /* Declaramos nuestras posibles opciones */
  select_id("btn3"),
  select_id("btn4")
];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;

function escogerPreguntaAleatoria() {
  let n;
  if (preguntas_aleatorias) {                             /* Creamos la función de hacer que las preguntas se muestren de forma aleatoria */
    n = Math.floor(Math.random() * interprete_bp.length);  
  } else {
    n = 0;
  }

  while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
    }
    if (npreguntas.length == interprete_bp.length) {
      /* Reinicio de juego */
      if (mostrar_pantalla_juego_términado) {
        swal.fire({/* Al finalizar mostrará el resultado total. */
          title: "Juego finalizado",
          text:      /* Resultado de los acertijos junto a la cantidad de preguntas, este saldrá en forma de gif de la librería */
            "Puntuación: " + preguntas_correctas + "/" + (preguntas_hechas - 1),
          icon: "success"
        });
      }
      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0 /* Hacemos que se resetee el juego al finalizar. */
        preguntas_hechas = 0
      }
      npreguntas = [];
    }
  }
  npreguntas.push(n);
  preguntas_hechas++; /* Contador de preguntas totales del cuestionario */
  escogerPregunta(n);
}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n;
  let pc = preguntas_correctas;             /* En toda esta función lo que hacemos es asignar valores por id, agregamos la edición de estilos de que si la pregunta mostrada tiene imagen esta cambie su estilo a uno menos altura y ancho. */
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
  } else {
    select_id("puntaje").innerHTML = "";
  }

  style("foto").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta);
  if (pregunta.foto) {
    select_id("foto").setAttribute("src", pregunta.foto);
    style("foto").height = "200px";
    style("foto").width = "100%";
  } else {
    style("foto").height = "0px";
    style("foto").width = "0px";
    setTimeout(() => {
      select_id("foto").setAttribute("src", "");
    }, 500);
  }
}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.solucion,                                   /* Lo que pasaba que sino creábamos esta función, es que se representaba siempre en la misma posición */
    pregunta.error1,
    pregunta.error2,
    pregunta.error3,
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  select_id("btn1").innerHTML = posibles_respuestas[0];
  select_id("btn2").innerHTML = posibles_respuestas[1];
  select_id("btn3").innerHTML = posibles_respuestas[2];
  select_id("btn4").innerHTML = posibles_respuestas[3];
}

let suspender_botones = false;

function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  if (posibles_respuestas[i] == pregunta.solucion) {
    preguntas_correctas++;
    btn_correspondiente[i].style.background = "lightGreen";/* Hacemos que a la cual sea la solucion sea de color verde, si no es cierto se pondrá de color rojo */
  } else {
    btn_correspondiente[i].style.background = "red";
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.solucion) {      /*Esta la hacemos para que  a la vez sea falsa , nos muestre la verdadera , para que el usuario sepa en que se ha equivocado y cual es la acertada */
      btn_correspondiente[j].style.background = "green";
      break;
    }
  }
  setTimeout(() => {
    reiniciar();                                            /* Hacemos un reset y hacemos que cambie de pregunta a los dos segundos. */
    suspender_botones = false;
  }, 2000);                                                 /* El 2000 son =2s como setTimeOut funciona de esa manera */
}

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "white";   /* Este al resetearse va hacer que los botones vuelvan a su estado y color original. */
  }
  escogerPreguntaAleatoria();
}

function select_id(id) {      /* Selector de id, lo usamos para referirnos a los objetos con ids */
  return document.getElementById(id);
}

function style(id) {     /* Es para tratar el estilos de los objetos mediante su id */
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();    /* Es para tratar las rutas locales, ya que como no disponemos de server, tendremos que usar las nuestras locales. */
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}