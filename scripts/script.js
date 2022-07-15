
  
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


//FETCH INSTRUCCIONES
const divInstrucciones = document.querySelector(".instrucciones")
const botonInstrucciones = document.querySelector("#instructions")


fetch('../json/instrucciones.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((elemento) => {
            const div = document.createElement('div')
            div.classList.add("divNuevo")
            div.innerHTML = `
                <h4>${elemento.nombre}</h4>
                <p>${elemento.contenido}</p>
               
            `
   
            divInstrucciones.append(div)
            const divNuevo = document.querySelector(".divNuevo")
            botonInstrucciones.onclick =  () =>{
             /*  divNuevo.style.display = "flex" */  //Lo dejo comentado porque no se si lo voy a terminar introduciendo en el dom o si lo voy a dejar con el sweetalert que puse mas abajo

              Swal.fire({
                icon: 'question',
                width: 800,
                title: `INSTRUCCIONES <br> ${elemento.contenido}. `,
                confirmButtonText: "ENTENDIDO"
            })
        
            }
        })
    })

    
   