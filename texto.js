const mensajes = [

{

texto:"CANJEA EL CÓDIGO",

color:"#D4AF37",

tamano:"72px",

tiempo:3000

},

{

texto:"RECLAMA 10K PARACOINS",

color:"#FFB000",

tamano:"58px",

tiempo:5000

},

{

texto:"KASHUBY-LATAM",

color:"#39FF88",

tamano:"72px",

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
        mensaje.style.fontSize = mensajes[actual].tamano;
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
