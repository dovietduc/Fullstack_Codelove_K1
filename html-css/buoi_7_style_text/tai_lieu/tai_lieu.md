# Style To Text    

## Font Family

```
    h1 {
        font-family: Arial;
    }

```

Khi value là nhiều từ ghép lại, ví dụ như là: Times New Roman thì nên sử dụng dấu ('') để nhóm các chữ với nhau    

```

    h1 {
        font-family: 'Times New Roman';
    }

```

**Fallback Fonts and Font Stacks**

Web safe fonts là những fonts chữ dự phòng tốt, có thể được sử dụng nếu font chữ ưu thích của bạn không có sẵn

```

    h1 {
        font-family: Caslon, Georgia, 'Times New Roman';
    }

```

Trong đoạn code trên  Georgia, 'Times New Roman' là fallback fonts đến Caslon. Đây là danh sách fonts nếu hệ thống không tìm thấy fonts Caslon, nó sẽ cố gắng tìm fonts Georgia, nếu không có thì font Times New Roman sẽ được load.    

## Font Weight

```Font Weight``` kiểm soát mức độ đậm nhạt của văn bản. Nó có thể được chỉ định bằng từ khóa hoặc giá trị số   

### Keyword Values     

```font-weight``` có thể nhận một trong số các keyword sau đây:   

1. ```bold```: Bold font weight
2. ```normal```: Normal font weight. This is the default value.
3. ```lighter```: One font weight lighter than the element’s parent value
4. ```bolder```: One font weight bolder than the element’s parent value

### Numerical Values

Độ đậm nhạt có thể được xác định bằng các con số, việc xác định bằng các con số giúp bạn dễ dàng điều chỉnh độ đậm nhạt hơn so với các giá trị keyword. Ví dụ 400 tương đương với normal, 700 tương đương với bold

## Font Style

Được dùng để xác định kiểu dáng của văn bản là in nghiêng hay bình thường

```
    h3 {
        font-style: italic;
    }

```

## Font Size

Được dùng để xác định kích thước của font chữ

```
    h3 {
        font-size: 12px;
    }

```

## Text Transformation

text có thể được style tất cả chữ hoa, tất cả chữ thường, viết hoa chữ cái đầu tiên của từ

```
    h1 {
        text-transform: uppercase;
    }

```

## Text Layout

Text Layout giúp bạn căn chỉnh text trong vùng chứa container

```
    h1 {
        text-align: right;
    }

```

## Line Height

Chúng ta có thể sử dụng thuộc tính ```line-height``` để đặt độ cao chúng ta muốn mỗi dòng chứa text

```
    p {
        line-height: 1.4;
    }

```


