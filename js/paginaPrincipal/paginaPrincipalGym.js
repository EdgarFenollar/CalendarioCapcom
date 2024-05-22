//Ahora voy a relizar el codigo de JS para el tema del carrusel de imágenes.

//operacion: calcula el desplazamiento.
//counter: sigue el índice de la sección.
//widthImg: calcula el ancho de cada imagen en porcentaje.
//moveTo: desplazamiento de los botones izquiero y derecho
//El código de es un video pero se ha entendido bastante la verdad. https://youtu.be/mgoNOkFGmto


const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slide = document.querySelector("#slide"),
      slideSection = document.querySelectorAll(".slide-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / slideSection.length;

function moveToRight() {                        
    if (counter >= slideSection.length-1) {
        counter = 0;
        operacion = 0;
        slide.style.transform = `translate(-${operacion}%)`;
        slide.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slide.style.transform = `translate(-${operacion}%)`;
    slide.style.transition = "all ease .3s";
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = slideSection.length-1;
        operacion = widthImg * (slideSection.length-1)
        slide.style.transform = `translate(-${operacion}%)`;
        slide.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slide.style.transform = `translate(-${operacion}%)`;
    slide.style.transition = "all ease .3s" ;
}   