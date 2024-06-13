// 1. Overview DOM
const pFirst = document.querySelector('p');
console.log(pFirst);
console.log(typeof pFirst);
console.dir(pFirst);

// 2. Lấy ra nhiều object trong DOM
const pAll = document.querySelectorAll('p');
for(let i = 0; i < pAll.length; i++) {
    console.log(pAll[i]);
}


pFirst.innerText = 'First para update';


const pHot = document.querySelector('.hot');
pHot.innerHTML = pHot.innerHTML + '<h2>Xin CHào các bạn</h2>';
console.dir(pHot);


// 2. Hướng Đối Tượng Js
