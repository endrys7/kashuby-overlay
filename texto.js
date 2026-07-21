const mensajes=[

{
texto:"CANJEA EL CODIGO",
tiempo:3000,
color:"#FFD701"
},

{
texto:"KASHUBY-LATAM",
tiempo:5000,
color:"#00ff88"
}

];

let actual=0;

const div=document.getElementById("mensaje");

function mostrar(){

div.style.opacity=0;

setTimeout(()=>{

div.innerHTML=mensajes[actual].texto;

div.style.color=mensajes[actual].color;

div.style.opacity=1;

setTimeout(()=>{

actual++;

if(actual>=mensajes.length){

actual=0;

}

mostrar();

},mensajes[actual].tiempo);

},300);

}

mostrar();
