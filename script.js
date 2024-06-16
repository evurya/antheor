// Afficher la page principale après 7 secondes
setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
}, 7000);

const toggle = document.getElementById('mode-toggle');
let isNightMode = true;

toggle.addEventListener('click', () => {
    document.body.classList.toggle('day-mode');
    if (isNightMode) {
        toggle.classList.remove('fa-moon');
        toggle.classList.add('fa-sun');
    } else {
        toggle.classList.remove('fa-sun');
        toggle.classList.add('fa-moon');
    }
    isNightMode = !isNightMode;
});

