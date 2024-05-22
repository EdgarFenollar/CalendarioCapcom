/*Preguntas en array */
const quizData = [
    {
      pregunta: "1.¡Adivina la película!",
      a: "Spider-Man 2",
      b: "Shazam",
      c: "Thor:Ragnarok",
      d: "The Dark Knight",
      correcta: "d",
    },
    {
        pregunta: "2.¿Cuál es el nombre real de Batman?",
        a: "Harvey Dent",
        b: "Bruce Wayne",
        c: "James Gordon",
        d: "Alfred Pennyworth",
        correcta: "b",
    },
    {
        pregunta: "3.¿Quién es el villano principal de la película?",
        a: "El Joker",
        b: "El Acertijo",
        c: "El Espantapájaros",
        d: "Dos Caras",
        correcta: "a",
    },
    {
        pregunta: "4.¿Cuál es la profesión de Rachel Dawes?",
        a: " Reportera",
        b: "Fiscal del Distrito",
        c: "Policía",
        d: "Científica",
        correcta: "b",
    },
    {
        pregunta: "5.¿Qué arma utiliza el Joker para causar estragos en Gotham City?",
        a: "Gas del miedo",
        b: "Shazam",
        c: "Metralletas",
        d: "Explosivos",
        correcta: "d",
      },
      {
          pregunta: "6.¿Quién es el héroe que se sacrifica para salvar a Gotham?",
          a: "Batman",
          b: "Bruce Wayne",
          c: "Harvey Dent",
          d: "Alfred Pennyworth",
          correcta: "c",
      },
      {
          pregunta: "7.¿Qué frase icónica pronuncia el Joker en la película?",
          a: "'El crimen es la mejor broma'",
          b: "'Yo soy la venganza'",
          c: "'La ciudad me necesita'",
          d: "'Ha llegado el momento de la revolución'",
          correcta: "a",
      },
      {
          pregunta: "8.¿Cuál es el nombre del edificio donde se lleva a cabo la batalla final?",
          a: "Ayuntamiento de Gotham",
          b: "Torre Wayne",
          c: "Asilo Arkham",
          d: "Wayne Manor",
          correcta: "b",
      },
      {
        pregunta: "9.¿Quién es el responsable de la muerte de Rachel Dawes?",
        a: "Harvey Dent",
        b: "Alfred",
        c: "El Joker",
        d: "Batman",
        correcta: "a",
    },
    {
        pregunta: "10.¿Cuál es el mensaje principal que transmite la película?",
        a: "La importancia de la justicia",
        b: "La lucha entre el bien y el mal",
        c: "El poder de la esperanza",
        d: "La necesidad de héroes en la sociedad",
        correcta: "b",
    },
];

/*Declaraciones a usar*/
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

/*Funciones*/
cargarCuestionario();

/*cargar cuestionario*/
function cargarCuestionario() {
    deseleccionarRespuestas();

    const datosCuestionarioActual = quizData[currentQuiz];

    questionEl.innerText = datosCuestionarioActual.pregunta;
    a_text.innerText = datosCuestionarioActual.a;
    b_text.innerText = datosCuestionarioActual.b;
    c_text.innerText = datosCuestionarioActual.c;
    d_text.innerText = datosCuestionarioActual.d;
}

/*deselcionar respuestas*/
function deseleccionarRespuestas() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function obtenerSeleccionado() {
    let respuesta;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            respuesta = answerEl.id;
        }
    });
    return respuesta;
}
/*Resultado y recargar*/
submitBtn.addEventListener('click', () => {
    const respuesta = obtenerSeleccionado();
    if(respuesta) {
       if(respuesta === quizData[currentQuiz].correcta) {
           score++;
       }

       currentQuiz++;

       if(currentQuiz < quizData.length) {
           cargarCuestionario();
       } else {
           quiz.innerHTML = `
           <h2>Respondiste correctamente ${score}/${quizData.length} preguntas</h2>

           <button onclick="location.reload()">Recargar</button>
           `;
       }
    }
});
