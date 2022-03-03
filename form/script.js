
let btn = document.getElementById('button');
let form = document.getElementById('form');
let lastInput = document.getElementById('input');
let counter = 1;

btn.addEventListener('click', () => {

    let newInput = lastInput.cloneNode(true);

    counter++;

    if (counter % 2 === 0) {
        newInput.value = lastInput.value.toUpperCase();
    }
    if (counter % 2 !== 0) {
    newInput.value = lastInput.value.toLowerCase();
    }
    if (lastInput.value === '555') {
        newInput.value = '---';
    }

    form.appendChild(newInput)

    lastInput = newInput;
});










