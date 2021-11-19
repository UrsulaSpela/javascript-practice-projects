const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
let count = document.querySelector("#count-display");

function increaseCount() {
  count.textContent++;
}

increase.addEventListener("click", increaseCount);

function decreaseCount() {
  count.textContent--;
}

decrease.addEventListener("click", decreaseCount);

function resetCount() {
  count.textContent = 0;
}

reset.addEventListener("click", resetCount);
