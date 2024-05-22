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
// Agrega más llamadas a agregarEfectoZoom para otros elementos de imagen si es necesario.

// script.js
document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("avisoCookies");
    var cookiesForm = document.getElementById("cookiesForm");

    // Comprobar si el usuario ya aceptó las cookies
    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
    }

    // Mostrar el aviso de cookies
    function mostrarAvisoCookies() {
        avisoCookies.style.display = "block";
    }

    // Ocultar el aviso de cookies y almacenar las preferencias del usuario
    function aceptarCookies(event) {
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
    }

    // Función para verificar si el usuario ya aceptó las cookies
    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    // Función para almacenar las preferencias del usuario en el almacenamiento local
    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }

    // Agregar evento de envío al formulario de cookies
    cookiesForm.addEventListener("submit", aceptarCookies);

    // Ocultar el aviso de cookies si ya han sido aceptadas
    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
});