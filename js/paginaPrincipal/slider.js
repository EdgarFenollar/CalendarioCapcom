const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#slider__btn--left");
const btnRight = document.querySelector("#slider__btn--right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function siguiente(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 500)
}

function anterior(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = document.querySelectorAll(".slider__section")[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 500)
}


btnRight.addEventListener('click', function(){
    siguiente();
    clearInterval();
    
});

btnLeft.addEventListener('click', function(){
    anterior();
    clearInterval();
});

setInterval(function(){
    siguiente()
}, 5000)