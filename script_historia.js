// ------------------ VIDEO ------------------
let video = document.querySelector("video");
let btnPlay = document.getElementById("play");
let btnPause = document.getElementById("pause");
let tiempo = document.getElementById("showTime");
let intervaloTiempo;

// Muestra la duración total (fijo, a modo de ejemplo)
setTimeout(() => {
  tiempo.textContent = "Duración video: 04:41";
}, 100);

// Función que convierte segundos a formato mm:ss
function mostrarTiempo(segundos) {
  let min = Math.floor(segundos / 60);
  let seg = Math.floor(segundos % 60);
  if (seg < 10) seg = "0" + seg;
  if (min < 10) min = "0" + min;
  return `${min}:${seg}`;
}

// Al hacer clic en Play
btnPlay.addEventListener("click", () => {
  video.play();
  intervaloTiempo = setInterval(() => {
    tiempo.textContent = mostrarTiempo(video.currentTime);
  }, 1000);
});

// Al hacer clic en Pause
btnPause.addEventListener("click", () => {
  video.pause();
  clearInterval(intervaloTiempo);
});


// ------------------ EFECTO SCROLL (NAV y ANIMACIONES) ------------------
const nav = document.querySelector("nav");
const card1 = document.querySelector("#cardHist1");
const card2 = document.querySelector("#cardHist2");
const card3 = document.querySelector("#cardHist3");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  let altoPantalla = window.innerHeight;

  // Cambia color del nav al hacer scroll
  if (y > altoPantalla * 0.1) {
    nav.classList.add("fondoNav");
  } else {
    nav.classList.remove("fondoNav");
  }

  // Distancia de referencia para animaciones
  let pos1 = card1.offsetTop - altoPantalla * 0.7;
  let pos2 = card2.offsetTop - altoPantalla * 0.7;
  let pos3 = card3.offsetTop - altoPantalla * 0.7;

  // Aparecer card 1
  if (y > pos1 && y < pos2) {
    card1.querySelector("img").style.animation = "aparecer1 1s ease-out forwards";
    card1.querySelector("div").style.animation = "opacity1 1s ease-out forwards";
  }

  // Aparecer card 2
  if (y > pos2 && y < pos3) {
    card2.querySelector("img").style.animation = "aparecer2 1s ease-out forwards";
    card2.querySelector("div").style.animation = "opacity2 1s ease-out forwards";
  }

  // Aparecer card 3
  if (y > pos3) {
    card3.querySelector("img").style.animation = "aparecer1 1s ease-out forwards";
    card3.querySelector("div").style.animation = "opacity1 1s ease-out forwards";
  }
});


