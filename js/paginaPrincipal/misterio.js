const IMG_ARRAY = [
    "../../img/paginaPrincipal/misterio/Shoggoth_000.jpg",
    "../../img/paginaPrincipal/misterio/Shoggoth_001.JPG",
    "../../img/paginaPrincipal/misterio/Shoggoth_002.JPG",
    "../../img/paginaPrincipal/misterio/Shoggoth_003.JPG",
    "../../img/paginaPrincipal/misterio/Shoggoth_004.JPG",
];

var indiceImg = 0;
setInterval(changeImage, 5000);

function changeImage(){
    //Cambia imagen
    document.getElementById("ImagenSecuencial").style.backgroundImage = "url('" + IMG_ARRAY[indiceImg] + "')";
    //Incrementar imagen o volver a 0 si llega al final del array
    indiceImg = (indiceImg + 1) % IMG_ARRAY.length;
}


var flechaIzq = document.getElementById("flechaIzq");
var flechaDer = document.getElementById("flechaDer");
var cajaImagen = document.getElementById("ImagenSecuencial");

flechaIzq.addEventListener("click", function() {
    indiceImg = (indiceImg - 1 + IMG_ARRAY.length) % IMG_ARRAY.length;

    cajaImagen.style.backgroundImage = "url('" + IMG_ARRAY[indiceImg] + "')";
});

flechaDer.addEventListener("click", function() {
    indiceImg = (indiceImg + 1) % IMG_ARRAY.length;

    cajaImagen.style.backgroundImage = "url('" + IMG_ARRAY[indiceImg] + "')";
});
