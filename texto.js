const mensajes=[

{
texto:"⭐ CANJEA EL CÓDIGO ⭐",
color:"#FFD700",
duracion:6000
},

{
texto:"🎮 KASHUBY-LATAM 🎮",
color:"#00E5FF",
duracion:6000
}

];

const contenedor=document.getElementById("mensaje");

let indice=0;

function mostrar(){

contenedor.innerHTML="";

const span=document.createElement("span");

span.innerHTML=mensajes[indice].texto;

span.style.color=mensajes[indice].color;

span.style.animationDuration=mensajes[indice].duracion+"ms";

contenedor.appendChild(span);

span.addEventListener("animationend",()=>{

indice++;

if(indice>=mensajes.length){

indice=0;

}

mostrar();

});

}

mostrar();
