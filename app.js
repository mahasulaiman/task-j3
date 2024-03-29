let time = 0;
let timerId = 0;
let timerOut = true;

const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#time-display");

const initClock = () => {
timerOut = false;
timerId = setInterval( () =>{
    time++;
    timerCount();
}, 1000);
};

const timerCount = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    if (sec < 10){
        timer.innerHTML = `${min}:0${sec}`;
    } else {
        timer.innerHTML = `${min}:${sec}`;
    }
};
const stopClock = () => {
    clearInterval(timerId);
};

start.addEventListener("click", function(){
    if (timerOut) {
        initClock();
    }
});

reset.addEventListener("click", function () {
    stopClock();
    timerOut = true;
    time = 0;
    timerCount();
});
