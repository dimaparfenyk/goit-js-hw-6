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
  let newAr = [];

  array.map(element => {
    const el = document.createElement('li');

    el.textContent = ([element]);
    el.classList.add('item');
    newAr.push(el)
   
  });
   listEl.append(...newAr);
  }

createElement(ingredients)