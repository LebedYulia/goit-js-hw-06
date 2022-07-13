const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');


btnCreate.addEventListener('click', createBoxes);

btnDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = '';
})


function createBoxes() { 

   const amount = inputRef.value;
   const arrayNewEl = [];

   for (let i = 0; i < amount; i++) {
      const newEl = document.createElement('div');      
      newEl.style.width = 30 + 10 * i + "px"
      newEl.style.height = 30 + 10 * i + "px";  
      newEl.style.background = getRandomHexColor();    
      arrayNewEl.push(newEl);      
    }  

    divBoxes.append(...arrayNewEl);  
}        

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
