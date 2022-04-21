const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
  

function createElement(array) {
  array.map(element => {
    const itemEl = document.createElement('li');

    itemEl.textContent = ([element]);
    itemEl.classList.add('item');
 
    return listEl.appendChild(itemEl);
  });
  return;
  }

createElement(ingredients)