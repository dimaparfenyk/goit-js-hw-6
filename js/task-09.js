function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const buttonChangeColorEl = document.querySelector('.change-color');
const textChangeColorEl = document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', onBodyElChangeColor);

function onBodyElChangeColor() {
  textChangeColorEl.textContent=getRandomHexColor();
  bodyEl.style.background = getRandomHexColor(); 
  bodyEl.style.background = getRandomHexColor();
};