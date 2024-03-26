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
    
    if(h > 24 || m > 60 || s >60)
        return -1; 

    if(h == "")
        h = 0; 
    if(m == "")
        m = 0; 
    if(s == "")
        s = 0; 
 
    let str = h + ": " + m + ": " + s + "s"
    timer.innerHTML = str; 
}

function start(){
    get(); 
    startButton.disabled = true; 
    stopButton.disabled = false; 
    interval = setInterval(timerFunc, 1000); 
}

function stop(){
    startButton.disabled = false; 
    stopButton.disabled = true; 
    clearInterval(interval); 
}

function timerFunc(){
    console.log(h); 
    h++; 
}

/*
setup 
*/
const timer = document.createElement("h2"); 
timer.appendChild(document.createTextNode("0: 0: 0 s"));
timer.setAttribute("align", "center"); 
timer.setAttribute("style","font-size:80" ); 

document.body.appendChild(timer); 
startButton.onclick = start; 
stopButton.onclick = stop; 