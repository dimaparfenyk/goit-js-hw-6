function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('#controls>input');
const createBtnEL = document.querySelector('[data-create]');
const destroyBtnEL = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

  boxEl.style.display = 'flex';
  boxEl.style.flexDirection = 'row';
  boxEl.style.justifyContent = 'space-between';

createBtnEL.addEventListener('click', createBoxes);
destroyBtnEL.addEventListener('click', destroyBoxes);

function createBoxes() {
  const getInputValue=() => Number(inputEl.value);
 
  let boxes = [];
 const amount = getInputValue();
  
  for (let i = 1; i <= amount; i ++) {

    const color = getRandomHexColor();
    
    const box = document.createElement('div');

    box.style.backgroundColor = color;
    box.style.width = 20 + i * 10+'px';
    box.style.height = 20 + i * 10+'px';
    boxes.push(box)
  }
  boxEl.append(...boxes)
}

function destroyBoxes() {
 return boxEl.innerHTML ='';
}