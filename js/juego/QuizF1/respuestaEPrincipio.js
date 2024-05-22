function mostrarResultado(){
    alert('RESPUESTA INCORRECTA, VUELVE A INTENTARLO');
}
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón de inicio
    var btnInicio = document.getElementById('boton');

    // Agrega un evento de clic al botón de inicio
    btnInicio.addEventListener('click', function() {
        // Desplazamiento suave hacia arriba
        scrollToTopNew(500); // Se utiliza una función mejorada en su lugar

        // Cambia el color del botón al hacer clic
        btnInicio.style.backgroundColor = '#FFD700'; // Puedes ajustar el color según tus preferencias
    });

    // Función mejorada para desplazamiento suave hacia arriba
    function scrollToTopNew(duration) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

