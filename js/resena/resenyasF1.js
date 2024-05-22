function mostrarPopup(){    
    alert("BIENVENIDO A LAS RESEÑAS DE LA FORMULA 1");
}
window.onload = function(){             //Estas líneas sirven para crear el mensaje popup que aparece nada mas acceder a la página
    mostrarPopup();
};
window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('titulo3')){
        evt.target.style.color = 'white';
    }
});
window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('titulo3')){
        evt.target.style.color = '#0066CC';
    }
});  
window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('titulo4')){
        evt.target.style.color = 'white';
    }
});
window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('titulo4')){
        evt.target.style.color = 'red';
    }
});  
window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('titulo5')){
        evt.target.style.color = 'white';
    }
});
window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('titulo5')){
        evt.target.style.color = 'lightblue';
    }
});  
window.addEventListener('mouseover', function(evt){
    if(evt.target.classList.contains('titulo6')){
        evt.target.style.color = 'grey';
    }
});
window.addEventListener('mouseout', function(evt){
    if(evt.target.classList.contains('titulo6')){
        evt.target.style.color = 'white';
    }
});
window.addEventListener('mouseover', function(evt){
    if(evt.target.classList.contains('titulo7')){
        evt.target.style.color = '#00f4ff';
    }
});
window.addEventListener('mouseout', function(evt){
    if(evt.target.classList.contains('titulo7')){
        evt.target.style.color = 'white';
    }
});