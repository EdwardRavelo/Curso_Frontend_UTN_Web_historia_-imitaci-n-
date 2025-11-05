let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

const navChange=()=>{
    
  
    if(window.innerHeight*0.1 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
        
       
    }
} 
function iniciar(){
    var imagenes=document.querySelectorAll('.imagenes');
     soltar=document.getElementById('cajasoltar');  
     soltar2  =document.getElementById('cajasoltar2'); 
     soltar3 = document.getElementById('cajasoltar3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    
    let imagen=document.getElementById(id);
    console.log(imagen)
    imagen.style.display= 'none';
    let contenedor;
    if(e.target.tagName ==="P"){
        contenedor=e.target.parentNode;
    }else{
        contenedor= e.target;
    }
    contenedor.innerHTML='<img src="'+imagen.src+'" height="100%" width="100%">';
    contador++
    

    if(contador ==3){
        let imagen1=document.querySelector("#cajasoltar>img").getAttribute("src").split("/").includes("Rompe1.png")
        let imagen2=document.querySelector("#cajasoltar2>img").getAttribute("src").split("/").includes("rompe2.png")
        let imagen3=document.querySelector("#cajasoltar3>img").getAttribute("src").split("/").includes("Rompe3.png")
        document.querySelector(".cajas").style.gap="0px";
        let cajitas=document.querySelectorAll(".caja")

        document.querySelector(".cajas").style="transform:scale(1.5);gap:0;border:0";
        for(let caja of cajitas){
            caja.style.border="0";
        }
        
        if(imagen1&&imagen2&&imagen3){
            setTimeout(()=>{
                document.querySelector(".cajas").style="transform:scale(1);gap:0";

            },3000)
            setTimeout(()=>{ 
                document.querySelector(".espacio-titulo").innerHTML=`<span>Felicitaciones!!<br>Puzzle correctamente resuelto`;
            document.querySelector(".espacio-titulo").style="animation:feliz 3s forwards;position:relative";
             document.querySelector(".cajas").style="opacity:0;gap:0";
        },6000)
       
         
        }else{
            for(let caja of cajitas){
                caja.style.border=0;
                caja.classList.remove("cajaHover")
                
            }
            setTimeout(()=>{
                for(let caja of cajitas){
                    caja.style.opacity="0.7";
                }
                document.querySelector(".espacio-titulo").innerHTML=`Lo sentimos ,Puzzle no resuelto.<br/>Prueba otra vez <img width=50px src="./assets/icons/icons8-double-down-80.png"/> `
                document.querySelector(".espacio-titulo").style="animation:feliz 3s forwards; z-index:3;position:relative;color:white; text-shadow: 2px 2px #808080, 6px 6px black";
                document.querySelector(".cajas").style="background-color:#000000;transform:scale(1);gap:0"
            },5000)

        }
    }

}
function reinicio() {
    window.location.reload();
}
iniciar()
//window.addEventListener('load', iniciar, false);