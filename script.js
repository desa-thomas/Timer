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
    
    if(h == "")
        h = 0; 
    if(m == "")
        m = 0; 
    if(s == "")
        s = 0; 
    //if invalid input return -1
    if(h > 24 || m > 60 || s >60 || h.length >2 || m.length >2 || s.length>2 || (h == 0 && m == 0 && s ==0))
        return -1; 
 
    let str = h + ":" + m + ":" + s; 
    timer.innerHTML = str; 
}

//start timer
function start(){
    let i = get();  
    if(i != -1){
        startButton.disabled = true; 
        stopButton.disabled = false; 
        interval = setInterval(timerFunc, 1000); 
    }
    resetInput(); 
}

//stop timer; 
function stop(){
    startButton.disabled = false; 
    stopButton.disabled = true; 
    resetInput(); 
    clearInterval(interval); 
    h = 0; 
    m = 0; 
    s = 0; 
    timer.innerHTML = "0:0:0"; 
}

//timer function to repeat and update values 
function timerFunc(){
    //if timer is done 
    if(s == 1 && m == 0 && h ==0){
        stop(); 
    }

    else{
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
        timer.innerHTML = h+":"+m+":"+s; 
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
timer.appendChild(document.createTextNode("0:0:0"));
timer.setAttribute("align", "center"); 
timer.setAttribute("style","font-size:80" ); 
document.body.appendChild(timer); 
resetInput(); 

//setup start and stop buttons
startButton.onclick = start; 
stopButton.onclick = stop; 

//make clear inputs on focus 
hours.onfocus = function(){hours.value = "";}
minutes.onfocus = function(){minutes.value = "";}
seconds.onfocus = function(){seconds.value = "";}
    
