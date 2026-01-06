let count = 0;
let text = "hi, i'm joe.";
let baseSpeed = 150;
let variance = 50;

function typewriter() {
    if (count < text.length) {
        document.getElementById("splash").innerHTML += text.charAt(count);
        count++;
        let speed = baseSpeed + Math.random() * variance;
        setTimeout(typewriter, speed);
    }
}