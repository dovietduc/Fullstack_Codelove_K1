const aLink = document.querySelector('.attribute a');

// lấy ra value attribute bất kì theo tên attribute
console.log(aLink.getAttribute('class'));
// gán lại value mới
aLink.setAttribute('href', 'https://codelove.vn');
aLink.innerText = 'Codelove';


// 2. vấn đề phát sinh khi setAttribute cho style
const button = document.querySelector('button');
button.style.margin = '50px';
button.style.padding = '50px';
button.style.fontSize = '50px';
