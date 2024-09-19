const lamp = document.getElementById('lamp');
const button = document.getElementById('change-lamp');

button.addEventListener('click', clicker);

function clicker () {
    lamp.style.backgroundColor = (lamp.style.backgroundColor === 'lightgray') ? 'yellow' : 'lightgray';
    lamp.style.borderColor = (lamp.style.backgroundColor === 'yellow') ? 'white' : 'darkgray';
    button.textContent = (lamp.style.backgroundColor === 'yellow') ? 'Вимкнути лампочку' : 'Увімкнути лампочку';
};