const start = document.querySelector('#start')
const restart = document.querySelector('#restart')
const pause = document.querySelector('#pause')

let workMinutes = document.querySelector('#work_minutes')
let workSeconds = document.querySelector('#work_seconds')
let breakMinutes = document.querySelector('#break_minutes')
let breakSeconds = document.querySelector('#break_seconds')

function timer(){
    if(workSeconds.textContent != 0){
        workSeconds.textContent--;
    }else if(workMinutes.textContent != 0 && workSeconds.textContent == 0){
        workMinutes.textContent--;
        workSeconds.textContent = 59
    }

    if(workMinutes.textContent == 0 && workSeconds.textContent == 0 && breakMinutes.textContent != 0 && breakSeconds.textContent == 0){
        breakSeconds.textContent--;
    }else if(breakSeconds.textContent == 0 && breakMinutes.textContent !=0){
        breakMinutes.textContent--;
        breakSeconds.textContent = 59
    }

    let cycles = document.querySelector('#cycles')
    if(workMinutes.textContent == 0 && workSeconds.textContent == 0 && breakMinutes.textContent == 0 && breakSeconds.textContent == 0){
        cycles++;
        workMinutes.textContent = 25
        workSeconds.textContent = '00'
        breakMinutes.textContent = 5
        breakSeconds.textContent = '00'
    }
}
let startTimer;
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    }else{
        alert ('Timer is already running!')
    }
})