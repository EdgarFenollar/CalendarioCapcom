const ctx1 = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx1, {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        label: 'Adjetivos',
        data: [10, 10, 10, 10, 10, 10, 10, 10 ],
        backgroundColor: [
          'rgb(255,138,0)',
          'rgb(255,239,0)',
          'rgb(2,166,32)',
          'rgb(69,150,208)',
          'rgb(117,42,123)',
          'rgb(255,255,255)',
          'rgb(0,0,0)',
          'rgb(255,0,0)',
                        
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