const inputData = document.querySelector('input');
const textStr = document.querySelector('#text');

inputData.addEventListener('input', () => {
    textStr.style.fontSize = event.currentTarget.value+'px';     
})