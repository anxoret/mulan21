"use strict";

let slides = document.querySelectorAll(".slideshow__slide");
let showingSlide = 0;

const showNextSlide = () => {
    slides[showingSlide].classList.remove("slideshow__slide_show");
    
    if (showingSlide == slides.length - 1) {
        showingSlide = 0;
    } else {
        showingSlide++;
    }

    slides[showingSlide].classList.add("slideshow__slide_show");
    
};

let slideInterval = setInterval(showNextSlide, 4000);

