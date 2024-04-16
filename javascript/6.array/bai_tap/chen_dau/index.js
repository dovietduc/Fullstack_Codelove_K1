let number = prompt('Xin nhập vào giá trị số');

let numberFirst = number[0];
let arrConvert = [numberFirst];

let srCom = number[0];
for(let i = 1; i < number.length; i++) {

    if(number[i] % 2 === 0 && number[i - 1] % 2 === 0) {
        srCom = srCom + '-' + number[i];
        // arrConvert.push('-', number[i]);
    } else {
        srCom = srCom + number[i];
        // arrConvert.push(number[i]);
    }
}

console.log(srCom);



