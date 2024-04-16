/**
 * I. HỌC VỀ FUNCTION
 */

/**
 * 1. Chúng ta đã sử dụng function trước đấy chưa?
 */

// gọi hàm ()
let getLog = console.log;
getLog('duc do');

// console.log, alert(), confirm(), promp()


/**
 * 2. Tại sao chúng ta cần hàm?
 * 1. Nó cần tái sử dụng lại những đoạn code bao gồm các câu lệnh khác nhau
 * 2. function -> chức năng
 */

function addCart() {
    // 1. lấy id sản phẩm người dùng đặt hàng
    console.log('lấy id sản phẩm người dùng đặt');
    // 2. thêm vào mảng sản phẩm cho khách hàng
    console.log('thêm vào mảng sản phẩm cho khách hàng');
    // 3. chuyển người dùng đến phần confirm
    console.log('chuyển người dùng đến phần confirm');
}
addCart();

/**
 * hàm console.log có phải do ngôn ngữ js cung cấp cho chúng ta không?
 * web api
 * api?
 * web api -- thirt party api
 */

/**
 * 3. Khai báo hàm
 */

//3.1 hàm declaration (hàm khai báo hoặc hàm có tên)
function getTotal(total) {
    // khi hàm gọi sẽ được thực thi
    console.log('total', total);
    let resut = 100;
    return resut;
}
// thực thi hàm
getTotal();

// 3.2 function expression hay là biểu thức hay là không tên
let getproduct = function() {
    console.log('product');
};

let total = getTotal();
console.log(total);

/**
 * Tại sao cần tham số, đối số trong hàm, paramater và argument
 */





