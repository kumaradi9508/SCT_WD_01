function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Quotes Carousel
const quotes = document.querySelectorAll(".quote");
let current = 0;

function showQuote(index) {
  quotes.forEach((quote, i) => {
    quote.classList.remove("active");
    if (i === index) quote.classList.add("active");
  });
}

setInterval(() => {
  current = (current + 1) % quotes.length;
  showQuote(current);
}, 5000);

// Initial quote show
showQuote(current);
