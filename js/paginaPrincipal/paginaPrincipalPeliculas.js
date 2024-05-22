document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let counter = 0;
  const size = images[0].clientWidth;

  nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
      counter = 0; // Si estamos en la última imagen, volvemos a la primera
    } else {
      counter++;
    }
    moveCarousel(0.1); // Duración de la transición: 0.1 segundos
  });

  prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
      counter = images.length - 1;
    } else {
      counter--;
    }
    moveCarousel(0.1); // Duración de la transición: 0.1 segundos
  });

  function moveCarousel(transitionDuration) {
    carouselImages.style.transition = `transform ${transitionDuration}s ease-in-out`;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  setInterval(() => {
    if (counter >= images.length - 1) {
      counter = 0; // Si estamos en la última imagen, volvemos a la primera
    } else {
      counter++;
    }
    moveCarousel(3); // Duración de la transición automática: 3 segundos
  }, 6000);
});

