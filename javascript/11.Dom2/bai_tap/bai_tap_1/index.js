// selector
const buttonHideTextSelector = document.querySelector('.hide_text');
const pElement = document.querySelector('.content_wrapper p');
const buttonShowTextSelector = document.querySelector('.show_text');
const buttonToggleTextSelector = document.querySelector('.toogle_text');

let isShow = true;


// khai báo hàm xử lí click
function handleClickHideText() {
    isShow = false;
    renderResult();
}

function handleClickShowText() {
    isShow = true;
    renderResult();
}

function handleClickToggleText() {
    isShow = !isShow;
    renderResult();
}

function renderResult() {
    let htmlResult = '';
    if(isShow) {
        htmlResult = `<p>This is text This is text</p>`;
    } else {
        htmlResult = `<p class="hide">This is text This is text</p>`;
    }
    document.querySelector('.result').innerHTML = htmlResult;
}



// thêm sự kiện
buttonHideTextSelector.addEventListener('click', handleClickHideText);
buttonShowTextSelector.addEventListener('click', handleClickShowText);
buttonToggleTextSelector.addEventListener('click', handleClickToggleText);
