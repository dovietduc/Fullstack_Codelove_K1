// 2. từ khóa let

let x = 10;


if(true) {
    let x = 20; 
}
x = x + 1;
console.log(x);

// let y = 20;
// let y = 100;

let y = 20;
y = 100;
console.log(y);


let z = 200;
if(true) {

    // let z = 50;

    if(true) {
        let z = 30;
        z++;

        // z tại đây
        console.log(z);
    }
    
}

z--;
// z tại đây
console.log(z);



// 1. khi nói đến từ khóa let ->  block scope
// 2. từ khóa let không cho phép khai báo lại biến
// 3. cho phép thay đổi value (gán lại value)
// 4. hoisting ?
