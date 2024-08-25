// 1. Lịch sự từ khóa this -- class (lớp) -- đối tượng(object)
// lớp -> mô tả chung chung
// đối tượng -> đối tượng cụ thể

// 2. từ khóa this bản thân nó ra đời cho sự cụ thể hay là đại diện cho đối tượng


// chung chung --> first class
// từ khóa this giúp bạn linh động thay đổi đối tượng
function Human(name, age) {

    // khai báo thuộc tính
    this.name = name;
    this.age = age;


    // khai báo phương thức
    this.run = function() {
        console.log('this', this);        
        console.log('running is' , this.name, this.age);
        
    }
   
}


const Thang = new Human('thang', 20);
// gọi run lần 1
Thang.run();


const Hung = new Human('hung', 30);
// gọi run lần 2
Hung.run();


// 3. cách sử dụng this
// This sẽ chính là đối tượng trong quá trình hàm được thực thi;

const video = {

    title: 'vui lên nào anh em ơi',

    play: function() {
        console.log(this);        
    } 
}
video.play();


function playVideo() {
    console.log(this);
}

window.playVideo();

// them su kien cho button
const buttonSelector = document.querySelector('.demo');
console.log(typeof buttonSelector);
console.dir(buttonSelector);


function handleClick() {
    console.log(this);
}

buttonSelector.addEventListener('click', handleClick);


// 4. bài toán sử dụng thực tế






