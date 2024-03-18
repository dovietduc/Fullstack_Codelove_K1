/**
 * Number
 */


// var x = prompt('nhập số nguyên dương N');
// x = Number(x);

// console.log(typeof x);
// console.log(x);


/**
 * String
 * 
 */

var company = 'codelove';
var company2 = "codelove";
var company3 = `codelove`;
console.log(typeof company);

// câu hỏi: Dấu nháy đơn và dấu nháy kép khác gì nhau?
// Với dấu ``
// 1. Dùng được biểu thức js
// 2. Hiểu được kí tự xuống dòng \n

var nameInfo = 'duc';

// dùng dấu + để nối chuỗi
var nameWellcome = 'Hello ' + nameInfo;
console.log(nameWellcome);

var nameWellcome2 = `Hello ${5 / 5}`;
console.log(nameWellcome2);


// Hiểu được kí tự xuống dòng \n
var nameWellcome3 = `Xin chào các bạn, 
mình tên là đức, mình đến từ Việt Nam
`;
console.log(nameWellcome3);
var nameWellcome4 = 'xin chào các ban\n mình đến từ việt nam';
console.log(nameWellcome4);


// 3. Lưu ý nhầm lẫn giữa nối chuỗi và phép cộng (+)
console.log(2 + 5 + 'duc');
console.log('duc' + 1);
console.log(4 + 1);


// Phần Loop
// for(biểu thức 1; biểu thức 2; biểu thức 3) {
//     // mỗi lần lặp là câu lệnh thực thi
// }

// Từ ngày 1/3 -> 8/3 anh phải nấu cơm, rửa bát

// vòng lặp sơ khai
var i = 1;
for(;;) {
    if(i > 8) {
        break;
    }
    console.log('nấu cơm, rửa bát');
    i++;
}


// Vòng lặp while
var j = 1;
while(j <= 8) {
    console.log('nấu cơm, rửa bát');
    j++;
}

// Vòng lặp do while
var k = 2;
do {
    console.log('lam dc 1 lan ke ca sai');
} while(k < 1);



