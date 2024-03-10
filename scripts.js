let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    displayTime.innerHTML = h + ":" + m + ":" + s;
}

let isRunning = false;

function watchStart(){
    if(isRunning) {
        clearInterval(timer);
        isRunning = false;
        startButton.src = "icons/play.png";
    }
    
    else {
        timer = setInterval(() => {
            stopwatch()
        }, 1000);
        isRunning = true;
        startButton.src = "icons/pause.png"
    }
}


function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0,];
    displayTime.innerHTML = "00:00:00";
}