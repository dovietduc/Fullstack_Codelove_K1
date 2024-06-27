const container = document.querySelector('.container');
let isShow = true;





function renderHtmlView() {

    let classChange = '';
    if(!isShow) {
        classChange = 'hide';
    } 
    const htmlView = `
        <div class="content_wrapper">
            <div class="result">
                <p class="${classChange}">This is text This is text</p>
            </div>
            

            <div class="button_wrapper">
                <button class="hide_text">Hide Text</button>
                <button class="show_text">Show Text</button>
                <button class="toogle_text">Toogle Text</button>
            </div>
        </div>
    `;

    container.innerHTML = htmlView;
}


function showHidetext(event) {
    const clicked = event.target;
    if(clicked.classList.contains('hide_text')) {
        isShow = false;
    } else if(clicked.classList.contains('show_text')) {
        isShow = true;
    } else if(clicked.classList.contains('toogle_text')) {
        isShow = !isShow;;
    }


    // 2. render lại giao diện
    renderHtmlView();
}








renderHtmlView(); 
container.addEventListener('click', showHidetext);