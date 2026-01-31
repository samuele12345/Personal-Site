

// Seleziono il container del carosello
const carousel = document.querySelector(".carousel");

// Seleziono i pulsanti freccia destra e sinistra
const rightBtn = document.querySelector(".arrow.right");
const leftBtn  = document.querySelector(".arrow.left");

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
