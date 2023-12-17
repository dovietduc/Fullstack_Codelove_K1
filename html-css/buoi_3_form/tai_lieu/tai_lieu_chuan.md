# Tìm Hiểu Về Form

## Lời mở đầu

Ngày hôm nay chúng ta sẽ học về Form, Form nó chính là các biểu mẫu trên web hoặc ứng dụng web mà ở đấy người dùng có thể nhập thông tin cần thiết và sau đấy thực hiện hành động submit form đến serve để serve xử lí yêu cầu, sau này thì các bạn sẽ được học về nodejs, php để xử lí thông tin ở phía serve, còn bây giờ chúng ta học cách tạo ra form để người dùng nhập liệu

Thành phần tạo nên form thường được gọi là form control (hay là widget). Chúng ta sẽ cùng nhau tìm hiểu các thành phần khác nhau để tạo nên form. Đầu tiên chúng ta tìm hiểu về thành phần cho phép người dùng nhập liệu trên 1 dòng

## Cho phép người dùng nhập dữ liệu trên 1 dòng (input)

input nó là thẻ trống content như vậy nó sẽ đóng ngay ở thẻ mở:

```
<input />

```

Vì nó là thẻ trống content nên trong thẻ mở nó phải chứa thuộc tính nào đấy để thể hiện nội dung ra trình duyệt và thuộc tính đấy là type các bạn nhé:

```
<input type="text" />

```

Thêm nữa chúng ta sẽ có thuộc tính placeholder để mô tả nội dung của thẻ input

```
<input type="text" placeholder="Nhập thông tin name" />

```

Nhưng yêu cầu của ứng dụng là chúng ta nên có thẻ label chứa mô tả text để những người mù họ dùng các thiết bị đọc màn hình họ sẽ hiểu được nội dung ô input đấy

```
<label>Nhập tên:</label>
<input type="text" placeholder="Nhập thông tin name" />

```

Thêm nữa ta mong muốn mỗi ô nhập liệu sẽ trên 1 dòng riêng biệt nên ta sẽ đưa nội dung đóng trong thẻ p tạo ra dấu ngắt dòng vì nó là thẻ block

```
<p>
    <label>Nhập tên:</label>
    <input type="text" placeholder="Nhập thông tin name" />
</p>

```

Trong label chúng ta thêm thuộc tính for liên kết với id input để khi click vào label thì input được chọn focus

> Sử dụng quy tắc âm thanh tương tự để tạo ra ô input cho email và password


```
<p>
    <label>Nhập email:</label>
    <input type="text" placeholder="Nhập thông tin email" />
</p>
<p>
    <label>Nhập password:</label>
    <input type="text" placeholder="Nhập thông tin password" />
</p>

```
Sau đấy anh sẽ chỉnh sửa một chút thông tin type thành email và password (email thì yêu cầu người dùng nhập liệu đúng định dạng email, còn password nó là cái ... các bạn này)


## cho phép người dùng chọn một giá trị hay nhiều giá trị

### radio type

Các bạn quan sát giao diện form về chọn giới tính anh cần tạo ra, phân tích 1 chút các bạn thấy cần 1 div bao ngoài

```
<div>
    <h2>Chọn giới tính</h2>
    <p>
        <input type="radio"/>
        <label>Nam</label>
    </p>
    <p>
        <input type="radio"/>
        <label>Nữ</label>
    </p>
     <p>
        <input type="radio"/>
        <label>Giới tính khác</label>
    </p>
</div>

```

Để chỉ chọn 1 loại nam hoặc nữ thì phải đưa 2 input cùng tên

```
<div>
    <h2>Chọn giới tính</h2>
    <p>
        <input type="radio" name="gender" />
        <label>Nam</label>
    </p>
    <p>
        <input type="radio"name="gender" />
        <label>Nữ</label>
    </p>
     <p>
        <input type="radio" name="gender" />
        <label>Giới tính khác</label>
    </p>
</div>

```

### checkbox type

> Sử dụng quy tắc âm thanh tuowg tự tạo ra checkbox type sở thích

## form select (select là inline-block, option là block)

Chúng ta sẽ tạo ra select với các thẻ option để người dùng lựa chọn

```
<div>
    <h2>Chọn thành phố bạn muốn sống?</h2>
    <p>
        <select>
            <option>
                Hà Nội
            </option>
            <option>
                Thành phố hồ chí minh
            </option>
            <option>
                Đà Nẵng
            </option>
        </select>
    </p>
</div>

```

## cho phép người dùng nhập dữ liệu trên nhiều dòng

Khác biệt so với input là chỉ cho phép người dùng nhập dữ liệu trên 1 dòng và không có xuống dòng, textarea cho phép nhập dữ liệu trên nhiều dòng và đi kèm dấu xuống dòng, dữ liệu bao gồm dấu xuống dòng sẽ được gửi đến serve


```

<div>
    <h3>Xin mời nhập comment</h3>
    <p>
        <textarea rows="10" cols="30" name="comment">dovietduc</textarea>
    </p>
</div>

```


## input upload file(type="file")

Dùng để upload file lên serve

```
<p>
    <label>Chọn file</label>
    <input type="file" />
</p>

```

## Thẻ ẩn (hidden)

Dùng để tổng hợp dữ liệu trước khi gửi lên serve và đưa vào value của input

```
<p>
    <label>Hidden</label>
    <input type="hidden">
</p>

```

## Ngoài ra còn có các loại input html 5 khác như date, number, url, tel, color

## Một số so sánh input text với textarea

## So sánh input type submit và button submit






