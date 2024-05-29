const bells = new Audio('./siunds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');

let myInterval;
let state = true; // if the application is running so the timer progresses

const appTimer = () => {

    const sessionAmount = Number.parseInt(session.textContent)
    
    if(state){
        state = false;
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () => {

        }

        myInterval = setInterval(updateSeconds, 1000);
    }
    else{
        alert('session has already started')
    }
}