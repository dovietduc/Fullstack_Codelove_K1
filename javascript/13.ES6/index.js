// ES6
// 1. callback là gì?

// khai báo hàm
function getSutdents(studentInfo) {

    let age = 17;
    // gọi hàm con trong body hàm cha
    studentInfo(age);

}


// thực thi hàm
let student = function(ageStudent) {

    // ở đây cũng sẽ lấy được thông tin tuổi 17

    console.log('sinh vien', ageStudent);
};


// gọi hàm chính và truyền khai báo hàm con
getSutdents(student);


// 1. chúng ta truyền 1 function khai báo dưới dạng tham số cho 1 hàm đang gọi
// 2. chúng ta sẽ gọi hàm được truyền dưới dạng tham số trong phần body của hàm đang gọi

// 3. như vậy hàm truyền vào được gọi sau khi hàm chính được gọi --> callback
// call back giúp truyền data trong quá trình runtime ở 2 scope độc lập



const students = [
    10,
    8,
    6
];

// yêu cầu: 
// nhân các điểm số của sinh viên lên 2 lần (ngày 10/11 leader)
let arrNew = [];
for(let i = 0; i < students.length; i++) {
    let point = students[i] * 2;
    arrNew.push(point);
}

console.log(arrNew);


// nhân các điểm số của sinh viên lên 3 lần (ngày 17/11 leader)
let arrNew2 = [];
for(let i = 0; i < students.length; i++) {
    let point = students[i] * 3;
    arrNew2.push(point);
}

console.log(arrNew2);



// nhân các điểm số của sinh viên lên 4 lần (ngày 24/11 leader)
let arrNew3 = [];
for(let i = 0; i < students.length; i++) {
    let point = students[i] * 4;
    arrNew3.push(point);
}

console.log(arrNew3);