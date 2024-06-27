// LEADER
// phải nhận được mảng cần loop
function mapChange(dataInfo, callback){

    // 1. loop qua các phần tử trong mảng
    // 3. tạo ra mảng mới có chứa các thông tin phần tử mảng đã thay đổi
    let arrNew = [];
    for(let i = 0; i < dataInfo.length; i++) {

        // truyền thông tin về giá trị mỗi phần tử trong mảng cho dev
        let itemResult = callback(dataInfo[i]);
        arrNew.push(itemResult);
        
    }

    return arrNew;
}

// LEADER XONG


function someChange(dataInfo, callback){

    // 1. loop qua các phần tử trong mảng
    // 3. tạo ra mảng mới có chứa các thông tin phần tử mảng đã thay đổi
    let isFlag = false;
    for(let i = 0; i < dataInfo.length; i++) {

        console.group();
        console.log('lần lặp thứ', i + 1);
        // truyền thông tin về giá trị mỗi phần tử trong mảng cho dev
        let itemResult = callback(dataInfo[i]);
        
        if(itemResult) {
            isFlag = true;
            break;
        }
        console.log('data item', dataInfo[i]);
        console.log('kết quả của lần lặp', itemResult);
        console.groupEnd();
        
    }

    return isFlag;

}


function filterChange(dataInfo, callback){

    // 1. loop qua các phần tử trong mảng
    // 3. tạo ra mảng mới có chứa các thông tin phần tử mảng đã thay đổi
    let arrNew = [];
    for(let i = 0; i < dataInfo.length; i++) {
        let itemResult = callback(dataInfo[i]);
        if(itemResult) {
            arrNew.push(dataInfo[i]);
        }
    }

    return arrNew;


}

console.log('duc info', Array.prototype);
Array.prototype.filterChangeCustom = function(callback) {
    let arrNew = [];
    for(let i = 0; i < this.length; i++) {
        let itemResult = callback(this[i]);
        if(itemResult) {
            arrNew.push(this[i]);
        }
    }

    return arrNew;
};



