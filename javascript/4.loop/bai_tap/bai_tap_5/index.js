
// cách 1
// for(let row = 1; row <= 5; row++) {

//     let str = '';
//     // in ra space đứng trước ở mỗi hàng
//     for(let j = 1; j <= (expression1); j++) {
//         str = str + ' ';
//     }

//     // in ra hình sao
//     for(let k = 1; k <= (expression12); k++) {
//         str = str + '*';
//     }


//     console.log(str);


// }


// cách 2
for(let row = 1; row <= 5; row++) {

    let str = '';

    // Mỗi lần chạy in ra cả space + sao

    // --> space cũng phụ thuộc row
    // --> sao cũng phụ thuộc row
    for(let j = 1; j <= 4 + row; j++) {
        
        // nêú như thế này thì hiện sao
        // nếu như thế kia thì hiện space

        if (j <= 5 - row) {
            str = str + ' ';
        } else {
            str = str + '*';
        }
       
    }

    console.log(str);

}

// cách 3

for(let row = 1; row <= 5; row++) {

    let str = ''; 

    // in ra space đứng trước ở mỗi hàng
    str = str + ' '.repeat(5 - row);

    // in ra sao
    str = str + '*'.repeat(2 * row - 1);


    console.log(str);

}

// 1. Mảng

// 1. 1 Tại sao chúng ta cần mảng



// 1.2 cách khai báo mảng trong js

let courses = [
    'js',
    'php',
    'java'
];

// dựa vào biến courses để truy xuất các value beeb trong



