

// Seleziono il container del carosello
const carousel = document.querySelector(".carousel");

// Seleziono i pulsanti freccia destra e sinistra
const rightBtn = document.querySelector(".arrow.right");
const leftBtn  = document.querySelector(".arrow.left");

// Seleziona tutti i link all'interno della nav
const navLinks = document.querySelectorAll('#nav-div a');

const cards = document.querySelectorAll(".scroll-card");


const header = document.getElementById("main-header");

// Seleziona tutti i dettagli nella nav
const detailsElements = document.querySelectorAll('#nav-div details');


if (rightBtn && carousel) {
  // Quando clicco sulla freccia destra, il carosello scorre di 320px verso destra
  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: 320,       // distanza in pixel da scorrere orizzontalmente
      behavior: "smooth" // scorrimento animato graduale
    });
  });
}

if (leftBtn && carousel) {
  // Quando clicco sulla freccia sinistra, il carosello scorre di 320px verso sinistra
  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -320,      // distanza negativa per scorrere a sinistra
      behavior: "smooth" // scorrimento animato graduale
    });
  });
}

// Aggiungi un listener a ogni link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Chiudi tutti i dettagli aperti
    detailsElements.forEach(detail => {
      detail.removeAttribute('open');
    });
  });
});





if (cards.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quando la sezione entra nello schermo → aggiungi 'visible'
          entry.target.classList.add("visible");
        } else {
          // Quando la sezione esce dallo schermo → rimuovi 'visible'
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2 // 20% della sezione deve essere visibile per attivare
    }
  );

  // Osserva tutte le sezioni selezionate
  cards.forEach(card => observer.observe(card));
}




/* Ascolta lo scroll della finestra */
window.addEventListener("scroll", () => {

  /* Pixel scrollati verticalmente */
  const scrollY = window.scrollY;

  /* Dopo questi pixel l'effetto si ferma */
  const maxScroll = 200;

  /* Normalizza il valore tra 0 e 1 */
  const progress = Math.min(scrollY / maxScroll, 1);

  /* Riduce leggermente la scala (max -5%) */
  const scale = 1 - progress * 0.05;

  /* Aumenta leggermente il blur (max 3px) */
  const blur = progress * 3;

  /* Applica la trasformazione */
  header.style.transform = `scale(${scale})`;

  /* Applica la sfocatura */
  header.style.filter = `blur(${blur}px)`;
});