// Bước 1: render giao diện người dùng khi load trang lần đầu tiên
const domContainer = document.getElementById('root');


// component
function Counter() {

    // 1. khai báo state
    // giá trị bên tay phải truyền vào đầu tiên là giá trị khởi tạo ban đầu của biến
    // khi cần update biến -> gọi đến setState -> hàm render lại -> counter lại

    let [counter, setCounter] = React.useState(1);

    const handleIncrement = function() {
        counter++;
        setCounter(counter);
    }


    return (
        <div className="counter">
            <div className="result">
                {counter}
            </div>


            <button onClick={handleIncrement}>Increment</button>
            
        </div>
    );
}


const root = ReactDOM.createRoot(domContainer);
root.render(<Counter/>);


// với state của react
// khi gọi setState -> component -> re-render










