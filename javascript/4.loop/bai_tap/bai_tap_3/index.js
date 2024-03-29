let numberInput = Number(prompt('Xin nhập giá trị number'));
let S = 0;
let numberAll = '';


while(numberInput !== -1) {

    // lưu lại số trước đấy
    numberAll = numberAll + numberInput + ', ';
    // tính tổng
    S = S + numberInput;

    // bước 3, cập nhật số đến khi kết thúc vòng lặp
    numberInput = Number(prompt('Xin nhập giá trị number'));
}


// 
numberAll = numberAll.trim();
if (numberAll.charAt(numberAll.length - 1) === ',') {
    numberAll = numberAll.slice(0, -1);
}
console.log('numberAll', numberAll);
console.log(numberAll.length);
console.log('S', S);



for(let i = 1; i <= 100; i++) {
    document.write(`<hr width=${i}% />`);
}