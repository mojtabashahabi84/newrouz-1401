let newYear = '2023-03-20T14:22:12';

function zeroOrPos(number){
    if (number < 0) {
        return 0;
    } else {
        return number;
    }
}

function countdown(){
    let newYearDate = new Date(newYear.replace(/\s/, 'T'));
    let currentTime = new Date();
    
    let totalSeconds = (newYearDate - currentTime) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").textContent = zeroOrPos(days);
    document.getElementById("hours").innerText = zeroOrPos(hours);
    document.getElementById("mins").innerText = zeroOrPos(mins);
    document.getElementById("seconds").innerText = zeroOrPos(seconds);

    
}

setInterval(countdown, 1000);
