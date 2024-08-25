
// hàm này chạy
function setupHelp() {


    

    var helpText = [
        { id: "email", help: "Your email address" },
        { id: "name", help: "Your full name" },
        { id: "age", help: "Your age (you must be over 16)" },
    ];



    for (var i = 0; i < helpText.length; i++) 
    {
        // Culprit is the use of `var` on this line
        let item = helpText[i];

        item = { id: "age", help: "Your age (you must be over 16)" }

        // tạo ra các version khác nhau bằng closure
        document.getElementById(item.id).onfocus = function() {
            document.getElementById("help").textContent = item.help;
        }
       
    }



}


// hàm này là hàm chạy -> có chăng hàm nào khai báo trong đây sẽ trở thành closure
setupHelp();

// --> handleFocusEvent đều là closure và thừa hưởng từ bên ngoài

