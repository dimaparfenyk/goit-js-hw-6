const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
// console.log(textEl)
// console.log(textEl.style)
// console.log(textEl.style.fontSize)

fontSizeControlEl.addEventListener('input', onFontSizeControlChange);

function onFontSizeControlChange(event) {
    textEl.style.fontSize = `${ event.currentTarget.value }px`;
};