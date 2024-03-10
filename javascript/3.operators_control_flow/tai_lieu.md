# Operators 

## Arithmetic operators (Toán Tử Số Học)

Chúng ta sử dụng toán Tử Số Học để tính toán liên quan đến toán học, trong lập trình được thể hiện như sau:

```
    var x = 10;
    var y = 3;

    // cộng
    console.log(x + y);
    // trừ
    console.log(x - y);
    // nhân
    console.log(x * y);
    // chia
    console.log(x / y);
    // chia lấy dư
    console.log(x % y);
    // số mũ
    console.log(x ** y);

```

## Toán tử gán ( Assignment Operators)

```
    var x = 10;
    x = x + 1;
    // tăng 1 đơn vị
    x++;

    x = x + 5;
    x += 5;

    x *= 3;
```

## Comparison Operators (Toán tử so sánh)

```

    var x = 1;
    console.log(x > 0);
    console.log(x >= 1);
    console.log(x < 1);
    console.log(x <= 1);

```

Equality(So Sánh Bằng)

```
    var x = 1;
    console.log(x === 1);
    console.log(x !== 1);

```

## Equality(So Sánh Bằng)

```
    // so sánh chặt chẽ (value + type)
    console.log(1 === 1);
    // so sánh lỏng lẻo (same value)
    console.log('1' == 1);

```

## logical operators

chúng ta có 3 loại logical operators (and, or, not)

với and: đi từ trái sang phải, nếu gặp false sẽ trả về (nếu không gặp false trả về giá trị cuối cùng)
với or: đi từ trái sang phải nếu gặp true sẽ trả về (nếu không gặp true trả về giá trị cuối cùng)

## logical operators với Non-booleans

Theo quy tắc trên

## Thứ tự ưu tiên khi tính toán

Thực hiện theo toán học (nhân chia trước, cộng trừ sau)

```
    var x = 2 + 3 * 4;

```

## Control Flow (if, else)