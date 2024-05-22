function generaMemes() {
    //let cantidad = Math.floor(Math.random() * 6);
    //let meme = meme + cantidad + jpeg;
    let imagen = document.createElement('img');

    imagen.src = '../../img/samvalentin/memes_aitor/meme1.jfif';

    document.getElementsByTagName('article').appendChild(imagen).innerHTML;
}