var resultOptions = [
    {
        title: 'Gryffindor!',
        desc: "<p>Gryffindor valora la valentía, la audacia, el valor y la caballerosidad. Su animal emblemático es el león y sus colores son el escarlata y el dorado. Minerva McGonagall es la jefa más reciente de Gryffindor. Sir Nicholas de Mimsy-Porpington, también conocido como 'Nick casi decapitado', era el fantasma de la casa. El fundador de la casa fue Godric Gryffindor. Gryffindor corresponde al elemento Fuego. La sala común está ubicada en una de las torres más altas de Hogwarts, la entrada está situada en el séptimo piso en el ala este del castillo y está custodiada por un retrato de La Dama Gorda. Ella permite la entrada si se le da la contraseña correcta, que se cambia numerosas veces durante el año escolar. Los Gryffindors famosos incluyen: Albus Dumbledore, Harry Potter y Celestina Warbeck. </p>"
    },
    {
        title: 'Hufflepuff!',
        desc: "<p>Hufflepuff, fundada por Helga Hufflepuff, valora el trabajo duro, la dedicación, la paciencia, la lealtad y el juego limpio más que una aptitud particular en sus miembros. Su animal emblemático es el tejón, y el Amarillo y el Negro son sus colores. Pomona Sprout fue la Jefa de Hufflepuff durante 1991 - 1998, Sprout dejó el puesto de Jefa de Hufflepuff y Profesora de Herbología en algún momento antes de 2017 y su sucesor para el puesto de Jefa de Hufflepuff se desconoce actualmente. El Fraile Gordo es su fantasma. Corresponde al elemento tierra. Los dormitorios y la sala común de Hufflepuff se encuentran en algún lugar del sótano, cerca de las cocinas del castillo. Se puede acceder tocando el barril dos desde abajo, en el medio de la segunda fila al ritmo de 'Helga'. Hufflepuff y se describe como un lugar acogedor y acogedor con cortinas amarillas, sillones gruesos y túneles subterráneos que conducen a los dormitorios, que tienen puertas perfectamente redondas, similares a las tapas de los barriles. Los Hufflepuffs famosos incluyen: Hengist de Woodcroft (fundador de Hogsmead), Newt Scamander y Artemisia Lufkin (primera ministra de magia).</p>"
    },
    {
        title: 'Ravenclaw!',
        desc: "<p>Ravenclaw valora la inteligencia, el conocimiento y el ingenio. Su animal emblemático es el águila, y sus colores son el azul y el bronce. El jefe de la casa de Ravenclaw en la década de 1990 era Filius Flitwick. El fantasma de Ravenclaw es la Dama Gris , que era hija de Rowena Ravenclaw, la fundadora de la casa. Ravenclaw corresponde al elemento aire. La sala común y los dormitorios de Ravenclaw están ubicados en una torre en el lado oeste del castillo. Los estudiantes de Ravenclaw deben responder un acertijo en lugar de dar una contraseña para ingresar a sus dormitorios. Este acertijo, sin embargo, puede ser respondido por personas que no sean Ravenclaw. Los Ravenclaws famosos incluyen: Gilderoy Lockheart, Ignatia Wildsmith (inventora del polvo Flú) y Garrick Ollivander.</p>"
    },
    {
        title: 'Slytherin!',
        desc: "<p>La casa Slytherin valora la ambición, la astucia y el ingenio y fue fundada por Salazar Slytherin. Su animal emblemático es la serpiente, y sus colores son el verde esmeralda y el plateado. El profesor Horace Slughorn fue el Jefe de Slytherin durante el año 1997 - Año escolar 1998, reemplazando a Severus Snape, quien también reemplazó a Slughorn cuando se jubiló por primera vez hace varios años. El Barón Sangriento es el fantasma de la casa. Slytherin corresponde aproximadamente al elemento agua. Los dormitorios y la sala común de Slytherin son Se llega a través de una pared de piedra desnuda en las Mazmorras. La sala común de Slytherin se encuentra debajo del Lago Negro. Es una habitación subterránea larga y baja con paredes de piedra áspera y lámparas plateadas que cuelgan del techo. Los Slytherins famosos incluyen: Merlín, Tom Riddle y Dolores Umbridge."
    }
];


var quizSteps = $('#quizzie .quiz-step'), totalScore = 0;
quizSteps.each(function () {
    var currentStep = $(this), ansOpts = currentStep.children('.quiz-answer');
    ansOpts.each(function () {
        var eachOpt = $(this);
        eachOpt[0].addEventListener('click', check, false);
        function check() {

            var $this = $(this), value = $this.attr('data-quizIndex'), answerScore = parseInt(value);
            if (currentStep.children('.active').length > 0) {
                var wasActive = currentStep.children('.active'), oldScoreValue = wasActive.attr('data-quizIndex'), oldScore = parseInt(oldScoreValue);
                currentStep.children('.active').removeClass('active');
                $this.addClass('active');
                totalScore -= oldScoreValue;
                totalScore += answerScore;
                calcResults(totalScore);
            } else {
                $this.addClass('active');
                totalScore += answerScore;
                calcResults(totalScore);
                updateStep(currentStep);
            }
        }
    });
});
function updateStep(currentStep) {
    if (currentStep.hasClass('current')) {
        currentStep.removeClass('current');
        currentStep.next().addClass('current');
    }
}
function calcResults(totalScore) {
    if (quizSteps.find('.active').length == quizSteps.length) {
        var resultsTitle = $('#results h1'), resultsDesc = $('#results .desc');
        var lowestScoreArray = $('#quizzie .low-value').map(function () {
            return $(this).attr('data-quizIndex');
        });
        var minScore = 0;
        for (var i = 0; i < lowestScoreArray.length; i++) {
            minScore += parseInt(lowestScoreArray[i]);
        }
        var highestScoreArray = $('#quizzie .high-value').map(function () {
            return $(this).attr('data-quizIndex');
        });
        var maxScore = 0;
        for (var i = 0; i < highestScoreArray.length; i++) {
            maxScore= maxScore + parseInt(highestScoreArray[i]);
        }
        var range = maxScore - minScore;
        var numResults = resultOptions.length, interval = range / (numResults - 1), increment = '', n = 0;
        while (n < numResults) {
            increment = minScore + interval * n;
            if (totalScore <= increment) {
                resultsTitle.replaceWith('<h1>' + resultOptions[n].title + '</h1>');
                resultsDesc.replaceWith('<p class=\'desc\'>' + resultOptions[n].desc + '</p>');
                return;
            } else {
                n++;
            }
        }
    }
}