// 1. So Sánh Tư Duy Reactjs và Js thuần
// 1.1 js thuần
// Tư duy để tạo ra object và render ra giao diện người dùng

const h1 = document.createElement('h1');
h1.innerText = 'Hello Word';
h1.className = 'hello';
console.dir(h1);
console.log(h1);
console.log(typeof h1);
// in ra hình hình
// document.querySelector('#root').appendChild(h1);



// Reactjs
const domContainer = document.getElementById('root');
const h1React = React.createElement(
    'h1',
    {
        className: 'hello'
    }, 
    'Hello Word'
);
const root = ReactDOM.createRoot(domContainer);
// root.render(h1React);
console.log(h1React);


// <h1 class='hello'>
        // <h2><span>Xin Chào</span></h2>
// </h1>

const h2React = React.createElement(
    
    'h1',
    {
        className: 'hello'
    },
    
    React.createElement(
        'h2',
        null, 
        React.createElement('span', null, 'Xin Chào')
    )
);

root.render(h2React);
