// selector
const buttonHideTextSelector = document.querySelector('.hide_text');
const pElement = document.querySelector('.content_wrapper p');
const buttonShowTextSelector = document.querySelector('.show_text');
const buttonToggleTextSelector = document.querySelector('.toogle_text');


// khai báo hàm xử lí click
function handleClickHideText() {
    pElement.classList.add('hide');
}

function handleClickShowText() {
    pElement.classList.remove('hide');
}

function handleClickToggleText() {
    pElement.classList.toggle('hide');
}



// thêm sự kiện
buttonHideTextSelector.addEventListener('click', handleClickHideText);
buttonShowTextSelector.addEventListener('click', handleClickShowText);
buttonToggleTextSelector.addEventListener('click', handleClickToggleText);
