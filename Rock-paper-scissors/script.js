const btnRock = document.getElementById("btn-rock")
const btnPaper = document.getElementById("btn-paper")
const btnScissors = document.getElementById("btn-scissors")
let compChoices = ["rock", "paper", "scissors"]
let playerScore = document.getElementById("player")
let computerScore = document.getElementById("computer")
playerScore.textContent = 0
computerScore.textContent = 0

btnRock.addEventListener("click", function(){
    let playersChoice = document.getElementById("players-choice")
    playersChoice.textContent = "You played rock"
    
    let randomIndex = Math.floor(Math.random() * compChoices.length)
    let compChoice = document.getElementById("comp-choice")
    compChoice.textContent = ", computer played " + compChoices[randomIndex] +". "

    let result = document.getElementById("winner")
    playerScore = 0
    computerScore = 0
    if(compChoices[randomIndex] === compChoices[1]){
        result.textContent = "Computer wins!"
        playerScore.textContent = playerScore + 1
    } else if(compChoices[randomIndex] === compChoices[2]){
        result.textContent = "You win!"
    } else{
        result.textContent = "It's a tie!"
    }
})

btnPaper.addEventListener("click", function(){
    let playersChoice = document.getElementById("players-choice")
    playersChoice.textContent = "You played paper"
    
    let randomIndex = Math.floor(Math.random() * compChoices.length)
    let compChoice = document.getElementById("comp-choice")
    compChoice.textContent = ", computer played " + compChoices[randomIndex] +". "

    let result = document.getElementById("winner")
    playerScore = 0
    computerScore = 0
    if(compChoices[randomIndex] === compChoices[2]){
        result.textContent = "Computer wins!"
        playerScore.textContent = playerScore + 1
    } else if(compChoices[randomIndex] === compChoices[0]){
        result.textContent = "You win!"
    } else{
        result.textContent = "It's a tie!"
    }
})

btnScissors.addEventListener("click", function(){
    let playersChoice = document.getElementById("players-choice")
    playersChoice.textContent = "You played scissors"
    
    let randomIndex = Math.floor(Math.random() * compChoices.length)
    let compChoice = document.getElementById("comp-choice")
    compChoice.textContent = ", computer played " + compChoices[randomIndex] +". "

    let result = document.getElementById("winner")
    playerScore = 0
    computerScore = 0
    if(compChoices[randomIndex] === compChoices[0]){
        result.textContent = "Computer wins!"
        playerScore.textContent = playerScore + 1
    } else if(compChoices[randomIndex] === compChoices[1]){
        result.textContent = "You win!"
    } else{
        result.textContent = "It's a tie!"
    }
})