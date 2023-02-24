const display = document.querySelector('.counter-preview');
const allBtns = document.querySelector('#allBtns');
allBtns.addEventListener('click',counter);
var value = 0;
function counter(x) {
    const btn = x.target.id;
    if(btn === 'increment'){
        value += 1;
    }
    else if(btn === 'decrement'){
        value -= 1;
    }
    else value = 0;
    display.textContent = value;
}
