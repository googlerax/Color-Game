let squares = document.querySelectorAll(".square") /*cuadrados */
let colorDisplay = document.getElementById("colorDisplay")/* span del h1, muestra el codigo color rgb */
let msj = document.getElementById("message") /* msjs correcto o incorrecto */
let btnReset = document.getElementById("reset") /* boton reset/play again */
let h1 = document.querySelector("h1") /* h1, cabecera */
const btns = document.querySelectorAll(".btn") /* botones easy y hard */

let numSquare = 6 // inicio en 6 colores

function generateRandomColors(n) { // funcion que rellena array con colores aleatorios segun su longitud
  let arrColor = []
  for (let i = 1; i < n + 1; i++) arrColor.push(randomColor())
  return arrColor
}

function randomColor() { // funcion generadora de color rgb aleatorio
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

function changeColors(color) {// funcion iguala todos los cuadrados al color ganador
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.background = color
    squares[i].style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`
  }
}

function pickColor() { // numero aleatorio segun cantidad de cuadrados
  return Math.floor(Math.random() * colors.length)
}

//let colors = generateRandomColors(numSquare) 

function resetGame() {

  colors = generateRandomColors(numSquare) // array de colores

  pickedColor = colors[pickColor()] // color aleatorio del array
  console.log(pickedColor)

  colorDisplay.textContent = pickedColor // se muestra en ph1 el codigo de color rgb a adivinar
  msj.textContent = "" // reinicio de msj
  btnReset.textContent = "Nuevos Colores"
  //backgroud de h1 con el color de fondo por defecto, usando el metodo del objeto window getComputedStyle()
  h1.style.background = window.getComputedStyle(document.body).backgroundColor

  // logica de los colores
      for (let i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i] /* recorrido y asignacion de color a cada cuadrado */
        squares[i].style.boxShadow = `0 0 10px ${colors[i]}, 0 0 20px ${colors[i]}, 0 0 30px ${colors[i]}` /*efecto resplandor de color */

        squares[i].addEventListener("click",()=>{ /* evento click a cada cuadrado */
            let clickedColor = squares[i].style.background /* guardado de color en clickedColor */
            squares[i].style.boxShadow = "none" // anula efecto resplandor sobre el cuadrado

            if (clickedColor === pickedColor) { // si adivina el color
                msj.innerText = "¡Correcto!"
                btnReset.innerText = "Play Again?"
                //color de fondo ganador a h1 
                h1.style.background = pickedColor
                // funcion iguala los cuadrados al color ganador
                changeColors(pickedColor)
            } else { // sino coinciden
                msj.innerText = "Intentalo Nuevamente"

            }
        })

    }

    /* recorre los cuadrados */
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      console.log(colors[i])
      squares[i].style.display = "block"
      squares[i].style.background = colors[i]
    } else {
      squares[i].style.display = "none" // no muestra los cuadrados porque Boolean("")==false
    }
  }
}


btnReset.addEventListener("click", resetGame) // boton reset/play again

// recorrido de botones easy y hard
btns.forEach((btn) => {

  btn.addEventListener("click", () => {
    btns.forEach((b) => b.classList.remove("selected"))
    btn.classList.add("selected");
    numSquare = btn.textContent === "Easy" ? 3 : 6 //
    resetGame()

  })

})


resetGame() // Llama a la función resetGame al inicio para iniciar el juego.


