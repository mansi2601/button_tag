const buttonred = document.getElementById('buttonred');
const buttongreen = document.getElementById('buttongreen');
const outputDiv = document.getElementById('output');

buttonred.addEventListener('click', () => {
    createTag('Red');
});

buttongreen.addEventListener('click', () => {
    createTag('Green');
});

function createTag(color) {
    const tag = document.createElement('div');
    tag.textContent = color;
    tag.classList.add('tag');
    tag.style.backgroundColor = color.toLowerCase();
    outputDiv.appendChild(tag);
}



































