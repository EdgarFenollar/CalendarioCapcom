let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const displacement = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + displacement + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

window.addEventListener('resize', function () {
    var originalWidth = 1920; // Tamaño original de la página en píxeles

    if (window.innerWidth === originalWidth) {
        // Restablecer al estado normal
        document.querySelector('.aside').style.flexBasis = '20%';
        document.querySelector('.main').style.flexBasis = '40%';
    }
});

function agregarEfectoZoom(elementoImagen) {
    elementoImagen.addEventListener('click', function () {
        // Crea un div para el efecto de zoom.
        const zoomedContainer = document.createElement('div');
        zoomedContainer.className = 'zoomed';
        // Crea una copia de la imagen para mostrar en el zoom.
        const zoomedImg = new Image();
        zoomedImg.src = elementoImagen.src;
        zoomedImg.alt = elementoImagen.alt;
        // Agrega la imagen al contenedor de zoom.
        zoomedContainer.appendChild(zoomedImg);
        // Agrega el contenedor de zoom al cuerpo del documento.
        document.body.appendChild(zoomedContainer);

        // Maneja el clic en la imagen ampliada para cerrarla.
        zoomedContainer.addEventListener('click', function () {
            document.body.removeChild(zoomedContainer);
        });
    });
}

// Llama a la función en elementos de imagen específicos.
const zoomableImage1 = document.getElementById('zoomableImage1');
agregarEfectoZoom(zoomableImage1);

const zoomableImage2 = document.getElementById('zoomableImage2');
agregarEfectoZoom(zoomableImage2);

const zoomableImage3 = document.getElementById('zoomableImage3');
agregarEfectoZoom(zoomableImage3);

const zoomableImage4 = document.getElementById('zoomableImage4');
agregarEfectoZoom(zoomableImage4);

const zoomableImage5 = document.getElementById('zoomableImage5');
agregarEfectoZoom(zoomableImage5);

const zoomableImage6 = document.getElementById('zoomableImage6');
agregarEfectoZoom(zoomableImage6);

const zoomableImage7 = document.getElementById('zoomableImage7');
agregarEfectoZoom(zoomableImage7);

const zoomableImage8 = document.getElementById('zoomableImage8');
agregarEfectoZoom(zoomableImage8);

const zoomableImage9 = document.getElementById('zoomableImage9');
agregarEfectoZoom(zoomableImage9);

const zoomableImage10 = document.getElementById('zoomableImage10');
agregarEfectoZoom(zoomableImage10);

const zoomableImage11 = document.getElementById('zoomableImage11');
agregarEfectoZoom(zoomableImage11);
// Agrega más llamadas a agregarEfectoZoom para otros elementos de imagen si es necesario.
