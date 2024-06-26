//global variables 
let h = 0; 
let m = 0; 
let s = 0; 

let interval; 
let startButton = document.getElementById("start"); 
let stopButton = document.getElementById("stop"); 

let hours = document.getElementById("hours"); 
let minutes = document.getElementById("minutes"); 
let seconds = document.getElementById("seconds")

/*
Funtions ------------------------------------------------------------
*/

//get values from number input 
function get(){
    h = hours.value; 
    m = minutes.value; 
    s = seconds.value; 
 
    //if invalid input return -1
    if(h > 23 || m > 59 || s >59 || h.length >2 || m.length >2 || s.length>2 || (h == 0 && m == 0 && s ==0))
        return -1; 

 
    let str = getStr(); 
    timer.innerHTML = str; 
}

//get string for timer
function getStr(){  
    let strH  = h; 
    let strM = m; 
    let strS = s; 

    if(h < 10)
        strH = '0' + h; 
    if(m < 10)
        strM = '0' + m; 
    if(s < 10)
        strS = '0' + s; 

    let str = strH + ":"+ strM +":"+ strS; 
    return str; 
}

//start timer
function start(){
    let i = get();  
    if(i != -1){
        startButton.disabled = true; 
        stopButton.disabled = false; 
        hours.disabled = true; 
        minutes.disabled = true; 
        seconds.disabled = true; 
        interval = setInterval(timerFunc, 1000); 
    }
}

//stop timer; 
function stop(){
    alarm.pause(); 
    alarm.currentTime = 0; 

    startButton.disabled = false; 
    stopButton.disabled = true; 

    hours.disabled = false; 
    minutes.disabled = false;  
    seconds.disabled = false; 

    resetInput(); 
    clearInterval(interval); 
    h = 0; 
    m = 0; 
    s = 0; 
    timer.innerHTML = "00:00:00"; 
}

//timer function to repeat and update values 
function timerFunc(){
    //skip if timer is done and waiting to stop
    if(s == 0 && m == 0 && h == 0)
        return; 

    //if timer is done play sound 
    else if(s == 1 && m == 0 && h ==0){
        alarm.play(); 
        s--; 
        timer.innerHTML = getStr();  
    }

    //if timer is not 00:00:00
    else {
    //if seconds is 0 and m is 0 and h > 0{}
        if(s == 0 && m == 0 && h > 0){
            h--; 
            m = 59; 
            s = 60; 
        }

    //if seconds is 0 and m > 0
        else if(s == 0 && m > 0){
            m --; 
            s = 60; 
        }
        s--; 
        timer.innerHTML = getStr();  
    }
}

//reset the input fields
function resetInput(){
    hours.value = 0; 
    minutes.value = 0; 
    seconds.value= 0; 
}


/*
setup 
*/

//create the h2 element that will hold the timer 
const timer = document.createElement("h2"); 
timer.appendChild(document.createTextNode("00:00:00"));
timer.setAttribute("align", "center"); 
timer.setAttribute("style","font-size:80" ); 
document.body.appendChild(timer); 
resetInput(); 

const alarm = document.createElement("audio"); 
alarm.src = "assets/alarm-clock.mp3"; 
document.body.appendChild(alarm); 

//setup start and stop buttons
startButton.onclick = start; 
stopButton.onclick = stop; 

//make clear inputs on focus 
hours.onfocus = function(){hours.value = "";}
minutes.onfocus = function(){minutes.value = "";}
seconds.onfocus = function(){seconds.value = "";}
    
