# Học Lí Thuyết Về Form

Form là tương tác chính của người dùng và ứng dụng, Form cho phép người dùng thêm dữ liệu, cái này thường được gửi đến máy chủ web để xử lí và lưu trữ hoặc được sử dụng phía máy khách để cập nhật ngay giao diện theo cách nào đó (Ví dụ: Thêm 1 item đến list hoặc show hoặc hide một UI feature)

> A web form's HTML is made up of one or more form controls (sometimes called widgets), plus some additional elements to help structure the overall form — they are often referred to as HTML forms. The controls can be single or multi-line text fields, dropdown boxes, buttons, checkboxes, or radio buttons, and are mostly created using the **input** element, although there are some other elements to learn about too.

## Thẻ Form

Thẻ **form** được sử dụng để tạo các biểu mẫu, cho phép người dùng nhập dữ liệu và gửi về server

## Single line text fields (type text)

Dùng để nhập dữ liệu chuỗi ngắn (trên 1 dòng)

```
<input type="text" id="comment" name="comment" value="I'm a text field" />

```

## Pasword fields (type password)

Dùng để nhập vào mật khẩu

```
<input type="password" id="comment" name="comment" value="I'm a text field" />

```

## Hidden content (type hidden)

Dùng để chứa giá trị của form nhưng không hiển thị trên giao diện người dùng. Dữ liệu này cũng được đẩy lên server như bình thường

```
<input type="password" id="comment" name="comment" value="I'm a text field" />

```

## Input Checkbox

Dùng để lựa chọn nhiều hạng mục từ một danh sách

```
<form>
    <label>Sở thích:</label><br />
    <input type="checkbox" />Du lịch<br />
    <input type="checkbox" />Thể thao<br />
    <input type="checkbox" />Nấu ăn<br />
</form>

```

## Input Radio

Dùng để lựa chọn một hạng mục từ một danh sách

```
<form>
    <label>Sở thích:</label><br />
    <input type="radio" />Du lịch<br />
    <input type="radio" />Thể thao<br />
    <input type="radio" />Nấu ăn<br />
</form>

```

## Input Submit

Dùng để hiển thị một nút, có chức năng đẩy dữ liệu từ form lên server khi bấm vào

```
<input type="submit" value="Submit" />

```

## Button Submit

Dùng để hiển thị một nút, có chức năng đẩy dữ liệu từ form lên server khi bấm vào

```
<button type="submit">Submit</button>

```

## Sự khác biệt giữa input submit và button submit

Thẻ button được sử dụng để hiển thị một nút

Bên trong thẻ button thì chúng ta có thể đưa các nội dung khác vào, chẳng hạn như là chuỗi hoặc hình ảnh. Đây cũng chính là sự khác biệt so với việc sử dụng thẻ input button, bởi vì bên trong input button thì chỉ có thể chứa text

```
<form>
    <button type="button">
        <img src="https://images.unsplash.com/photo-1695653420780-468f6918d460?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100px" />
    </button>
</form>
```

## Cấu trúc html thường dùng và được xem là tốt để tham khảo cho form

```

    <div>
        <label for="username">Name: <span aria-label="required">*</span></label>
        <input id="username" type="text" name="username" required />
    </div>

```

Tham khảo ở link:

https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form#designing_your_form

# Bài Tập Về Form

Thực hiện làm bài tập về form