const addBtn = document.querySelector("#add-btn")
let userInput = document.querySelector("input").value
let userTodos = document.querySelector("#user-todos")



addBtn.addEventListener("click", function(){
    let newToDo = document.createElement("p")
    userTodos.appendChild(newToDo)
    newToDo.textContent = userInput
    console.log(userInput)
})