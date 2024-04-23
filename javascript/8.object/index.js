// 1. Khai báo 1 đối tượng (object)

const ducInfor = {
    // 1. khai báo cụ thể thuộc tính
    name: 'duc',
    age: 33,
    sex: 'nam',

    // 2. khai báo phương thức
    getName: function() {
        console.log('show name');
    }

};


// 2. Tại sao chúng ta cần đối tượng (object)
// array: chúng ta không cần key cụ thể
// object chúng ta cần key cụ thể

// 3. vậy thì chúng ta không cần array?
// 3.1 lưu trữ thông tin của 1 lớp[array] với thông tin cụ thể của từng bạn gồm tên, tuổi, giới tính

[
    {
        name: 'duc',
        age: 33, 
        sex: 'nam'
    },
    {
        name: 'trang',
        age: 25, 
        sex: 'nữ'
    }
];


// 4. cách thể hiện 1 object dưới góc độ hình học?
const courseJs = {
    name: 'javascript',
    time: '3h'
};

// 5. cách lấy value object hay còn gọi là get value
console.log(courseJs.name);
console.log(courseJs['name']);


// 6. khi nào dùng ngoặc [], khi nào dùng dấu .
const keyName = 'name';
console.log(courseJs.keyName);
console.log(courseJs[keyName]);

// 7. loop object []


// 8. set value
courseJs.name = 'php';
console.log(courseJs);


// 9. this là gì, tại sao chúng ta cần this
const peopleHuy = {
    name: 'huy',
    getName: function() {
        console.log('thông tin tên của bạn là : ', this.name);
    }
};
const peopleDuc = {
    name: 'duc',
    getName: function() {
        console.log('thông tin tên của bạn là : ', this.name);
    }
};
peopleHuy.getName();
peopleDuc.getName();

// 10. Ý nghĩa thực sự mà this mang lại
function createPersion(name) {
    const obj = {};

    obj.name = name;
    obj.introduce = function() {
        console.log('hi : ' + this.name);
    }

    return obj;
}
const ducPersion = createPersion('duc');
console.log(ducPersion);
const dung = createPersion('dung');
console.log(dung);

// 11. chay contructor thông qua tu khoa new
function Persion(name) {
    this.name = name;
    this.introduce = function() {
        console.log('hi : ' + this.name);
    }
}

// chạy đến đâu
const duc2 = new Persion('duc');
console.log(duc2);
const dung3 = new Persion('dung');
duc2.name = 'manh';
console.log(dung3);

// vậy thì chúng ta gặp object chưa

const lession = {
    name: 'js'
};

const lessionClone = lession;
lessionClone.name = 'php';
console.log();





