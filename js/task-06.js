const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    if (event.target.dataset.length == event.target.value.length) {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');   
    } else {
      event.target.classList.remove('valid');
      event.target.classList.add('invalid');
    }
};