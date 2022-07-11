const btnChangeColor = document.querySelector('.change-color');
const hexColorValue = document.querySelector('.color');
const bodyRef = document.querySelector('body');


btnChangeColor.addEventListener('click', () => {
  bodyRef.style.background = getRandomHexColor();
  hexColorValue.textContent = bodyRef.style.background;  
})  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}