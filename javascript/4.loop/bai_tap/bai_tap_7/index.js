for(let row = 1; row <= 5; row++ ) {

    let str = '';

    // in ra space trước mỗi hàng
    for(let j = 1; j <= row - 1; j++) {
        str = str + ' ';
    }

    // in ra space + sao còn lại trên mỗi hàng
    for(let k = 1; k <= 6 - row; k++) {

        // khi nào in ra sao
        // khi nào in ra space
        if(row === 1 || k === 1 || k === 6 - row) {
            str = str + '*';
        } else {
            str = str + ' ';
        }

    }

    console.log(str);


}

// row = 1; j = 1; j <= 1
// row = 2; j = 1, j = 2;