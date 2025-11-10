/* Nav scroll */
function navChange() {
    let nav = document.querySelector("nav");
    
    if (window.scrollY > 100) {
        nav.classList.add("fondoNav");
    } else {
        nav.classList.remove("fondoNav");
    }
}



let tarjetas = document.querySelectorAll(".tarjeta");


for (let i = 0; i < tarjetas.length; i++) {
  if (i % 2 === 0) {
    tarjetas[i].classList.add("from-left");
  } else {
    tarjetas[i].classList.add("from-right");
  }
}

// visible o no
function revisarTarjetas() {
  let altoVentana = window.innerHeight;
  

  for (let i = 0; i < tarjetas.length; i++) {
    let tarjeta = tarjetas[i];
    let posicionTarjeta = tarjeta.getBoundingClientRect().top;
    
    // si está dentor 
    if (posicionTarjeta < altoVentana - 100) {
      // Mostrar la tarjeta
      tarjeta.classList.add("visible");
      tarjeta.classList.remove("hide-left", "hide-right");
    } else {
      // Ocultar 
      if (tarjeta.classList.contains("from-left")) {
        tarjeta.classList.remove("visible");
        tarjeta.classList.add("hide-left");
      } else if (tarjeta.classList.contains("from-right")) {
        tarjeta.classList.remove("visible");
        tarjeta.classList.add("hide-right");
      }
    }
  }
}


window.addEventListener("scroll", revisarTarjetas);


revisarTarjetas();