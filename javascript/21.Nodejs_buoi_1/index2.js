// 3. Xử lí dữ liệu bất đồng bộ
// khi có dữ liệu thành công hoặc thất bại (có kết quả trả về) --> đưa dữ l
// đưa dữ liệu này về cho frontend biết để xử lí tương ứng

// backend sẽ là nơi có dữ liệu -> trả về fronend
// 1. lấy thông tin của user
function getUser(id) {

    // call api to database
    return new Promise(
        function(resolve) {
            setTimeout(
                function() {
                    resolve({id: id, gitHubUserName: 'ducdo'});
                },
                2000
            );
        }
    )
}

function getRepos(gitHubUserName) {
    return new Promise(
        function(resolve) {
            setTimeout(
                function() {
                    // api get data repo by gitHubUserName
                    if(gitHubUserName === 'ducdo' ) {
                        resolve(['repo1', 'repo2', 'repo3']);
                    }
                    
                },
                2000
            );
        }
    );
    
}

function getCommit(repo) {
    return new Promise(
        function(resolve) {
            setTimeout(
                function() {
                    // api get data repo by gitHubUserName
                    if(repo === 'repo1') {
                        resolve(['commit1', 'commit2', 'commit3']);
                    }
                },
                2000
            );
        }
    );
}




// frontend --> lấy user -> lấy repo của user -> lấy ra commit theo repo
getUser(1)
.then(
    function(dataUser) {
        console.log(dataUser);        
        return getRepos(dataUser.gitHubUserName);
    }
)
.then(
    function(dataRepo) {
        console.log(dataRepo);  
        return getCommit(dataRepo[0]);
    }
)
.then(
    function(commits) {
        console.log(commits);  
    }
)




// callback
// promise
// async, await

