let timer = document.querySelector('.timer');
const buttons = document.querySelectorAll('.btn');
let countdown;

function timerUpdate(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            console.log("time expired");
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display + " Pomodoro";
    timer.textContent = display;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timerUpdate(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
