"use strict";
// const content1 = document.getElementById("container-content");
const content2 = document.getElementById("container-content2");
const leftbutton = document.getElementById("leftbutton");
const rightbutton = document.getElementById("rightbutton");

// const eachslide = [content1, content2];

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const content1 = document.getElementById("container-content");
  if (n > content1.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = content1.length;
  }
  for (i = 0; i < content1.length; i++) {}
}
