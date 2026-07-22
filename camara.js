const url = "https://vdo.ninja/?view=CgNEpKZ";

/**************
CONFIGURACIÓN
**************/

const zoom = 1.35;

const moverX = -12;

const moverY = -6;

document.getElementById("camara").src = url;

const cam = document.getElementById("camara");

cam.style.transform =
`translate(${moverX}%,${moverY}%) scale(${zoom})`;
