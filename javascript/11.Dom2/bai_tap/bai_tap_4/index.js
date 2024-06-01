// 1. khai báo
const nextButtonSelector = document.querySelector('.next');
const imageAllSelector = document.querySelectorAll('.images > img');
const buttonAllSelector = document.querySelectorAll('.dots > button');


// tương ứng với chỉ số của ảnh số 1 đang show ra
let index = 0;



// các ham xu li
function handleNextButton() {
    // 1. ẩn tất các ảnh khác
    for(let i = 0; i < imageAllSelector.length; i++) {
        imageAllSelector[i].classList.add('hide');
    }
    // 2. Hiển thị ảnh kế tiếp
    index = index + 1;
    // khi vượt qua ảnh cuối cùng thì gắn lại index = 0
    if(index > imageAllSelector.length - 1) {
        index = 0;
    }
    imageAllSelector[index].classList.remove('hide');


    // 3. xóa tất cả class active trong tất cả button
    for(let i = 0; i < buttonAllSelector.length; i++) {
        buttonAllSelector[i].classList.remove('active');
    }
    // 4. active button tương ứng
    buttonAllSelector[index].classList.add('active');

}







// phần thêm sự kiện
nextButtonSelector.addEventListener('click', handleNextButton);


