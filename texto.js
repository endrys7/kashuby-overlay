const mensajes = [

{
texto:"CANJEA EL CÓDIGO",
color:"#FFD700",
},

{
texto:"KASHUBY-LATAM",
color:"#00D4FF",
}

];

let indice = 0;

const mensaje = document.getElementById("mensaje");

function siguienteMensaje(){

mensaje.innerHTML = mensajes[indice].texto;
mensaje.style.color = mensajes[indice].color;

mensaje.animate(

[
{ left:"100%" },

{ left:"-120%" }

],

{

duration:8000,

iterations:1,

easing:"linear"

}

);

indice++;

if(indice>=mensajes.length){

indice=0;

}

}

siguienteMensaje();

setInterval(siguienteMensaje,8000);
