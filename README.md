## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a simple slideshow to show some quotes by fake customers done with HTML,CSS and Javascript

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](images/screenshot.png)

### Links

- Solution URL: [Ahttps://github.com/MikeProduce/coding-bootcamp-testimonials-slider-master](https://your-solution-url.com)
- Live Site URL: [https://mikeproduce.github.io/coding-bootcamp-testimonials-slider-master/](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript

### What I learned

I would say this project was more a refresher on somethings. Except for the javascript part.

```let i = 0;
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
```

I dont get how this piece of code works at all.I just know it does.

### Continued development

My main improvement right now is definitely responsive layouts

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/MikeProduce](https://www.frontendmentor.io/profile/yourusername)
