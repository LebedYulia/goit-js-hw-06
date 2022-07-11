const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
    if (event.currentTarget.value !== "") {
        outputName.textContent = event.currentTarget.value;
    } if (event.currentTarget.value === "") {
        outputName.textContent = 'Anonymous';
    }     
})