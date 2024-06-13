// 1. khai báo
const nextButtonSelector = document.querySelector('.next');
const imageAllSelector = document.querySelectorAll('.images > img');
const buttonAllSelector = document.querySelectorAll('.dots > button');


// tương ứng với chỉ số của ảnh số 1 đang show ra
let index = 0;

const images = [
    '1.avif',
    '2.jpg',
    '3.jpg',
    '4.jpg',
];

function initImage() {
    let htmlImage = '';
    let buttonHtml = '';
    for(let i = 0; i < images.length; i++) {
        if (i === index) {
            htmlImage = htmlImage + `<img src="images/${images[i]}" alt="">`;
            buttonHtml = buttonHtml + `<button class="active"></button>`;
        } else {
            htmlImage = htmlImage + `<img src="images/${images[i]}" alt="" class="hide">`;
            buttonHtml = buttonHtml + `<button></button>`;
        }
        
    }

    // render image
    document.querySelector('.images').innerHTML = htmlImage;
    // render dots
    document.querySelector('.dots').innerHTML = buttonHtml;
}


// các ham xu li
function handleNextButton() {

    index = index + 1;
    if(index > images.length - 1) {
        index = 0;
    }
    // render lại giao diện
    initImage();
}







// phần thêm sự kiện
nextButtonSelector.addEventListener('click', handleNextButton);
initImage();


