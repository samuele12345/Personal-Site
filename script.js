

// Seleziono il container del carosello
const carousel = document.querySelector(".carousel");

// Seleziono i pulsanti freccia destra e sinistra
const rightBtn = document.querySelector(".arrow.right");
const leftBtn  = document.querySelector(".arrow.left");

// Seleziona tutti i link all'interno della nav
const navLinks = document.querySelectorAll('#nav-div a');

// Seleziona tutti i dettagli nella nav
const detailsElements = document.querySelectorAll('#nav-div details');

// Quando clicco sulla freccia destra, il carosello scorre di 320px verso destra
rightBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: 320,       // distanza in pixel da scorrere orizzontalmente
    behavior: "smooth" // scorrimento animato graduale
  });
});

// Quando clicco sulla freccia sinistra, il carosello scorre di 320px verso sinistra
leftBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -320,      // distanza negativa per scorrere a sinistra
    behavior: "smooth" // scorrimento animato graduale
  });
});

// Aggiungi un listener a ogni link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Chiudi tutti i dettagli aperti
    detailsElements.forEach(detail => {
      detail.removeAttribute('open');
    });
  });
});