function mostrarPopup(){
    alert("Bienvenido a la página de rendimientos de la Formula 1 esta temporada 2023") //Esta función te muestra un mensaje al abrir la página
}
window.onload = function(){
    mostrarPopup(); //Esta función muestra el mensaje que se ha creado antes
};

window.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('titulo3')){
        evt.target.style.color = 'blue';
    }
});                                                     // Las 2 funciones de las lineas 8 y 14 cambian el color de la letra del titulo cuando pasas el ratón por encima

window.addEventListener('mouseout', function(evt) {
    if(evt.target.classList.contains('titulo3')){
        evt.target.style.color = 'black';
    }
});

function pilotosred(MaxVerstappen, ChecoPerez){
    alert("Los pilotos de RedBull son: Max Verstappen y Checo Perez");
}

function pilotosmerc(LewisHamilton, GeorgeRussell){
    alert("Los pilotos de Mercedes son: Lewis Hamilton y George Russell")
}

function pilotosfer(CharlesLeclerc, CarlosSainz){
    alert("Los pilotos de Ferrari son: Charles Leclerc y Carlos Sainz")
}

function pilotosast(FernandoAlonso, LanceStroll){
    alert("Los pilotos de Aston Martin son: Fernando Alonso y Lance Stroll")
}

function pilotosmcl(LandoNorris, OscarPiastri){
    alert("Los pilotos de Mclaren son: Lando Norris y Oscar Piastri")
}

function pilotosalp(EstebanOcon, PierreGasly){
    alert("Los pilotos de Alpine son: Esteban Ocon y Pierre Gasly")
}

function pilotoswil(AlexAlbon, LoganSargeant){
    alert("Los pilotos de Williams son: Alex Albon y Logan Sargeant")
}

function pilotoshaas(KevinMagnussen, NicoHulkenberg){
    alert("Los pilotos de Haas son: Kevin Magnussen y Nico Hülkenberg")
}

function pilotosalf(ValtteriBottas, GuanyuZhou){
    alert("Los pilotos de Alfa Romeo son: Valtteri Bottas y Guanyu Zhou")
}

function pilotosalph(LiamLawson, YukiTsunoda){
    alert("Los pilotos de Alpha Tauri son: Liam Lawson y Yuki Tsunoda")
}

//Las funciones de las lineas 20 a 58 son los botones que muestran un popup con los pilotos de cada escuderia