const mensajes = [

{

texto:"CANJEA EL CÓDIGO",

color:"#D4AF37",

tiempo:3000

},

{

texto:"RECLAMA 10K PARACOINS",

color:"#FF8C00",

tiempo:5000

},

{

texto:"KASHUBY-LATAM",

color:"#39FF88",

tiempo:5000

}

];

const mensaje = document.getElementById("mensaje");

let actual = 0;

function cambiarMensaje(){

    mensaje.style.opacity = 0;

    setTimeout(()=>{

        mensaje.innerHTML = mensajes[actual].texto;

        mensaje.style.color = mensajes[actual].color;

        mensaje.style.opacity = 1;

        setTimeout(()=>{

            actual++;

            if(actual >= mensajes.length){

                actual = 0;

            }

            cambiarMensaje();

        }, mensajes[actual].tiempo);

    },400);

}

cambiarMensaje();
