const content1 = document.getElementById("container-content");
const content2 = document.getElementById("container-content2");
const content3 = document.getElementById("container-content3");
const leftbutton = document.getElementById("leftbutton");
const rightbutton = document.getElementById("rightbutton");

// how to slideshow works
const quotes = [content1, content2];
let currentQuoteIndex = 0;

function updateQuoteDisplay(nextQuoteIndex) {
  quotes[currentQuoteIndex].style.display = "none";
  quotes[nextQuoteIndex].style.display = "block";
}

function atLastQuote() {
  return currentQuoteIndex === quotes.length - 1;
}

function atFirstQuote() {
  return currentQuoteIndex === 0;
}

function next() {
  const nextQuoteIndex = atLastQuote() ? 0 : currentQuoteIndex + 1;
  updateQuoteDisplay(nextQuoteIndex);
  currentQuoteIndex = nextQuoteIndex;
}

function previous() {
  const nextQuoteIndex = atFirstQuote()
    ? quotes.length - 1
    : currentQuoteIndex - 1;
  updateQuoteDisplay(nextQuoteIndex);
  currentQuoteIndex = nextQuoteIndex;
}

rightbutton.addEventListener("click", next);
leftbutton.addEventListener("click", previous);

// code for the button down events
document.addEventListener("keydown", (e) => {
  e = e || window.event;
  if (e.key === "ArrowLeft") {
    previous();
  } else if (e.key === "ArrowRight") {
    next();
  }
});
