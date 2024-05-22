function redirigir(url) {
    openInNewTab(url);
}
function openInNewTab(url) {
    window.open(url, '_blank');
}
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const btnAntes = document.querySelector(".botonAntes");
    const btnDespues = document.querySelector(".botonDespues");
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    const intervalTime = 3000;
    let slideInterval;

    function startSlide() {
        slideInterval = setInterval(SigSlide, intervalTime);
      }

    function pauseSlide() {
        clearInterval(slideInterval);
    }

    function VeHastaSlide(index) {
        slider.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
      }
    function SigSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        VeHastaSlide(currentIndex);
    }
    function AntSlide() {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = slides.length - 1;
        }
        VeHastaSlide(currentIndex);
    }
    btnDespues.addEventListener("click", function() {
        SigSlide();
        pauseSlide();
        startSlide();
    });      
    btnAntes.addEventListener("click", function() {
        AntSlide();
        pauseSlide();
        startSlide();
    });     
    startSlide();
});

document.addEventListener("DOMContentLoaded", function() {
    let counterValue = localStorage.getItem("visits") || 0;
    counterValue++;
    localStorage.setItem("visits", counterValue);
    document.querySelector(".counter").innerText = counterValue;
});
