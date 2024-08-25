// Những trường hợp thực tế dùng this và các sai lầm mắc phải


const video = {

    title: 'vui lên nào anh em ơi',
    tags: ['vtv', 'phim truyền hình', 'top phim thịnh hành'],

    play: function() 
    {


        this.tags.forEach(
            // function tạo scope -> hàm được gọi () -> từ khóa this chính là
            // đối tượng gọi hàm này -> window
            () => {
                console.log(this);
            }
        )
        
    }
}

function baobi() {

    function bnn() {
        
    }
}

function daychuyen() {

}

function connguoi() {

}

// yêu cầu: in ra tiêu đề + tags của bộ phim cùng nhau
video.play();

// runtime




// 1. chưa chạy 

// 2. quá trình chạy


// chuẩn bị nguyên liệu --- (define)
// bao bì
// dây chuyền
// con người



// 2. chạy để tạo ra gói bánh
// --> lên dây chuyền --> bắt đầu lên dây chuyền -> xong dây chuyền (runtime)
// chạy hàm


// react -- cha -- con -- scope


<commo/>
// runtime 

// this ---

// A - bạn chưa hiểu
// B -- Bạn sẽ hiểu


