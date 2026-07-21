const mensajes=[

{
texto:"CANJEA EL CÓDIGO",
tiempo:3000,
color:"#FFD700"
},

{
texto:"KASHUBY-LATAM",
tiempo:5000,
color:"#00E5FF"
}

];

const mensaje=document.getElementById("mensaje");

let actual=0;

function mostrar(){

mensaje.style.opacity=0;

setTimeout(()=>{

mensaje.innerHTML=mensajes[actual].texto;

mensaje.style.color=mensajes[actual].color;

mensaje.style.opacity=1;

setTimeout(()=>{

actual++;

if(actual>=mensajes.length){

actual=0;

}

mostrar();

},mensajes[actual].tiempo);

},500);

}

mostrar();
