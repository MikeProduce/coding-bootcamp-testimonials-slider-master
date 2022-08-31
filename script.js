"use strict";
const content1 = document.getElementById("container-content");
const content2 = document.getElementById("container-content2");
const leftbutton = document.getElementById("leftbutton");
const rightbutton = document.getElementById("rightbutton");

// how to slideshow works

let i = 0;
let images = [];
images[1] = content1;
images[2] = content2;

var nextImage = function () {
  if (i < images.length) {
    images[i++];
    images[i++].style.display = "block";
    images[i++].style.display = "none";
  } else {
    images[i--];
    images[i--].style.display = "block";
    images[i--].style.display = "none";
  }
};

var previousImage = function () {
  if (i < images.length) {
    images[i++];
    images[i++].style.display = "block";
    images[i++].style.display = "none";
  } else {
    images[i--];
    images[i--].style.display = "block";
    images[i--].style.display = "none";
  }
};
rightbutton.addEventListener("click", nextImage);
leftbutton.addEventListener("click", previousImage);

// code for the button down events

document.addEventListener("keydown", (e) => {
  e = e || window.event;
  if (e.keyCode === 37) {
    previousImage();
  } else if (e.keyCode === 39) {
    nextImage();
  }
});
