const currentValue = document.querySelector('#value');
let initialValue = currentValue.textContent;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');


incrementBtn.addEventListener('click', () => {
    initialValue ++; 
    currentValue.textContent = initialValue; 
});

decrementBtn.addEventListener('click', () => {
    initialValue --; 
    currentValue.textContent = initialValue; 
});