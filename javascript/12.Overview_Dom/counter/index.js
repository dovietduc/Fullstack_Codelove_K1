// 1. khai báo selecttor
const buttonIncreSelector = document.querySelector('.increment');
const resultSpanSelector = document.querySelector('.result span');
const buttonDecreSelector = document.querySelector('.decrement');
const box1Selector = document.querySelector('.box1');
const boxContainer = document.querySelector('.box_flex');

let counter = 1;



function handleIncrement() {
    counter++;
    // thay đổi kết quả
    renderResult();
}

function handleDecrement() {
    counter--;
    // thay đổi kết quả
    renderResult();
}


// render giao diện
function renderResult() {
    const htmlResult = `<span>${counter}</span>`;
    document.querySelector('.result').innerHTML = htmlResult;
}

function handleClickBox() {
    console.log(1);
}






// thêm sự kiện
buttonIncreSelector.addEventListener('click', handleIncrement);
buttonDecreSelector.addEventListener('click', handleDecrement);



boxContainer.addEventListener('click', handleClickBox);



// Event Bubbling