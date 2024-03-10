/**
 * 1. Toán tử số học (toán học)
 */
var x = 10;
var y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
// phép chia lấy dư
console.log(x % y);
// x mũ y
console.log(x ** y);

/**
 * 2. Toán tử gán
 */
// khai báo biến
var z = 15;
// tăng z lơn 1 đơn vị
z = z + 1;
// viết tắt
z++;

z = z + 5;
z += 5;
console.log(z);
z *= 10;

/**
 * 3. Toán tử so sánh
 */
// So sánh relationship (quan hệ)
var numberCompare = 1;
console.log(numberCompare > 1);
console.log(numberCompare >= 1);
console.log(numberCompare < 1);
console.log(numberCompare <= 1);
// so sánh bằng nghiêm ngặt (value + type)
console.log(numberCompare === 1); 
// so sánh lỏng lẻo (value)
console.log(numberCompare == '1');
// Lưu ý: các bạn nên dùng so sánh nghiêm ngặt (===)

/**
 * 4. Toán tử logical operator
 */
var age = 18;
var isHaveHome = true;

// 4.1 xét logical operator &&
var isCheck = age >= 18 && isHaveHome;
console.log(isCheck);

// Tất cả những giá trị được xem xét false
// null
// undefined
// ''
// false
// NAN
// 0

// Còn lại là true
console.log(null && true);

// Nhớ: Đi từ trái sang phải sẽ đánh giá từng value một,
// nếu gặp value nào đó tương đương false, nó sẽ trả value đó cho kết quả
// còn không sẽ trả về value cuối cùng

// 4.2 xét logical operator ||
console.log(false || true);
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || 1);
console.log(false || 2 || true);


// Nhớ: Đi từ trái sang phải sẽ đánh giá từng value một,
// nếu gặp value nào đó tương đương true, nó sẽ trả value đó cho kết quả
// còn không sẽ trả về value cuối cùng

// 4.2 xét logical operator !
console.log(!true);
console.log(!false);
console.log(!2);
console.log(!'');


/**
 * 5. Lưu ý về thứ tự ưu tiên khi tính toán
 * nhân chia trước, cộng trừ sau
 */
var total = (2 + 3) * 4;
console.log(total);


/**
 * 6. control flow (if, else)
 *
 */
var isCondition = false;
if (isCondition) {
    console.log('đi cắm trại');
} else {
    console.log('ở nhà thôi');
}

