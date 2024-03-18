//
/* <table>
    // vòng lặp tạo ra dinamic
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>

    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
</table> */

var result = '<table>';
console.log(typeof result);

// sinh ra hàng (row)
for(var i = 1; i <= 10; i++) {

    result = result + '<tr>';

    // chạy từ 1 đến 10
    for(var j = 1; j <= 10; j++) {
        result = result + `<td> ${i * j} </td>`;
    }

    result = result + '</tr>';

}

result = result + '</table>';
document.write(result);



