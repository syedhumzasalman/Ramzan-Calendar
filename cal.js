document.title = "Ramzan Calendar"

window.onload = function(){
    Swal.fire({
        title: "🤲 As-salamu Alaikum!",
        text: "🌙 Ramadan Mubarak! May Allah bless you with peace and happiness.",
        imageUrl: "images/Muslim Couple say hello.gif",
        confirmButtonText: "JazakAllah!",
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image"
    });
}


let currenttime = document.getElementById("currenttime");

setInterval(() => {
    currenttime.innerHTML = moment().format('h:mm:ss');
}, 1000);



let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");


function countDoown(){

    let ramzanTime = new Date("Mar 01, 2025 00:00:00").getTime() 
    let currentTime = new Date().getTime()
    
    let result = ramzanTime - currentTime;
    
    let seconds = 1000;
    let minuts = seconds * 60;
    let hour = minuts * 60;
    let day =  hour * 24

    days.textContent = String(Math.floor(result / day)).padStart(2,'0');
    hours.textContent = String(Math.floor((result % day) / hour)).padStart(2,'0');
    mins.textContent = String(Math.floor((result % hour) / minuts)).padStart(2,'0');
    secs.textContent = String(Math.floor((result % minuts) / seconds)).padStart(2,'0');
    
}
countDoown()

let count = setInterval(countDoown, 1000);

