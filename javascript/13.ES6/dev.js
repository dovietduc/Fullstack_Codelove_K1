// tất cả các dev phải gọi hàm chung
let studentPoint = [
    3,
    4,
    5
];
let result = mapChange(
    studentPoint,
    function(itemValue) {
        return itemValue * 2;
    }
);
console.log(result);



// DEV 3
let result3 = mapChange(
    studentPoint,
    function(itemValue) {
        return itemValue * 3;
    }
);
console.log(result3);


let peoples = [
    {name: 'duc', age: 30},
    {name: 'hieu', age: 25},
    {name: 'dung', age: 26}
];

let result4 = mapChange(
    peoples,
    function(itemValue) {
        let objNew = {name: itemValue.name, age: itemValue.age * 3};
        return objNew;
       
    }
);

console.log(result4);




// map --- biến đổi các phần tử trong mảng về 1 giá trị mới nào đấy (react)
// some-- 
// 1. loop qua các phần tử trong mảng
// 2. nếu phần tử nào thỏa mãn điều kiện, tức là trả về true --> dừng loop -> some trả về true
// 3. loop qua tất cả và đều false -> some trả về false
// quy tắc nhớ: 1 phần tử trả về true --> true

const array = [1, 2, 3, 7, 5];

// Checks whether an element is even
const isEvenExit = array.some(
    function(element) {
        return element % 2 === 0;
    }
);
console.log(isEvenExit);

const isEvenExit2 = someChange(
    array,
    function(element) {
        return element % 2 === 0;
    }
);
console.log(isEvenExit2);

// 3. hàm filter (lọc)
// loop qua các phần tử
// nếu phần tử nào thỏa mãn điều kiện trả về trong mảng mới
// nếu phần tử nào không thỏa mãn điều kiện không trả về trong mảng mới
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const resultFilter = words.filter(
    function(element) {
        return element.length > 6;
    }
);
console.log(resultFilter);
const resultFilter2 = filterChange(
    words,
    function(element) {
        return element.length > 6;
    }
);
console.log(resultFilter);

// every --> 1 phần tử false -> false (các bạn về làm)

// find, fiindIndex
let result5 = words.filterChangeCustom(
    function(element) {
        return element.length > 6;
    }
);
console.log(result5);

// reactjs + JSX