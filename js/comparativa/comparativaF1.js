function mostrarPopup(){    
    alert("EVOLUCIÓN DE LA FORMULA 1 A TRAVÉS DE LOS AÑOS");
}
window.onload = function(){             //Estas líneas sirven para crear el mensaje popup que aparece nada mas acceder a la página
    mostrarPopup();
};
window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('titulofila')){
        evt.target.style.color = 'red';
    }
});                                                //Estas líneas son las que hacen el efecto del cambio de color cuando haces mouseover y mouseout en el título de la fila    

window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('titulofila')){
        evt.target.style.color = 'white';
    }
});
window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('titulofila2')){
        evt.target.style.color = 'blue';
    }
});                                                     //Estas lineas sirven para hacer que cuando haces mouseover y mouseout sobre el titluo de la fila de la segunda lista se cambie el color de las letras

window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('titulofila2')){
        evt.target.style.color = 'white';
    }
});
window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('titulolista')){
        evt.target.style.color = 'gold';
    }
});                                                    //Estas líneas sirven para que cuando el cursor del ratón cuando pase por encima de las letras se cambie el color y que cuando se vaya vuelva a como estaba puesto antes

window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('titulolista')){
        evt.target.style.color = 'white';
    }
});
//En las lineas de este fichero de JavaScript, podemos ver el mensaje popup y los cambios de color en los titulos de lista y en los parrafos de los años, es decir, en los subtitulos de las listas