const logo=document.getElementById("logo");

let posicion=0;

let direccion=1;

const velocidad=0.35;

// 1080 de ancho
// 220 ancho del logo

const limite=860;

function animar(){

    posicion+=velocidad*direccion;

    if(posicion>=limite){

        direccion=-1;

    }

    if(posicion<=0){

        direccion=1;

    }

    logo.style.left=posicion+"px";

    requestAnimationFrame(animar);

}

animar();
