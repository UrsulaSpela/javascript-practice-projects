console.log("hello")

const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")

const text1 = document.querySelector("#text-1")
const text2 = document.querySelector("#text-2")
const text3 = document.querySelector("#text-3")

btn1.addEventListener('click', function(){
    text1.style.display = "block"
    text2.style.display = "none"
    text3.style.display = "none"
})

btn2.addEventListener('click', function(){
    text1.style.display = "none"
    text2.style.display = "block"
    text3.style.display = "none"
})

btn3.addEventListener('click', function(){
    text1.style.display = "none"
    text2.style.display = "none"
    text3.style.display = "block"
})