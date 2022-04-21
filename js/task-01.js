const itemEl = document.querySelectorAll('.item');

function createMessage(list) {
    const message = `Number of categories: ${list.length}`;
console.log(message);

list.forEach(element => {
    console.log(`Category: ` + element.firstElementChild.textContent);
    console.log(`Elements: ` + element.lastElementChild.childElementCount);
});    
};

createMessage(itemEl);