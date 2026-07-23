const logo = document.getElementById("logo");
const contenedor = document.getElementById("contenedor");

let x = 0;
let y = 0;

let dx = 2;
let dy = 2;

function mover(){

    const logoW = logo.getBoundingClientRect().width;
    const logoH = logo.getBoundingClientRect().height;

    const maxX = contenedor.clientWidth - logoW;
    const maxY = contenedor.clientHeight - logoH;

    x += dx;
    y += dy;

    if(x <= 0){
        x = 0;
        dx *= -1;
    }

    if(x >= maxX){
        x = maxX;
        dx *= -1;
    }

    if(y <= 0){
        y = 0;
        dy *= -1;
    }

    if(y >= maxY){
        y = maxY;
        dy *= -1;
    }

    logo.style.left = x + "px";
    logo.style.top = y + "px";

    requestAnimationFrame(mover);
}

logo.onload = () => {

    y = (contenedor.clientHeight - logo.getBoundingClientRect().height) / 2;

    mover();

};

// Por si la imagen ya estaba cargada desde caché
if (logo.complete) {
    y = (contenedor.clientHeight - logo.getBoundingClientRect().height) / 2;
    mover();
}
