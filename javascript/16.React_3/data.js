// Mục tiêu sẽ là export thông tin ở đây
// có 2 loại export -> 1. export thông thường (export dc nhiều thứ)
// 2. export default mặc định -> chỉ export 1 thứ

function getName(){
    console.log('get name');
}

function getAge() {
    console.log('get age');
}

function getSex() {
    console.log('get sex');
}

export default function getProduct() {
    console.log('get product');
}

export {getName, getAge, getSex};
