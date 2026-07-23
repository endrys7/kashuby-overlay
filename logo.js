const logo = document.getElementById("logo"); // o el id que uses

let x = 0;
let y = 0;
let dx = 2;
let dy = 2;

function mover() {

    const ancho = logo.offsetWidth;
    const alto = logo.offsetHeight;

    x += dx;
    y += dy;

    // Rebote horizontal
    if (x <= 0) {
        x = 0;
        dx = Math.abs(dx);
    }

    if (x + ancho >= window.innerWidth) {
        x = window.innerWidth - ancho;
        dx = -Math.abs(dx);
    }

    // Rebote vertical
    if (y <= 0) {
        y = 0;
        dy = Math.abs(dy);
    }

    if (y + alto >= window.innerHeight) {
        y = window.innerHeight - alto;
        dy = -Math.abs(dy);
    }

    logo.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(mover);
}

mover();
