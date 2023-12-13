# Hiểu Về Tính Chất Thẻ Block

Trong bối cảnh định dạng khối, các hộp được xếp lần lượt theo chiều dọc, với vị trí bắt đầu ở đầu khối chứa, cạnh ngoài bên trái đặt vào cạnh trái của khối chứa. 

Tham khảo nội dung bằng tiếng anh tại: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow

> "In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.
In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch)." - 9.4.1

**display: block**

> The element generates a block box, generating line breaks both before and after the element when in the normal flow

# Hiểu Về Tính Chất Thẻ Inline

Trong bối cảnh định dạng nội tuyến, box được đặt theo chiều ngang, cái này sau cái kia, bắt đầu ở đầu khối chứa. Lề ngang, đường viền, padding được tôn trọng giữa các box

Tham khảo nội dung bằng tiếng anh tại: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow

> "In an inline formatting context, boxes are laid out horizontally, one after the other, beginning at the top of a containing block. Horizontal margins, borders, and padding are respected between these boxes. The boxes may be aligned vertically in different ways: their bottoms or tops may be aligned, or the baselines of text within them may be aligned. The rectangular area that contains the boxes that form a line is called a line box." - 9.4.2

# Làm Bài Tập Thẻ Inline Và Block

Thực hiện luyện tập thẻ Inline và Block

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