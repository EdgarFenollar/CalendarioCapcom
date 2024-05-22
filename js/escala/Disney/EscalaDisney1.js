const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        label: 'Personajes',
        data: [ 5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        backgroundColor: [
          //Escala Orange
          'rgb(250,125,1)',
          'rgb(223,131,39)',
          'rgb(218,145,32)',
          'rgb(255,255,255)',//espacio en blanco
          //Escala Yellow
          'rgb(255,239,0)',
          'rgb(228,217,37)',
          'rgb(229,219,60)',
          'rgb(231,223,95)',
          'rgb(244,238,154)',
          'rgb(255,255,255)',//espacio en blanco
          //Escala Green
          'rgb(53,115,7)',
          'rgb(69,133,20)',
          'rgb(129,164,103)',
          'rgb(138,199,92)',
          'rgb(127,230,170)',
          'rgb(255,255,255)',//espacio en blanco
          //Escala Blue
          'rgb(123,186,190)',
          'rgb(37,167,196)',
          'rgb(120,199,216)',
          'rgb(113,136,203)',
          'rgb(176,189,228)',
          'rgb(135,160,233)',
          'rgb(107,75,228)',
          'rgb(255,255,255)',//espacio en blanco
          //Escala Purple
          'rgb(130,75,228)',
          'rgb(78,4,132)',
          'rgb(104,29,157)',
          'rgb(164,117,199)',
          'rgb(171,46,161)',
          'rgb(175,12,163)',
          'rgb(124,0,115)',
          'rgb(86,0,79)',
          'rgb(255,255,255)',//espacio en blanco
          //Escala White
          'rgb(255,255,255)',
          'rgb(255,255,255)',
          'rgb(255,255,255)',//espacio en blanco
          //Escala Black
          'rgb(7,2,30)',
          'rgb(30,2,18)',
          'rgb(46,6,44)',
          'rgb(30,2,18)',
          'rgb(30,2,18)',
          'rgb(34,28,33)',
          'rgb(255,255,255)',//espacio en blanco
          //Escala Red
          'rgb(67,15,9)',
          'rgb(199,21,0)',
          'rgb(145,51,40)',
          'rgb(174,56,42)',
          'rgb(145,51,40)',
          'rgb(199,21,0)',
          'rgb(206,51,33)',
          'rgb(228,74,56)',
          'rgb(255,255,255)',//espacio en blanco
      ],
      borderColor: [
          'rgb(0,0,0)',
          'rgb(0,0,0)',
          'rgb(0,0,0)',
      ],
        
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });