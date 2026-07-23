const logo = document.getElementById("logo");

const contenedor = document.getElementById("contenedor");

let x = 0;
let y = (contenedor.clientHeight - logo.offsetHeight) / 2;

let dx = 2;
let dy = 2;

function mover() {

    x += dx;
    y += dy;

    const maxX = contenedor.clientWidth - logo.offsetWidth;
    const maxY = contenedor.clientHeight - logo.offsetHeight;

    if (x <= 0) {
        x = 0;
        dx *= -1;
    }

    if (x >= maxX) {
        x = maxX;
        dx *= -1;
    }

    if (y <= 0) {
        y = 0;
        dy *= -1;
    }

    if (y >= maxY) {
        y = maxY;
        dy *= -1;
    }

    logo.style.left = x + "px";
    logo.style.top = y + "px";

    requestAnimationFrame(mover);
}

mover();
