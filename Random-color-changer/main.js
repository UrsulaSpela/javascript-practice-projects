let title = document.querySelector("#color-name")
const changerBtn = document.querySelector("#changer-btn")
const colors = ["#BF267A", "#F2B705", "#D98E04", "#F29544", "#F28241"]

changerBtn.addEventListener("click", function(){
    let i = getRandomNumber()
    document.body.style.backgroundColor = colors[i]
    title.textContent = colors[i]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}