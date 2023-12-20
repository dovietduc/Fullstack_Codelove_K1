# Css Là Gì?

Cascading Style Sheets (CSS) là một stylesheet language được sử dụng để mô tả cách trình bày của một tài liệu được viết bằng html hoặc xml. CSS mô tả cách các phần tử được hiển thị trên màn hình, trên giấy hoặc trong các phương tiện khác.

# Cách Thêm Css Vào Tài Liệu Html

Có 3 cách để thêm css vào tài liệu html: **Inline Styles**, **Internal Stylesheet**, **External Stylesheet**

## 1. Inline Styles

Mặc dù css là ngôn ngữ khác với Html nhưng bạn hoàn toàn có thể viết code CSS thẳng vào Html sử dụng **inline styles**

Để style một HTML ELEMENT bạn có thể thêm style attribute thẳng vào thẻ mở html element. Sau khi bạn thêm attribute bạn có thể thêm các câu lệnh css bạn muốn apply vào phần tử.

Cấu trúc câu lệnh css như sau:

```
    key: value (ví dụ thay đổi màu sắc: color: red)

```

Ví dụ style inline cho một phần tử như sau:

```
    <p style="color: red;">I'm learning to code!</p>

```

Nếu bạn muốn thêm nhiều hơn một style với inline styles, đơn giản bạn chỉ cần kết thúc mỗi style bằng dấu ;, sau đấy thêm style mới

```
    <p style="color: red; font-size: 20px;">I'm learning to code!</p>

```

Đây là cách đầu tiên các bạn thêm style cho phần tử html nhưng với cách này bạn sẽ gặp phải 2 vấn đề:

1. Mã html và css viết chung nhau nên sau này có sửa đổi thì việc maintain gặp khó khăn nhiều
2. Nếu có nhiều element trên cùng 1 page sử dụng chung style thì lặp lại code ở tất cả các element đó

## 2. Internal Stylesheet

Cách 1 bạn đã biết cách sử dụng inline style, inline style không phải là cách tốt nhất để style html elements. Nếu bạn muốn style, cho ví dụ, nhiều h1 elements, bạn sẽ phải thêm inline style đến mỗi element. Thêm nữa, bạn cũng phải maintain html code khi có thêm h1 elements được thêm vào

May mắn thay, HTML cho phép bạn viết css code trong phần dành riêng cho nó bằng cách viết code css nằm trong cặp thẻ style trong thẻ head. Css code bên trong style element thường được gọi là **internal stylesheet**

Một **internal stylesheet** có những lợi ích hơn **Inline Styles** là chúng ta không trộn lẫn code html css với nhau nhưng nó sẽ không phải là lựa chọn tốt nhất. Chúng ta cùng tìm hiểu cách viết css theo **Internal Stylesheet**

Để tạo một **Internal Stylesheet**, một **style** element phải đặt bên trong **head** element

```
<head>
    <style>


    </style>
</head>

```

Bên trong thẻ style, bạn có thể viết css code

```
<head>
  <style>
    p {
      color: red;
      font-size: 20px;
    }
  </style>
</head>

```

Đoạn code ở trên thay đổi mầu sắc của tất cả thẻ p đến mầu đỏ và cũng thay đổi kích thước của chữ đến 20px. Điều chú ý trong mã viết trên so với **inline style** là với cách viết này bạn phải chọn ra phần tử style hay nói chính xác là bạn muốn style ở đâu trong mã html.

## 3. External Stylesheet

Các nhà phát triển tránh trộn lẫn mã bằng cách lưu trữ html và css trong các file riêng biệt (HTML files chỉ chứa html code và CSS files chỉ chứa css code)

Bạn có thể tạo một **external stylesheet** bởi sử dụng .css file name extention, ví dụ style.css

Với một **external stylesheet**, bạn có thể viết tất cả css để style một page với khả năng đọc và maintain dễ dàng

Khi html và css trong các file riêng biệt, file css phải được link đến html, nếu không thì html sẽ không xác định được css code và các style sẽ không được áp dụng vào trang.

Bạn có thể sử dụng link element để link html và css files cùng với nhau. Link element phải được đặt trong head của html file. Nó là thẻ trống nội dung (thẻ tự đóng) và yêu cầu các thuộc tính sau:

1. href - giống như anchor element, value của thuộc tính này phải là address hoặc đường path đến css file
2. rel - Cái thuộc tính này mô tả mối quan hệ giữa HTML file và CSS file. Bởi vì bạn đang liên kết đến một **stylesheet** nên giá trị nên là **stylesheet**

Khi linking một HTML file và CSS file cùng nhau, link element sẽ trông như sau:

```
<link href='https://www.codecademy.com/stylesheets/style.css' rel='stylesheet'>
<link href='./style.css' rel='stylesheet'>

```


# Tổng Quan Selectors Cơ Bản Để Chọn Phần Tử Css

Một selector được sử dụng để nhắm mục tiêu phần tử HTML cụ thể

## Chọn theo type hay còn gọi là tag name

Giống như tên gợi ý của nó, nó khớp với type của HTML element

```

p {
  color: green;
}

```

## Chọn Theo Class

Css không bị giới hạn chọn các phần tử theo giới hạn type của chúng. Như bạn biết html có thể có các attribute. Khi làm việc với html css thì class attribute là một trong những cách phổ biến nhất để chọn phần tử. Hãy xem xét ví dụ sau:

```
<p class='brand'>Sole Shoe Company</p>

```

Thẻ p trong ví dụ trên có class attribute ở trong thẻ mở p. class attribute được set đến brand. Để select elemnt này sử dụng css chúng ta có thể tạo bộ quy tắc với bộ chọn lớp bắt đầu dấu **.**

```
.brand {

}

```

Để select một html element bởi class của nó sử dụng css thì chúng ta dùng **.** trước value class

Chúng ta có thể sử dụng class để chọn ra phần tử html áp dụng style nhưng nếu các phần tử html chỉ có 1 class thì chúng ta sẽ áp dụng rất nhiều style cho một class và làm cho code chúng ta rất khó tái sử dụng lại được, may mắn thay chúng ta có thể thêm nhiều class đến các phần tử html và các class cách nhau space. Xem ví dụ bên dưới áp dụng style đến thẻ vừa có mầu xanh vừa đậm

```
.green {
  color: green;
}

.bold {
  font-weight: bold;
}

<h1 class='green bold'> ... </h1>

```

## Chọn Theo ID

Nếu một phần tử html cần được tạo kiểu duy nhất, chúng ta có thể có thể thêm một id(identified) attribute

```
<h1 id='large-title'> ... </h1>

```

Trái ngược với class có nhiều giá trị và có thể sử dụng lại trong trang html, một id của phần tử chỉ có một giá trị duy nhất và có thể chỉ được sử dụng một lần trên một trang. Để select phần tử theo id, chúng ta thêm trước value id dấu #. Lấy ví dụ html trên được select theo id như sau:

```
#large-title {

}

```


# Tổng Hợp Css Cần Nhớ

1. Thay đổi mầu sắc: **color**
2. Thay đổi mầu nền **background-color**
3. size của chữ: **font-size**
4. căn giữa text trong block: **text-align: center**
5. thay đổi kiểu hiển thị: **display**

Chúng ta sẽ đi sâu vào sau, hiện tại sử dụng các css liệt kê ở trên để làm bài tập bạn nhé






