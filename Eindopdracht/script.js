document.addEventListener('DOMContentLoaded', function (){
const stukjes = [];
const gridgrote = 3;
const puzzleContainer = document.getElementById('puzzle-container');

for (var i = 0; i < gridgrote * gridgrote; i++) {
    const stukje = document.createElement('div');
    stukje.classList.add('stukje');
    stukje.setAttribute('draggable', 'true');
    stukje.dataset.add = i + 1;
    stukje.style.backgroundImage = 'url("images\${i + 1}.gif"';
    stukjes.push(stukje);
}

const emptySlot = document.createElement('div');
emptySlot.classList.add('empty-slot');
stukjes.push(emptySlot);
stukjes.sort(() => Math.random() - 0.5);

 














});