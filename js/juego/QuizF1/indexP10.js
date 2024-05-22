window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('respuesta1')){
        evt.target.style.borderColor = 'rgb(99, 8, 8)';
    }
});
window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('respuesta2')){
        evt.target.style.borderColor = 'rgb(10, 72, 10)';
    }
});

window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('respuesta1')){
        evt.target.style.borderColor = 'rgb(10, 72, 10)';
    }
});
window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('respuesta2')){
        evt.target.style.borderColor = 'rgb(99, 8, 8)';
    }
});