// 1. Tìm Hiểu Cơ Chế Bất Đồng Bộ

console.log('start');


const timeUser = function() {
    console.log('get data user');    
}
setTimeout(timeUser, 2000);
setTimeout(() => console.log('get product'), 0);

console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');
console.log('end');


// 2. vấn đề phát sinh với bất đồng bộ
// lấy ra thông tin user -> lấy ra repository của user trên github

// backend
function getUser(user) {

    const userName = user.gitHubUsername;
    // bất đồng bộ gọi api
    // setTimeout(function() {
    //     return ['repo1', 'repo2', 'repo3'];
    // }, 2000);
    return ['repo1', 'repo2', 'repo3'];
}



// fronend
const user = {id: 1, gitHubUsername: 'ducdo'};
const repos = getUser(user);
// đã lấy dc repo
console.log(repos);







