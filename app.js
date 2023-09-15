// color a las tarjetas:
// arrays con colores
let colors = generateRandomColors(6)
//seleccion de los cuadrados:
let squares = document.querySelectorAll(".square")

// color aleatorio  (por el momento asignado manual)
//👩‍🏫👨‍🏫 Más adelante, la Variable tendrá un color aleatorio (seleccionado del Arreglo).
pickedColor = colors[pickColor()]
console.log(pickedColor)
// asignacion del color de color[1] al texto del span #colorDisplay
let colorDisplay = document.getElementById("colorDisplay")
colorDisplay.innerText = pickedColor;

let msj = document.getElementById("message") /*mensaje de correcto en span "message"*/
let btnReset = document.getElementById("reset") /**boton reset */
let h1 = document.querySelector("h1") /** encabezado h1 */


    for (let i = 0; i < colors.length; i++) {
        // recorrido y asignacion de colores a cada cuadrado
        squares[i].style.background = colors[i] // color a cada cuadrado
        squares[i].addEventListener("click",()=>{
            let clickedColor = squares[i].style.background
            if (clickedColor === pickedColor) {
                msj.innerText = "¡Correcto!"
                btnReset.innerText = "Play Again?"
                //color de fondo ganador a h1 
                h1.style.background = pickedColor
                // funcion iguala los cuadrados al color ganador
                changeColors(pickedColor)
            } else {
                let msj = document.getElementById("message")
                msj.innerText = "Intentalo Nuevamente"
                // uso de window.getComputedStyle()  para traer el valor del estilo 
                squares[i].style.background =window.getComputedStyle(document.body).backgroundColor
            }
        })
    }


// funcion iguala los cuadrados al color correcto
function changeColors(color) {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.background = color
    }
}

// color aleatorio del arreglo
function pickColor() {
    let numAle = Math.floor(Math.random()*colors.length)
    return numAle
}


// funcion generadora de color rgb aleatorio
function randomColor(){
    let red = Math.floor(Math.random()*256)
    let green= Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    
    return `rgb(${red}, ${green}, ${blue})`
    
    }
    
// funcion que genera un array con los colores aleatorios
function generateRandomColors(n){
    let arrColor = []
    for (let i = 1; i < n+1; i++) arrColor.push(randomColor())
    return arrColor
}

/**BOTONES */

let numberOfSquares = 6 

// boton nuevos colores
function reset(numberOfSquares) {

    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    // mensajes reset
    msj.innerText = ""
    btnReset.innerText = "Nuevos Colores"
    // reset h1
    h1.style.background = window.getComputedStyle(document.body).backgroundColor;

    
    for (let i = 0; i < squares.length; i++) {
        // si hay un color en i, o no undefined
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
   
}


btnReset.addEventListener("click",function() {
    reset(numberOfSquares)
})





//----

// boton easy
btnEasy = document.getElementById("easyButton")
// boton hard
btnHard = document.getElementById("hardButton")

btnEasy.addEventListener("click",function(){
    btnHard.classList.remove("selected")
    numberOfSquares = 3

    reset(numberOfSquares)
    

})


btnHard.addEventListener("click",function(){
    btnEasy.classList.add("selected")
    numberOfSquares = 6

    reset(numberOfSquares)

})









