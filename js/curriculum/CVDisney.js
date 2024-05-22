function verImg(rutaDeImagen){
    
    var frontImg= document.getElementById("change");
    frontImg.style.display = "flex";

    var imgBig= document.getElementById("imgChange");
    imgBig.src = rutaDeImagen;
}

function hideImg(){
    var frontImg= document.getElementById("change");
    frontImg.style.display = "none";
}