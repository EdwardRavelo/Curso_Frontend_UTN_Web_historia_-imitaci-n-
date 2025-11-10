/* Nav scroll */
function navChange() {
    let nav = document.querySelector("nav");
    
    if (window.scrollY > 100) {
        nav.classList.add("fondoNav");
    } else {
        nav.classList.remove("fondoNav");
    }
}



let contador = 0;

function arrastrarImagen(evento) {
    let imagenArrastrada = evento.target;
    evento.dataTransfer.setData('imagen', imagenArrastrada.id);
}

function soltarImagen(evento) {
    evento.preventDefault();
    
    let idImagen = evento.dataTransfer.getData('imagen');
    let imagen = document.getElementById(idImagen);
    
    imagen.style.display = 'none';
    
    let caja;
    if (evento.target.tagName === "P") {
        caja = evento.target.parentNode;
    } else {
        caja = evento.target;
    }
    
    //Insertar imagen 
    caja.innerHTML = '<img src="' + imagen.src + '" width="100%" height="100%">';
    //sumar contador
    contador = contador + 1;
    
    if (contador === 3) {
        revisarRespuesta();
    }
}

// Verificación
function revisarRespuesta() {
    let imagenEnCaja1 = document.querySelector("#cajasoltar img").src;
    let imagenEnCaja2 = document.querySelector("#cajasoltar2 img").src;
    let imagenEnCaja3 = document.querySelector("#cajasoltar3 img").src;
    
    let caja1Correcta = imagenEnCaja1.includes("Rompe1.png");
    let caja2Correcta = imagenEnCaja2.includes("rompe2.png");
    let caja3Correcta = imagenEnCaja3.includes("Rompe3.png");
    
    // ganar
    let gano = caja1Correcta && caja2Correcta && caja3Correcta;
    let contenedorCajas = document.querySelector(".cajas");
    let titulo = document.querySelector(".espacio-titulo");
    
    //animación 
    contenedorCajas.style.transform = "scale(1.5)";
    contenedorCajas.style.gap = "0";
    
    // Verificación ganó o perdió
    if (gano === true) {
        // ===== GANÓ =====
        
        // volver  a scale normal 
        setTimeout(function() {
            contenedorCajas.style.transform = "scale(1)";
        }, 3000);
        
        // Felicitaciones
        setTimeout(function() {
            titulo.innerHTML = '¡Felicitaciones!<br>Puzzle correctamente resuelto';
            titulo.style.color = "gold";
            titulo.style.fontSize = "3rem";
            contenedorCajas.style.opacity = "0";
        }, 6000);
        
    } else {

        // Perdió
        
        // Mensaje de error
        setTimeout(function() {
            titulo.innerHTML = 'Lo sentimos, Puzzle no resuelto.<br/>Prueba otra vez :(';
            titulo.style.color = "black";
            contenedorCajas.style.backgroundColor = "#000000";
            contenedorCajas.style.transform = "scale(1)";
            contenedorCajas.style.opacity = "0.7";
        }, 5000);
    }
}

// Reiniciar el juego
function reinicio() {
    location.reload();
}

// Recaarga la página
window.onload = function() {
    
    let todasLasImagenes = document.querySelectorAll('.imagenes');
    
    for (let i = 0; i < todasLasImagenes.length; i++) {
        todasLasImagenes[i].draggable = true;
        todasLasImagenes[i].ondragstart = arrastrarImagen;
    }
    
    let todasLasCajas = document.querySelectorAll('.caja');
    
    for (let i = 0; i < todasLasCajas.length; i++) {
        todasLasCajas[i].ondragover = function(evento) {
            evento.preventDefault();
        };
        
        todasLasCajas[i].ondrop = soltarImagen;
    }
};