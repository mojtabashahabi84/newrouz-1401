let newYear = '20 Mar 2022';

function countdown(){
    let newYearDate = new Date(newYear);
    let currentTime = new Date();
    
    let totalSeconds = (newYearDate - currentTime) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = mins;
    document.getElementById("seconds").innerText = seconds;

    
}

setInterval(countdown, 1000);
