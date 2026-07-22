const url="https://vdo.ninja/?view=CgNEpKZ";

const iframe=document.getElementById("camara");

iframe.src=url;

const zoom=localStorage.getItem("zoom") || 1.3;

const x=localStorage.getItem("x") || 0;

const y=localStorage.getItem("y") || 0;

iframe.style.transform=
`translate(${x}%,${y}%) scale(${zoom})`;
