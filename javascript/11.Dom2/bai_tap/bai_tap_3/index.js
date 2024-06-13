// phần khai báo selector
// Event bubbling
const boxAll = document.querySelectorAll('.box');


const colors = [
    'lightgray',
    'lightgreen',
    'lightsalmon'
];


// phần thứ 2 là các hàm khai báo
// lấy ra box 1
function changeBackground(color) {
    return function() {
        boxWrapper.setAttribute('style', `background: ${color}`);
    }

}



// Sự kiện được liệt kê ở đây
// vấn đề không thể làm thế này?
const boxWrapper = document.querySelector('.box_wrapper');
for(let i = 0; i < boxAll.length; i++) {
    boxAll[i].addEventListener('click', changeBackground(colors[i]));
}
// sự kiện hover chuột qua
// for(let i = 0; i < boxAll.length; i++) {
//     boxAll[i].addEventListener('mouseover', changeBackground);
// }