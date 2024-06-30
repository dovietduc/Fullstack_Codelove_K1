// Version 2: làm thế nào để tự động hóa cái React.createElement
// jsx: mở rộng của js -> (js + phần mở rộng của js)

// tạo object
const name = 'ducdo';
const age = 30;
const courses = [
    {name: 'toan', time: '2h'},
    {name: 'li', time: '2h'},
    {name: 'hoa', time: '1h'}
];

const helloReact = 
<h1 className='hello'>
    <h2>
        <span>Hello Word {name} {age}</span>
    </h2>

    <ul>
        {
            courses.map(
                function(element) {
                    return <li>{element.name}</li>
                }
            )
        }
    </ul>
</h1>;


// render ra người dùng
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(helloReact);












// babel
// 1. chuyển đổi xml (khá giống html) -> React.createElement tự động
// 2. cho phép bạn nhúng biểu thức javascript trong cặp thẻ {}
