// 1. Callback
function buyIphone15(callbackBuyPhone) {

    setTimeout(function(){

        callbackBuyPhone({name: 'iphone 15', price: '15 triệu'});

    }, 0);

}

function friendView(name, callBackFriend) {

    setTimeout(function(){

        if(name === 'iphone 15') {
            callBackFriend('tôi đã xem, đỉnh quá bạn ơi');
        }

    }, 0);
}


buyIphone15(


    function(dataMobile) {

        // ông con nhận về iphone
        console.log('dataMobile', dataMobile);

        // khoe với bạn thân
        friendView(dataMobile.name, function(dataFriend) {

            // nhận thông tin từ người bạn truyền về
            console.log('dataFriend', dataFriend);

        });

    }
);

// ================================================================================================
// 1. Khái Niệm Promise và tạo ra promise
function buyIphone15Pomise() {
    return new Promise(

        
        function(resolve) {           

            // bất đồng bộ
            setTimeout(function(){
                resolve({name: 'iphone 15', price: '15 triệu'});
            }, 0);

        }

    );
}

function friendViewPromise(name) {

    return new Promise(
        function(resolve){


            setTimeout(function(){

                if(name === 'iphone 15') {
                    resolve('tôi đã xem, đỉnh quá bạn ơi');
                }
        
            }, 0);

        }
    );

    
}



// Sử dụng promise---
const promiseBuyPhone = buyIphone15Pomise();
promiseBuyPhone
.then(
    function(data) {
        console.log('data', data); 
        // cho bạn xem
        return friendViewPromise(data.name);
    }
)
.then(
    function(dataFriend) {
        console.log('data', dataFriend);         
    }
)







