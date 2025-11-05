const nav = document.querySelector("nav");
const cards = Array.from(document.querySelectorAll(".card"));

// Asignar dirección (pares izquierda, impares derecha)
cards.forEach((card, i) => {
  if (i % 2 === 0) card.classList.add("from-left");
  else card.classList.add("from-right");
});

// --- NAV SCROLL SIMPLE ---
function updateNavBackground(isScrolled) {
  if (isScrolled) {
    nav.classList.add("fondoNav");
    nav.style.backgroundColor = "#ffffff";
  } else {
    nav.classList.remove("fondoNav");
    nav.style.backgroundColor = "transparent";
  }
}

window.addEventListener("scroll", () => {
  updateNavBackground(window.scrollY > 100);
});

// --- ANIMACIONES DE LAS CARDS ---
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -15% 0px", // mejora la estabilidad
  threshold: 0.2
};

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const card = entry.target;

    if (entry.isIntersecting) {
      // Aparece: limpiamos cualquier clase de salida
      card.classList.add("visible");
      card.classList.remove("hide-left", "hide-right");
    } else {
      // Desaparece: aplicamos la animación de salida según su origen
      if (card.classList.contains("from-left")) {
        card.classList.remove("visible");
        card.classList.add("hide-left");
      } else if (card.classList.contains("from-right")) {
        card.classList.remove("visible");
        card.classList.add("hide-right");
      }
    }
  });
}, observerOptions);

// Activar el observador
cards.forEach(card => io.observe(card));
