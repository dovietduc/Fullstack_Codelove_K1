# Kiến Thức Về Responsive

## Khái niệm responsive

Responsive web design (RWD) là một phương pháp tiếp cận để làm cho các trang web hiển thị tốt trên mọi kích thước màn hình và độ phân giải trong khi vẫn đảm bảo khả năng sử dụng tốt

## Giới Thiệu Về responsive web design

Html về cơ bản là đáp ứng responsive. Nếu bạn một trang web với chỉ html và không có css và tiến hành thay đổi cửa số trình duyệt (resize the window), trình duyệt sẽ tự động chỉnh lại văn bản cho vừa với khung nhìn

```
    <p>
        Rice đã có những tiến bộ đáng kể từ khi đến với Arsenal. Tiền vệ người Anh đóng vai trò quan trọng trong sơ đồ của HLV Arteta. 
        Trong tâm sự mới đây với giới truyền thông, Rice đã hé lộ về người bạn thân của anh tại Arsenal: "Ở Arsenal có rất nhiều người, nhưng tôi thực sự có mối quan hệ thân thiết với Gabriel. Tôi thấy chúng tôi thực sự hợp nhau. Mặc dù chúng tôi xuất thân khác nhau, 
        cách chơi bóng cũng khác nhau nhưng đôi bên học hỏi lẫn nhau nhiều điều. Nhờ vậy chúng tôi hình thành nên tình bạn đích thực".
    </p>

```

## Media Queries

Media query là một kĩ thuật được giới thiệu trong CSS3. Nó sử dụng @media rule để giới hạn css được thực thi ở một kích cỡ màn hình nào đó
hoặc một khoảng màn hình với độ rộng width nào đấy.

```

    <style>
        .container {
            background: lightgray;
        }
        @media screen and (min-width: 576px) {
            .container {
                background: red;
            }
        }
        @media screen and (min-width: 768px) {
            .container {
                background: green;
            }
            
        }
        @media screen and (min-width: 992px) {
            .container {
                background: blue;
            }
            
        }
        @media screen and (min-width: 1200px) {
            .container {
                background: yellow;
            }
        }
    </style>
    <div class="container">
        Rice đã có những tiến bộ đáng kể từ khi đến với Arsenal. Tiền vệ người Anh đóng vai trò quan trọng trong sơ đồ của HLV Arteta. 
        Trong tâm sự mới đây với giới truyền thông, Rice đã hé lộ về người bạn thân của anh tại Arsenal: "Ở Arsenal có rất nhiều người, nhưng tôi thực sự có mối quan hệ thân thiết với Gabriel. Tôi thấy chúng tôi thực sự hợp nhau. Mặc dù chúng tôi xuất thân khác nhau, 
        cách chơi bóng cũng khác nhau nhưng đôi bên học hỏi lẫn nhau nhiều điều. Nhờ vậy chúng tôi hình thành nên tình bạn đích thực".
    </div>

```

## Flexbox

Với flexbox áp dụng tư duy mobile first nghĩa là đầu tiên để mặc định hoạt động tốt trên màn hình mobile, khi lên màn hình có kích thước lớn hơn thì tiến hành thêm thuộc tính flex để chia cột tương ứng


```
    <style>
    @media screen and (min-width: 600px){
        .wrapper {
            display: flex;
        }
        .col1 {
            width: 30%;
            margin-right: 5%;
        }
        .col2 {
            width: 60%;
            margin-right: 5%;
        }
    }
    </style>
    <div class="wrapper">
      <div class="col1">
        <p>
          This layout is responsive. See what happens if you make the browser
          window wider or narrow.
        </p>
      </div>
      <div class="col2">
        <p>
          One November night in the year 1782, so the story runs, two brothers
          sat over their winter fire in the little French town of Annonay,
          watching the grey smoke-wreaths from the hearth curl up the wide
          chimney. Their names were Stephen and Joseph Montgolfier, they were
          papermakers by trade, and were noted as possessing thoughtful minds
          and a deep interest in all scientific knowledge and new discovery.
        </p>
        <p>
          Before that night—a memorable night, as it was to prove—hundreds of
          millions of people had watched the rising smoke-wreaths of their fires
          without drawing any special inspiration from the fact.”
        </p>
      </div>
    </div>
```

## Responsive images/media

Để đảm bảo media không bao giờ lớn hơn thùng chứa nó, có thể sử dụng phương pháp sau:

```
    img,
    picture,
    video {
        max-width: 100%;
    }

```

## The viewport meta tag

Nếu bạn nhìn vào một trang html, bạn sẽ thường thấy ```meta``` tag trong ```head``` của tài liệu như sau

```
    <meta name="viewport" content="width=device-width,initial-scale=1" />   

```

This viewport meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.

Why is this needed? Because mobile browsers tend to lie about their viewport width.