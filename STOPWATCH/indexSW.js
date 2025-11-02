
sw = document.getElementById("sw");
startBtn = document.getElementById("startbtn");
stopBtn = document.getElementById("stopbtn");
resetBtn = document.getElementById("resetbtn");
listBtn = document.getElementById("listtimebtn");
timeList = document.getElementById("timelist");

let miliSeconds = 0;
let seconds=0;
let minutes=0;
let hours=0;
let timerinterval;
let isRunning = true;
    
startBtn.onclick = watchCounter;


function watchCounter(){
    if(isRunning===true){
            timerinterval  = setInterval(() => {
            miliSeconds+=1;
            let time = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${miliSeconds.toString().padStart(2,0)}`;
            sw.textContent = time;
            if (miliSeconds==100){
                miliSeconds=0;
                seconds++;
                sw.textContent = ` ${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${miliSeconds.toString().padStart(2,0)}`;
            }
            if (seconds==60){
                seconds=0;
                minutes++;
                sw.textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${miliSeconds.toString().padStart(2,0)}`;
            }
            if (minutes==60){
                minutes=0;
                hours++;
                sw.textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${miliSeconds.toString().padStart(2,0)}`;
            }
    },10)
 isRunning = false;
}
}


stopBtn.onclick = function stop(){
    clearInterval(timerinterval);
    isRunning = true;
};
resetBtn.onclick = function(){
    hours = 0;
    minutes = 0;
    seconds = 0;  
    miliSeconds = 0;
    sw.textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${miliSeconds.toString().padStart(2,0)}`;
    clearInterval(timerinterval);
    isRunning = true; 
} 

listBtn.onclick = function(){
    let list = document.createElement("li");
    list.textContent = `hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}, miliseconds: ${miliSeconds} `;
    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.style.marginLeft = "16px";
    removeBtn.style.background = "#e74c3c";
    removeBtn.style.color = "#fff";
    removeBtn.style.border = "none";
    removeBtn.style.borderRadius = "50%";
    removeBtn.style.width = "28px";
    removeBtn.style.height = "28px";
    removeBtn.style.cursor = "pointer";
    removeBtn.onclick = function() {
        list.remove();
    };
    list.appendChild(removeBtn);
    timeList.appendChild(list);
}