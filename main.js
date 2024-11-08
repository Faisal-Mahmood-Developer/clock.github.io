const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

setInterval(() => {
    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * 6;
    const ss = day.getSeconds() * 6;

    hourHand.style.transform = `rotate(${hh + mm / 12}deg)`;
    minuteHand.style.transform = `rotate(${mm}deg)`;
    secondHand.style.transform = `rotate(${ss}deg)`;
}, 1000);