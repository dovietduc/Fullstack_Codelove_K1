# DOM

1. Với đoạn mã html như sau

```
    <div>
        <p>p first</p>
        <p>p second</p>
        <p class="error">Lỗi message</p>
    </div>

```

==> chứng minh querySelector và querySelectorAll lấy ra các object để xử lí mà thôi


2. Add và change page content
**2.1 change text**

Get content:

```

    pFirst = document.querySelector('p');
    // lấy thuộc tính trong object
    console.log(pFirst.innerText);

    pAll = document.querySelectorAll('p');
    // loop qua rồi thay đổi value cho từng object
    // get rồi set
    for(...)

```

**2.2 change html**

```
    <!-- innerHTML -->

    pFirst = document.querySelector('.content');
        // lấy thuộc tính trong object
        console.log(pFirst.innerHTML);
```

**2.3 ví dụ mảng nhân vật**


3. set and get attribute

3.1: có thẻ link **google**, chuyển sang link **codelove**4
3.2 : Lấy ví dụ set, get với class
3.3 : Lấy ví dụ về style

4. Vấn đề với setAttribute cho css

cho 1 thẻ có css mầu sắc, dùng setAttr thêm margin thì nó ghi đè lên css mầu sắc
vấn đề này đã được DOM API tính tới nên họ tạo thuộc tính style lưu tất cả giá trị
style theo key, value object

5. Thêm và bỏ, kiểm tra, toogle class

5.1 giới thiệu ý nghĩa các phương thức
5.2 làm bài tập với list các thẻ p có chứa text error hoặc success

