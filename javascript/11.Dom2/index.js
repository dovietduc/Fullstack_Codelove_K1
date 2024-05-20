// 1. Cách lấy các object
// 1.1 Lấy ra 1 object

const container = document.querySelector('.container');

const pSecond = container.querySelector('p.abc');
console.log(pSecond);


// 1.2 Lấy ra nhiều object

const pAll = container.querySelectorAll('p');
for(let i = 0; i < pAll.length; i++) {
    console.log(typeof pAll[i]);
    console.log(pAll[i]);
}


// 2. Thay đổi nội dung trên trang web --> thay đổi object
// 2.1 Thay đổi nội dung dưới dạng text
const divMessage = document.querySelector('.error');
console.log(divMessage.innerText);
divMessage.innerText = divMessage.innerText + ' update'; 

// 2.2 Thay đổi nội dung dưới dạng html
const contentDiv = document.querySelector('.content');
contentDiv.innerHTML += '<p>Chém gió</p>';


// 3. Học về atribute


