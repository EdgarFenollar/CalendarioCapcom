let currentQuestion = 0;
const questions = [
    "¿Te gustan las aventuras?",
    "¿Valoras la lealtad?",
    "¿Prefieres aprender cosas nuevas?",
    "¿Tienes ambición?",
    "¿Te consideras valiente?",
    "¿Disfrutas de la lectura?",
    "¿Prefieres trabajar en equipo?",
    "¿Eres astuto?",
    "¿Te interesa la magia?",
    "¿Tienes una gran ambición por el poder?",
];

const houseScores = {
    gryffindor: 0,
    hufflepuff: 0,
    ravenclaw: 0,
    slytherin: 0,
};

const sortingHat = document.getElementById("sorting-hat");
const questionsContainer = document.getElementById("questions");
const questionText = document.getElementById("question-text");
const resultContainer = document.getElementById("result");
const startButton = document.getElementById("start-button");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const houseChart = document.querySelector(".chart-wrap.horizontal");

function startSortingHat() {
    sortingHat.style.display = "none";
    questionsContainer.style.display = "block";
    showNextQuestion();
}

function showNextQuestion() {

    if (currentQuestion < questions.length) {
        questionText.innerText = questions[currentQuestion];
    } else {
        displayResult();
    }
}

function answerQuestion(isYes) {
    if (isYes) {
        const houseProbabilities = {
            gryffindor: 0.25,
            hufflepuff: 0.25,
            ravenclaw: 0.25,
            slytherin: 0.25,
        };

        if (currentQuestion === 0) {
            houseProbabilities.gryffindor += 0.1;
        } else if (currentQuestion === 1) {
            houseProbabilities.hufflepuff += 0.1;
        } else if (currentQuestion === 2) {
            houseProbabilities.ravenclaw += 0.1;
        } else if (currentQuestion === 3) {
            houseProbabilities.slytherin += 0.1;
        } else if (currentQuestion === 4) {
            houseProbabilities.gryffindor += 0.1;
        } else if (currentQuestion === 5) {
            houseProbabilities.hufflepuff += 0.1;
        }else if (currentQuestion === 6) {
            houseProbabilities.ravenclaw += 0.1;
        } else if (currentQuestion === 7) {
            houseProbabilities.slytherin += 0.1;
        } else if (currentQuestion === 8) {
            houseProbabilities.gryffindor += 0.1;
        } else if (currentQuestion === 9) {
            houseProbabilities.hufflepuff += 0.1;
        } else if (currentQuestion === 2) {
            houseProbabilities.ravenclaw += 0.1;
        }

        const houseNames = Object.keys(houseProbabilities);
        const random = Math.random();
        let cumulativeProbability = 0;

        for (const houseName of houseNames) {
            cumulativeProbability += houseProbabilities[houseName];
            if (random < cumulativeProbability) {
                houseScores[houseName] += 1;
                break;
            }
        }
    }

    currentQuestion++;
    showNextQuestion();
}






function displayResult() {
    const maxHouse = Object.keys(houseScores).reduce((a, b) => houseScores[a] > houseScores[b] ? a : b);
    const totalScore = houseScores.gryffindor + houseScores.hufflepuff + houseScores.ravenclaw + houseScores.slytherin;
    const percentages = {
        gryffindor: (houseScores.gryffindor / totalScore) * 100,
        hufflepuff: (houseScores.hufflepuff / totalScore) * 100,
        ravenclaw: (houseScores.ravenclaw / totalScore) * 100,
        slytherin: (houseScores.slytherin / totalScore) * 100,
    };

    document.querySelectorAll(".bar").forEach((bar) => {
        const houseName = bar.getAttribute("data-name").toLowerCase();
        bar.style.setProperty("--bar-value", percentages[houseName] + "%");
        bar.title = houseName.charAt(0).toUpperCase() + houseName.slice(1) + " " + percentages[houseName].toFixed(2) + "%";
    });

   // document.getElementById(maxHouse).style.borderWidth = "2px";  ESTE ERA EL ERROR
    resultContainer.innerHTML += `${maxHouse.charAt(0).toUpperCase() + maxHouse.slice(1)}`;
    resultContainer.style.display = "block";
    questionsContainer.style.display = "none";


    
}

startButton.addEventListener("click", startSortingHat);
yesButton.addEventListener("click", () => {
    answerQuestion(true);
});
noButton.addEventListener("click", () => {
    answerQuestion(false);
});
  