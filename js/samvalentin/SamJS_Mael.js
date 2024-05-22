var fotos = ["./../../img/samvalentin/samMael/sam1.png","./../../img/samvalentin/samMael/sam2.png","./../../img/samvalentin/samMael/sam3.png","./../../img/samvalentin/samMael/sam4.png","./../../img/samvalentin/samMael/sam5.png","./../../img/samvalentin/samMael/sam6.png","./../../img/samvalentin/samMael/sam7.png","./../../img/samvalentin/samMael/sam8.png","./../../img/samvalentin/samMael/sam9.png","./../../img/samvalentin/samMael/sam10.png",];
var video = document.getElementById("video");
var sonido = document.getElementById("sonido");
var boton = document.getElementById("boton");
var imagen = document.getElementById("img");
var contenedorImagen = document.getElementById("imagen");

boton.addEventListener("click", function reproducir(){
    var numAleatorio = Math.floor(Math.random()*10);
    video.play();
    imagen.src = fotos[numAleatorio];
    contenedorImagen.style.display = "block";
    boton.style.display= "none";
    console.log(numAleatorio);
});

video.addEventListener("ended", function reiniciar(){
    contenedorImagen.style.display = "none";
    boton.style.display = "block";
});