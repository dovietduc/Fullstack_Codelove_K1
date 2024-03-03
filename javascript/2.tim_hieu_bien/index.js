// 1. Tìm hiểu câu lệnh in ra tab console của trình duyệt
console.log("Tôi là Đức Đỗ, thuộc Codelove");


/**
 * I. Khai báo biến
 */
// 2. Học cách khai báo biến trong js
var nameInfor;
// 3. Khởi tạo giá trị ban đầu cho biến
nameInfor = "ducdo";
// 4. khai báo biến + khởi tạo giá trị ban đầu trong cùng 1 câu lệnh
// Biến được sinh ra
var company = "Codelove";

// biến được update (biến được sử dụng)
company = 'Codelove 2';
// biến được sử dụng
var companyEnd = company;


/**
 * II. Các kiểu dữ liệu trong js
 * Kiểu dữ liệu của biến sẽ chính là kiểu dữ liệu của value
 * Vì biến được gán bằng value
 */

// 1. Kiểu dữ liệu boolean (true, false)
// 1.1 log ra kiểu dữ liệu theo value
console.log(typeof true);
console.log(typeof false);
// 1.2 lấy ví dụ về biến chứa value theo kiểu dữ liệu đấy
var isConfirm = true;
var isCancel = false;
// 1.3 log ra kiểu dữ liệu của biến
console.log(typeof isConfirm);
console.log(typeof isCancel);

// 2. Kiểu dữ liệu string (Dùng nháy đơn, nháy kép hoặc `)
console.log(typeof 'ducdo');
var nameInforClone = 'ducdo';
console.log(typeof nameInforClone);

// 3. Kiểu dữ liệu number
// các bạn làm
console.log(typeof 10);
var age = 10;
console.log(typeof age);

// 4. Kiểu dữ liệu undefined (duy nhất value undefined)
console.log(typeof undefined);
var birthDay;
console.log(typeof birthDay);

// 5. Kiểu dữ liệu null (duy nhất value null)
console.log(typeof null);
var isNull = null;
console.log(typeof isNull);

// 6. Kiểu dữ liệu object (lưu trữ nhiều value)
console.log(typeof {});
console.log(typeof []);

// 7. Các hàm thông dụng trong js
// 7.1 hàm alert
alert('Bạn đã về quê');
// 7.2 hàm confirm (hàm trả về true - false)
var isConfirm = confirm('Bạn đã đủ 18 tuổi chưa?');
console.log(isConfirm);
// 7.3 hàm promp
var nameUser = prompt('Xin bạn nhập tên:');
console.log(nameUser);




