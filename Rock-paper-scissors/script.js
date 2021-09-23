const btnRock = document.getElementById("btn-rock")
const btnPaper = document.getElementById("btn-paper")
const btnScissors = document.getElementById("btn-scissors")
let compChoices = ["rock", "paper", "scissors"]

// function computerSelection(){
//     let randomIndex = Math.floor(Math.random() * compChoices.length)
//     let compChoice = document.getElementById("comp-choice")
//     compChoice.textContent = ", computer played " + compChoices[randomIndex] +". "
// }
// computerSelection()
// console.log(computerSelection())

btnRock.addEventListener("click", function(){
    let playersChoice = document.getElementById("players-choice")
    playersChoice.textContent = "You played rock"
    
    let randomIndex = Math.floor(Math.random() * compChoices.length)
    let compChoice = document.getElementById("comp-choice")
    compChoice.textContent = ", computer played " + compChoices[randomIndex] +". "

    let result = document.getElementById("winner")
    if(compChoices[randomIndex] === compChoices[1]){
        result.textContent = "Computer wins!"
    } else if(compChoices[randomIndex] === compChoices[2]){
        result.textContent = "You win!"
    } else{
        result.textContent = "It's a tie!"
    }
})