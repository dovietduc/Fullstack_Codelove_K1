// 1. cùng nhau tìm hiểu destructuring
const foo = ["one", "two", "three"];

const [red1, yellow1, green1] = ["one", "two", "three"];


const users = {
    name: 'duc',
    age: 30,
    sex: 'male'
};


const {name, age, sex} = users;
console.log(name, age, sex);

// 2. arrow function
function getUser(name) 

{
    console.log('get user', name);
}

getUser('duc');
getUser('dung');

// arrow function
const nameInf = function() {
    console.log('function call');
}
const arowFun = () => 2;
console.log(arowFun());
nameInf();
// Nếu chỉ có 1 câu lệnh thì viết trên 1 dòng và bỏ dấu {}
// khi có return và cũng có 1 câu lệnh -> viết trên 1 dòng và bỏ {}
// a ? b : c



