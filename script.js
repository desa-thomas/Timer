let h = 0; 
let m = 0; 
let s = 0; 
let interval; 
let startButton = document.getElementById("start"); 
let stopButton = document.getElementById("stop"); 

/*
Funtions --------------------------------------------------
*/

//
function get(){
    h = document.getElementById("hours").value; 
    m = document.getElementById("minutes").value; 
    s = document.getElementById("seconds").value; 
    
    console
    if(h > 24 || m > 60 || s >60)
        return -1; 

    if(h == "")
        h = 0; 
    if(m == "")
        m = 0; 
    if(s == "")
        s = 0; 
 
    let str = h + ":" + m + ":" + s + "s"
    timer.innerHTML = str; 
}

function start(){
    let i = get(); 
    if(i != -1){
        startButton.disabled = true; 
        stopButton.disabled = false; 
        interval = setInterval(timerFunc, 1000); 
    }
}

function stop(){
    startButton.disabled = false; 
    stopButton.disabled = true; 
    clearInterval(interval); 
}

function timerFunc(){
    
}

function restart(){
    h = document.getElementById("hours").value = 0; 
    m = document.getElementById("minutes").value = 0; 
    s = document.getElementById("seconds").value= 0; 

    timer.innerHTML = "0:0:0s"
}

/*
setup 
*/
const timer = document.createElement("h2"); 
timer.appendChild(document.createTextNode("0:0:0s"));
timer.setAttribute("align", "center"); 
timer.setAttribute("style","font-size:80" ); 

document.body.appendChild(timer); 
startButton.onclick = start; 
stopButton.onclick = stop; 