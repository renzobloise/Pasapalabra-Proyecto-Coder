
  
 function mute() {
    let audio = document.getElementById("player");
    player.play();
    audio.muted == false ? audio.muted = true :audio.muted = false //OPERADOR TERNARIO DE LA ESTRUCTURA IF
  }

const circles = document.querySelectorAll('.dibujoLetraIndex')

const n = 25; // numero de circulos
const r = 290 // radio

let angulo = 0;
let originX = circles[0].offsetLeft
let originY = circles[0].offsetTop

setInterval(() => {
    angulo += 0.01;

    circles.forEach((element, i) => {

        element.style.left = `${originX + r*Math.cos(angulo + 2*Math.PI/n*i)}px`
        element.style.top = `${originY + r*Math.sin(angulo + 2*Math.PI/n*i)}px`
    })

}, 20);

