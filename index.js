
const newYear = '20 Mar 2022 10:33:00 GMT -0500';

function countdown(){
    const newYearDate = new Date(newYear);
    const currentTime = new Date();
    
    const totalSeconds = (newYearDate - currentTime) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerHTML = '<p class="big-text" id="days">' + days + '</p><span>days</span>';
    document.getElementById("hours").innerHTML = '<p class="big-text" id="hours">' + hours + '</p><span>hours</span>';
    document.getElementById("mins").innerHTML = '<p class="big-text" id="mins">' + mins + '</p><span>mins</span>';
    document.getElementById("seconds").innerHTML = '<p class="big-text" id="seconds">' + seconds + '</p><span>seconds</span>';

    console.log(document.getElementById("seconds").innerHTML)
    
}

countdown();
setInterval(countdown, 1000);
