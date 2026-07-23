const logo = document.getElementById("logo");

const contenedor = document.getElementById("contenedor");

let x = 0;
let y = (contenedor.clientHeight - logo.offsetHeight) / 2;

let dx = 2;
let dy = 2;

function mover() {

    x += dx;
    y += dy;

    const maxX = 1080 - logo.getBoundingClientRect().width;
    const maxY = 400 - logo.getBoundingClientRect().height;

    if (x < 0) {
    x = 0;
    dx = Math.abs(dx);
}

if (x > maxX) {
    x = maxX;
    dx = -Math.abs(dx);
}

if (y < 0) {
    y = 0;
    dy = Math.abs(dy);
}

if (y > maxY) {
    y = maxY;
    dy = -Math.abs(dy);
}

    logo.style.left = x + "px";
    logo.style.top = y + "px";

    requestAnimationFrame(mover);
}

mover();
