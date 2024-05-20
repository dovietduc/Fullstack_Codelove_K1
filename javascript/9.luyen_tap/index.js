// 1. Hoisting ===== Hoisting --- let, const có hoisting hay không?


// 1.1 Hoisting là gì? (kéo lên)
//  Hoisting nghĩa là cẩu phần khai báo biến lên trên phạm vi 
//nó đang được khai báo
console.log(x);

var x = 10;

// 2. kết luật: var có hoisting

// console.log(y);
// console.log(z);


let y = 20;

// z is not defined
// Cannot access 'y' before initialization

// 3. let, const have hoisting ---


// 4. sự nhầm lẫn khi không hiểu rõ nó đưa lên đâu?

function checkScope() {
    var scopeCheck;

    if(false){
        scopeCheck = 50;
    }

    console.log(scopeCheck);
}

checkScope();
console.log(scopeCheck);