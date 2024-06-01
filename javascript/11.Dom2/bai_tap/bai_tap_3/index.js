// phần khai báo selector
const boxAll = document.querySelectorAll('.box');
const boxWrapper = document.querySelector('.box_wrapper');



// phần thứ 2 là các hàm khai báo
// lấy ra box 1
function changeBackground(event) {

    const currentElementClick = event.target;
    const colorClick = currentElementClick.getAttribute('data-color');


    // thay đổi cho bên ngoài
    boxWrapper.setAttribute('style', `background: ${colorClick}`);

}








// Sự kiện được liệt kê ở đây
// vấn đề không thể làm thế này?
for(let i = 0; i < boxAll.length; i++) {
    boxAll[i].addEventListener('click', changeBackground);
}
// sự kiện hover chuột qua
for(let i = 0; i < boxAll.length; i++) {
    boxAll[i].addEventListener('mouseover', changeBackground);
}