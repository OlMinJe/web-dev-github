

//타이머
let time = 0; // 초기 시간
let timerScreen = document.querySelector(".timer .screen");
let timerMin = document.querySelector("#timerStartMin");
let min = parseInt(document.querySelector("#timerStartMin").value);
let timerSec = document.querySelector("#timerStartSec");
let sec = parseInt(document.querySelector("#timerStartSec").value);
let timerStartBtn = document.getElementById("timer-start-btn");

timerScreen.innerHTML = `0분 0초`;

timerStartBtn.onclick = setInterval(function() {

    let time = min*60 + sec;

        if(time >= 0) {
            timerScreen.innerHTML = `${parseInt(time/60)}분 ${time%60}초`;
            console.log(time, min, sec);
            min--;
            sec--;
        }
        if (time < 0) {
            clearInterval(time);
            timerScreen.innerHTM = "종료";
        }
    }, 1000);

// 스톱워치 
let seconds = 0; 
let centiseconds = 0;
let spanSeconds = document.getElementById('seconds');
let spanCentiseconds = document.getElementById('centiseconds');
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let interval;  
 
buttonStart.onclick = function() {
    if(buttonStart.disabled == false) {    
        interval = setInterval(startTimer, 10); 
        buttonStart.disabled = true;  
    }
}
 
buttonStop.onclick = function() {
    clearInterval(interval); 
    buttonStart.disabled = false;
}
 
buttonReset.onclick = function() {
    buttonStart.disabled == false; 
    clearInterval(interval); 
    centiseconds = 0;
    seconds = 0;
    spanCentiseconds.innerText = '00';
    spanSeconds.innerText = '00';
}
 
function startTimer() { // 1초, 2초......시간 계산하는 함수
  centiseconds++;  // 1증가 // centiseconds = centiseconds + 1
  if(centiseconds <= 9) spanCentiseconds.innerText = '0'+centiseconds;
  else spanCentiseconds.innerText = centiseconds;
 
  if(centiseconds > 99) {
    seconds++; // 1초 상승
    if(seconds <= 9) spanSeconds.innerText = '0' + seconds;
    else spanSeconds.innerText = seconds;
    centiseconds = 0;
    spanCentiseconds.innerText = '00';
  }
}
