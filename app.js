const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');

let myInterval;
let state = true; // if the application is running so the timer progresses

const appTimer = () => {

    const sessionAmount = Number.parseInt(session.textContent)
    
    if(state){
        state = false;
        let totalSeconds = sessionAmount * 60;
        let elapsedSeconds = 0;

        const updateSeconds = () => {
            const minuteDiv = document.querySelector('.minutes');
            const secondDiv = document.querySelector('.seconds');

            totalSeconds--;
            elapsedSeconds++;

            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;
            
            if(secondsLeft < 10){
                secondDiv.textContent = '0' + secondsLeft;
            }
            else {
                secondDiv.textContent = secondsLeft;
            }

            minuteDiv.textContent = `${minutesLeft}`

            const percentageElapsed = (elapsedSeconds / (sessionAmount * 60)) * 100;

            if (percentageElapsed <= 50) {
                rightSide.style.transform = `rotate(${-(percentageElapsed / 50) * 180}deg)`;
                // leftSide.style.transform = 'rotate(0deg)';
            } else {
                // rightSide.style.transform = 'rotate(180deg)';
                leftSide.style.transform = `rotate(${-((percentageElapsed - 50) / 50) * 180}deg)`;

            }

            if(minutesLeft === 0 && secondsLeft === 0){
                bells.play()
                clearInterval(myInterval);
                state = true;
                minuteDiv.textContent = '5';
            }
        };

        myInterval = setInterval(updateSeconds, 1000);
    }
    else{
        alert('session has already started')
    }   
};

startBtn.addEventListener('click', appTimer);