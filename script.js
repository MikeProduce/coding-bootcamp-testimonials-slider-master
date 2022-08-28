"use strict";
const content1 = document.getElementById("container-content");
const content2 = document.getElementById("container-content2");
const leftbutton = document.getElementById("leftbutton");
const rightbutton = document.getElementById("rightbutton");

const eachslide = [content1, content2];

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
leftbutton.addEventListener("click", function plusSlides(n) {
  showSlides((slideIndex += n));
});

function showSlides(n) {
  const eachslide = [content1, content2];
  let i;
  let slides = eachslide;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
