let count = 0;
let text = "hi, i'm joe.";
let baseSpeed = 150;
let variance = 50;

function typewriter() {
    const splash = document.getElementById("splash");
    if (splash && count < text.length) {
        splash.innerHTML += text.charAt(count);
        count++;
        let speed = baseSpeed + Math.random() * variance;
        setTimeout(typewriter, speed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        updateIcon(currentTheme);
    }
});

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
}

function updateIcon(theme) {
    const sun = document.getElementById('sun-icon');
    const moon = document.getElementById('moon-icon');
    
    if (!sun || !moon) return;

    if (theme === 'dark') {
        sun.style.display = 'none';
        moon.style.display = 'inline';
    } else {
        sun.style.display = 'inline';
        moon.style.display = 'none';
    }
}