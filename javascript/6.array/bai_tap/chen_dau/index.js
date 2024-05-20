// // Input
const arrInput = [3, 7, 0, 2];
// let inputNumber = +prompt('Nhap gia tri');

// // Process
// let indexFind = arrInput.indexOf(inputNumber);


// // Output
// console.log(indexFind);


// indexOf -- khi value được tìm thấy trong mảng thì sẽ trả về index đầu tiên của value tìm thấy

// function indexOfCustom(arrInputParam, inputFind) {
//     // tìm index của 1 nếu có trong mảng
//     // không có value tồn tại trong mảng trả về -1
//     let indexFind = -1;
//     for(let i = 0; i < arrInputParam.length; i++) {
        
//         if(arrInputParam[i] === inputFind) {
//             indexFind = i;
//             break;
//         }
//     }

//     return indexFind;
// }

// let backResult = indexOfCustom(arrInput, 2);
// console.log(backResult);

// let max = arrInput[0];
// for(let i = 1; i < arrInput.length; i++) {

//     if(arrInput[i] > max) {
//         max = arrInput[i];
//     }

// }

// console.log(max);

let str = 'Aa BC d';
// 1. hoa thành thường
// 2. thường thành hoa
// 3. kí tự khác để nguyên

let capitalizeLetter = ['A', 'B', 'C', 'D'];
let lowercaseLetter = ['a', 'b', 'c', 'd'];

// let strTe

let arrConvert = [];

for(let i = 0; i < str.length; i++) {

    if(capitalizeLetter.indexOf(str[i]) !== -1) {
        arrConvert.push(str[i].toLocaleLowerCase());
    } else if(lowercaseLetter.indexOf(str[i]) !== -1) {
        arrConvert.push(str[i].toUpperCase());
    } else {
        arrConvert.push(str[i]);
    }
}

console.log(arrConvert.join(''));



arrInput.sort(
    function(a, b) {
        return b - a;
    }
);

console.log(arrInput);










