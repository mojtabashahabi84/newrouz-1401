const newYear = '20 Mar 2022 10:33:00 GMT -0500';

function countdown(){
    const newYearDate = new Date(newYear);
    const currentTime = new Date();
    
    const totalSeconds = (newYearDate - currentTime) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").textContent += days;
    document.getElementById("hours").innerText += hours;
    document.getElementById("mins").innerText += mins;
    document.getElementById("seconds").innerText += seconds;

    
}

setInterval(countdown, 1000);
