//Trying to implement clock

const clockPid = document.getElementById('clock');

function getDetails(){
    const date = new Date();
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    let hours = date.getHours();
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    let meridian = hours >= 12 ? "AM" : "PM";
    const values = `${hours}:${minutes}:${seconds} ${meridian}`;
    clockPid.textContent =values;
}

setInterval(getDetails,1000);