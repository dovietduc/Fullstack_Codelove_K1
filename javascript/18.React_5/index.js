// 1. khi nào closure được sinh ra?

function init() 
{

    let name = 'ducdo';
    let age = 20;

    function displayName() 
    {
        console.log('name', name);
        age++;
        
    }

    console.dir(displayName);

    
    return displayName;


}

// sau khi chạy xong dòng này --- gọi function bên ngoài
let displayNameInstance = init();
// khi chạy xong return nó đã bao gồm các tham chiếu đến môi trường bên ngoài

// chạy thì nó lấy từ bộ nhớ ra và in kết quả
displayNameInstance();

// 2. khi hàm được khai báo trong 1 hàm 
//khác nó được hiểu là closuer-> nó được bao đóng trong hàm khác



function counter(counterInit = 100) 
{

    let counter = counterInit;
    
    function increment() {
        counter++;
    }

    function decrement() {
        counter--;
    }

    function getValue(){
        return counter;
    }

    return {
        increment,
        decrement,
        getValue
    }

}


let instanceConter = counter(200);
instanceConter.increment();
instanceConter.increment();
instanceConter.decrement();
console.log(instanceConter.getValue());


// tạo ra 2 bộ nhớ hoàn toàn độc lập mỗi khi bạn gọi hàm bên ngoài để tạo closure
let instanceConter2 = counter();
instanceConter2.decrement();
console.log(instanceConter2.getValue());



