const errBox = document.querySelector('.class_demo .box');
console.log(errBox);

// yêu cầu khi load trang xóa class error_message -> thêm class 'success'


const classBox = errBox.getAttribute('class');
const classBoxConvertArr = classBox.split(' ');
classBoxConvertArr.pop();
classBoxConvertArr.push('success');
const stringEnd = classBoxConvertArr.join(' ');

console.dir(errBox);

console.log(errBox.classList.contains('box'));


// xóa class bất kì
errBox.classList.remove('error_message');
// thêm class bất kì
errBox.classList.add('success');

// toogle class
errBox.classList.toggle('box');


// Sụ kiện trong js
const btn = document.querySelector('button');


// khi click button hàm này mới chạy
function handleClickButton() {
    alert('bạn đang click tôi');
}


// theo dõi button
btn.addEventListener('click', handleClickButton);

