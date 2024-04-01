
// in ra tất cả các hàng

let starItem = '';
for(let row = 1; row <= 7; row++) {
    

    // mỗi khi i chạy phải in ra 10 ngôi sao
    for(let starCharacter = 1; starCharacter <= 21; starCharacter++) {
        
        // vẫn là in ra hình sao
        if (row === 1 || row === 7 || starCharacter === 1 || starCharacter === 21) {
            starItem = starItem + '*';
        } else {
            starItem = starItem + ' ';
        }

    }

    starItem = starItem + '\n';
    
}


console.log(starItem);