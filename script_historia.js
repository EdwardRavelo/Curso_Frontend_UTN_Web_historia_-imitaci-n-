/* Nav scroll */
function navChange() {
    let nav = document.querySelector("nav");
    
    if (window.scrollY > 100) {
        nav.classList.add("fondoNav");
    } else {
        nav.classList.remove("fondoNav");
    }
}


/* Video */
let video = document.querySelector("video");
let btnPlay = document.getElementById("play");
let btnPause = document.getElementById("pause");
let tiempo = document.getElementById("showTime");

// Duración del video 
setTimeout(function() {
  tiempo.textContent = "Duración video: 04:41";
}, 100);

// segundos a minutos
function mostrarTiempo(segundos) {
  let minutos = Math.floor(segundos / 60);
  let seg = Math.floor(segundos % 60);
  
  // Agregar un 0 adelante si es menor a 10
  if (seg < 10) {
    seg = "0" + seg;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  
  return minutos + ":" + seg;
}

// ClickPlay
btnPlay.addEventListener("click", function() {
  video.play();
  
  // tiempo x segundo
  setInterval(function() {
    tiempo.textContent = mostrarTiempo(video.currentTime);
  }, 1000);
});

//clickPause
btnPause.addEventListener("click", function() {
  video.pause();
});

video.addEventListener("timeupdate", function() {
  let porcentaje = (video.currentTime / video.duration) * 100;
  barraProgreso.value = porcentaje;
});

// barra de progreso
barraProgreso.addEventListener("click", function(evento) {
  let posicionClick = evento.offsetX;
  let anchoTotal = barraProgreso.offsetWidth;
  let porcentaje = posicionClick / anchoTotal;
  video.currentTime = porcentaje * video.duration;
});


// Tarjetas
let nav = document.querySelector("nav");
let tarjeta1 = document.querySelector("#cardHist1");
let tarjeta2 = document.querySelector("#cardHist2");
let tarjeta3 = document.querySelector("#cardHist3");

// Scroll
window.addEventListener("scroll", function() {
  let scrollActual = window.scrollY;
  let altoVentana = window.innerHeight;
  
  // Primera tarjeta
  let posicionTarjeta1 = tarjeta1.getBoundingClientRect().top;
  
  // en pantalla
  if (posicionTarjeta1 < altoVentana - 100) {
    tarjeta1.classList.add("visible");
  } else {
    tarjeta1.classList.remove("visible");
  }
  
  // tarjeta 2
  let posicionTarjeta2 = tarjeta2.getBoundingClientRect().top;
  
  if (posicionTarjeta2 < altoVentana - 100) {
    tarjeta2.classList.add("visible");
  } else {
    tarjeta2.classList.remove("visible");
  }
  
  // tarjeta 3
  let posicionTarjeta3 = tarjeta3.getBoundingClientRect().top;
  
  if (posicionTarjeta3 < altoVentana - 100) {
    tarjeta3.classList.add("visible");
  } else {
    tarjeta3.classList.remove("visible");
  }
});