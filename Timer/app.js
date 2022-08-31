let startBtn = document.querySelector("#start-button");
let stopBtn = document.querySelector("#stop-button");
let resetBtn = document.querySelector("#reset-button");
let timer = document.querySelector("#timer");

let milliSeconds=00;
let seconds=00;
let minutes=00;
let Interval;

//START BUTTON CLICK EVENT
startBtn.addEventListener("click",function(){
    clearInterval(Interval);
    this.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    Interval = setInterval(startTimer, 1);
});

//STOP BUTTON CLICK EVENT
stopBtn.addEventListener("click",function(){
    this.setAttribute('disabled', '');
    startBtn.removeAttribute('disabled');
    resetBtn.removeAttribute('disabled');
    
    clearInterval(Interval);
});

//RESET BUTTON CLICK EVENT
resetBtn.addEventListener("click",function(){
    clearInterval(Interval);
    startBtn.removeAttribute('disabled');
    this.setAttribute('disabled','');
    timer.innerHTML = "00:00:000";
});

function startTimer () {
    milliSeconds+=4; 
    
    if(milliSeconds == 1000){
        milliSeconds = 0;
        seconds++;
        if (seconds==60) {
            seconds = 0;
            minutes++;
        }
    }

 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliSeconds < 10 ? "00" + milliSeconds : milliSeconds < 100 ? "0" + milliSeconds : milliSeconds;

    timer.innerHTML = `${m}:${s}:${ms}`;
  } 
