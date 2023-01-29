const clock = document.querySelector("h2");

const date = new Date();
const thisyear = String(date.getFullYear());
const masTime = new Date(`${thisyear}-12-25`);

function format(ms) {
    return String(Math.floor(ms)).padStart(2, "0");
}

function diffToChristmas() {
    const nowTime = new Date();
    const diff = masTime - nowTime;
    
    const diffDay = format(diff / (1000*60*60*24));
    const diffHour = format((diff / (1000*60*60)) % 24);
    const diffMin = format((diff / (1000*60)) % 60);
    const diffSec = format(diff / 1000 % 60);

    clock.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

diffToChristmas();
setInterval(diffToChristmas, 1000);