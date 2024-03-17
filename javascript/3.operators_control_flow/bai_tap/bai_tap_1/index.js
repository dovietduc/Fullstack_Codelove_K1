var year = prompt('Xin nhập năm để kiểm tra xem có phải năm nhuận không?');
year = parseInt(year);

// logic kiểm tra năm nhuận
// if(year % 4 === 0) {

//     if(year % 100 === 0) {

//         if(year % 400 === 0) {
//             console.log('Đây là năm nhuận');
//         } else {
//             console.log('Đây không phải là năm nhuận');
//         }
       
//     } else {
//        console.log('Đây là năm nhuận'); 
//     }
// } else {
//     console.log('Đây không phải là năm nhuận');
// }


// gộp lại
if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    console.log('Đây là năm nhuận'); 
} else {
    console.log('Đây không phải là năm nhuận');
}

