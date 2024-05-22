function nuclear() {
  var texto = document.createElement('div');
  texto.innerHTML = '<img src=../../img/samvalentin/samvalentinEdgar/loading.gif>';
  texto.style.position = 'fixed';
  texto.style.top = '50%';
  texto.style.left = '50%';
  texto.style.padding = '40px';
  texto.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  texto.style.transform = 'translate(-50%, -50%)';
  texto.style.fontSize = '30px';
  texto.style.color = 'white';
  document.body.appendChild(texto);

  var tiempoRestante = 3;
  var cuentaRegresiva = setInterval(function() {
    if (tiempoRestante <= 0) {
      clearInterval(cuentaRegresiva);
      document.body.removeChild(texto);
      simularVirus();
    } else {
      texto.innerText = 'Iniciando virus en ' + tiempoRestante + ' segundos';
      tiempoRestante--;
    }
  }, 1000);
}

function simularVirus() {
  var virusContainer = document.createElement('div');
  virusContainer.style.position = 'fixed';
  virusContainer.style.top = '0';
  virusContainer.style.left = '0';
  virusContainer.style.width = '100%';
  virusContainer.style.height = '100%';
  virusContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  document.body.appendChild(virusContainer);

  var virusImages = [
    '../../img/samvalentin/samvalentinEdgar/meme6.webp',
    '../../img/samvalentin/samvalentinEdgar/meme7.jpg',
    '../../img/samvalentin/samvalentinEdgar/meme8.jpg',
    '../../img/samvalentin/samvalentinEdgar/meme9.jfif',
    '../../img/samvalentin/samvalentinEdgar/meme10.jfif',
    '../../img/samvalentin/samvalentinEdgar/meme11.jpg'
  ];

  var currentIndex = 0;

  var virusImage = document.createElement('img');
  virusImage.src = virusImages[currentIndex];
  virusImage.style.position = 'fixed';
  virusImage.style.top = '50%';
  virusImage.style.left = '50%';
  virusImage.style.transform = 'translate(-50%, -50%)';
  virusImage.style.zIndex = '9999';
  virusContainer.appendChild(virusImage);

  virusImage.addEventListener('click', function() {
    if (currentIndex < virusImages.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    virusImage.src = virusImages[currentIndex];
  });

  var exitButton = document.createElement('div');
  exitButton.innerText = 'X';
  exitButton.style.position = 'fixed';
  exitButton.style.top = '10px';
  exitButton.style.right = '10px';
  exitButton.style.color = 'red';
  exitButton.style.fontSize = '24px';
  exitButton.style.cursor = 'pointer';
  exitButton.style.zIndex = '9999';
  virusContainer.appendChild(exitButton);

  exitButton.addEventListener('click', function() {
    document.body.removeChild(virusContainer);
    document.body.removeChild(virusImage);
  });
}