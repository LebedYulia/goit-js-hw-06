const btnChangeColor = document.querySelector('.change-color');
const hexColorValue = document.querySelector('.color');
const bodyRef = document.querySelector('body');


btnChangeColor.addEventListener('click', () => {
  const colorVar =  getRandomHexColor();
  bodyRef.style.background = colorVar;
  hexColorValue.textContent = colorVar;  
})  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}