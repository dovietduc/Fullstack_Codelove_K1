/**
 * 1. Tại sao cần mảng
 *  
 * 
 * */ 
// Đề bài: cần lưu trữ khóa học của anh trên Udemy

let courseJs = 'Jonas';
let courseJava = 'CodewithMosh';
let coursePython = 'Jonas2';

// --> 1 biến cần có bộ nhớ để lưu trữ : 4 byte x 100 = 400
let coursesOfMy = [
    'Jonas',
    'CodewithMosh',
    'Jonas2'
];

// --> 1 biến cần có bộ nhớ để lưu trữ : 4 byte x 100 = 400


/**
 * 2. các thông tin liên quan đến mảng
 */
// 2.1 chiều dài của mảng hay còn gọi là giới hạn mảng
console.log(coursesOfMy.length);
// truy cập dưới dạng ngoặc vuông
console.log(coursesOfMy);
// [0 đến length - 1]
console.log(coursesOfMy[0]);
console.log(coursesOfMy[1]);
console.log(coursesOfMy[2]);


/**
 * 3. tìm ra index hay vị trí của phần tử với value bất kì (Jonas)
 */
console.log('index cần tìm', coursesOfMy.indexOf('Jonas'));
console.log('index cần tìm', coursesOfMy.indexOf('Jonas2'));
console.log('index cần tìm', coursesOfMy.indexOf('CodewithMosh'));


/**
 * 4. Thêm phần tử vào mảng
 */
// vào cuối mảng
let courses = coursesOfMy.push('ducdo', 'dung2');
console.log(coursesOfMy);
console.log(courses);

// vào đầu mảng
coursesOfMy.unshift();
console.log(coursesOfMy);


/**
 * 5. xóa phần tử khỏi mảng
 */
// xóa phần tử cuối
coursesOfMy.pop();
console.log(coursesOfMy);
// xóa phần tử đầu
coursesOfMy.shift();
console.log(coursesOfMy);
// xóa ở bất kì vị trí nào
// 1. tìm ra index -> xóa
coursesOfMy.splice(1, 1);
console.log(coursesOfMy);


/**
 * 6. cách truy cập phần tử mảng dynamic
 */
// length = 100 -> index cuối cùng là 99
// mảng[0]..... mang[99]
for(let i = 0; i < coursesOfMy.length; i++) {
    console.group();
    console.log('lần chạy thứ', i);
    console.log(coursesOfMy[i]);
    console.groupEnd();
}


// 7. convert string to array và ngược lại
// string to array sử dụng split
let strConvert = 'duc,dung,manh,hunch';
let arrConvert = strConvert.split(',');
console.log(arrConvert);
// array to string
let joinResult = arrConvert.join('_');
let toStringResult = arrConvert.toString();
console.log(joinResult);
console.log(toStringResult);

