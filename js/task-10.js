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
  let width = 30;
  let height = 30;
  const amount = getInputValue();
  
  for (let i = 1; i <= amount; i ++) {

    const color = getRandomHexColor();
    const box = document.createElement('div');
   
    width += 10;
    height += 10;

    box.style.backgroundColor = color;
    box.style.width =width+'px';
    box.style.height = height+'px';
    boxes.push(box)
  }
  boxEl.append(...boxes)
}

function destroyBoxes() {
  return boxEl.innerHTML ='';
}