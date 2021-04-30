let instructionsParagraph = document.getElementById("instructionsParagraph")

let dieSquare = document.getElementById("dieSquare")
let playerOneParagraph = document.getElementById("playerOneParagraph")
let playerTwoParagraph = document.getElementById("playerTwoParagraph")

let scoreThisTurnParagraph = document.getElementById("scoreThisTurnParagraph")

let passButton = document.getElementById("passButton")

let points = 0
let playerOneTotalPoints = 0
let playerTwoTotalPoints = 0

let playerOneTurn = true

dieSquare.addEventListener("click", rollDie)
passButton.addEventListener("click", pass)

function rollDie() {
  instructionsParagraph.innerHTML = ``
  let randomNum = Math.floor(Math.random() * 6) + 1
  dieSquare.src = `${randomNum}.gif`

  if (randomNum == 1) {
    points = 0
    scoreThisTurnParagraph.innerHTML = `Score this turn: ${points}`
    passButton.innerHTML = `Switch player`
    passButton.style.backgroundColor = `red`
    dieSquare.removeEventListener("click", rollDie)
    return
  }

  if (randomNum != 1) {
    points = points + randomNum
    scoreThisTurnParagraph.innerHTML = `Score this turn: ${points}`
    return
  }  
}

function pass() {

  dieSquare.addEventListener("click", rollDie)
  passButton.innerHTML = `pass`
  passButton.style.backgroundColor = ``

  if (playerOneTurn == true) {
    playerOneTotalPoints = playerOneTotalPoints + points
    playerOneParagraph.innerHTML = `Player one: ${playerOneTotalPoints}`
    scoreThisTurnParagraph.innerHTML = `Score this turn: ${points}`
    playerTwoParagraph.style.color = `red`
    playerOneParagraph.style.color = `black`
    playerOneTurn = false
    points = 0
  }
  else {
    playerTwoTotalPoints = playerTwoTotalPoints + points
    playerTwoParagraph.innerHTML = `Player two: ${playerTwoTotalPoints}`
    scoreThisTurnParagraph.innerHTML = `Score this turn: ${points}`
    playerOneParagraph.style.color = `red`
    playerTwoParagraph.style.color = `black`
    playerOneTurn = true
    points = 0
  }

  if (playerOneTotalPoints >= 100 || playerTwoTotalPoints >= 100) {
    
    if (playerOneTotalPoints >= 100) {
      instructionsParagraph.innerHTML = "PLAYER ONE WINS!"
      playerOneParagraph.style.color = `red`
      playerTwoParagraph.style.color = `black`
    }
    else if (playerTwoTotalPoints >= 100) {
      instructionsParagraph.innerHTML = "PLAYER TWO WINS!"
      playerOneParagraph.style.color = `black`
      playerTwoParagraph.style.color = `red`
    }
    dieSquare.removeEventListener("click", rollDie)
  }
}