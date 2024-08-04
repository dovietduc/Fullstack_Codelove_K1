import users from './data/user.js';


function CrudUser() {


    const [userAll, setUserAll] = React.useState(users);
    const [inputName, setInputName] = React.useState('');
    const [isEditting, setIsEditting] = React.useState(false);
    const [userEdditing, setUserEdditing] = React.useState('');


    const handleChangeName = (event) => setInputName(event.target.value);

    const handleSubmit = (event) => {

        event.preventDefault();
        if(isEditting) {
            // xử lí phần edit
            // thay đổi dữ liệu mảng cần update
            // map -> for -> update
            // for -> 
            const usersUpdate = userAll.map(
                function(element) {
                    // cần cập nhật name
                    if(element.id === userEdditing.id) {
                        return {
                            id: element.id,
                            name: inputName
                        }
                    } else {
                        return element;
                    }
                }
            );

            // render lại giao diện
            setUserAll(usersUpdate);
            // set lại input name đến rỗng
            setInputName('');
            // set lại trạng thái là add
            setIsEditting(false);
            
            return;
        }
        
        
        const user = {
            id: crypto.randomUUID(),
            name: inputName
        }
        // tạo state mới
        const userAllNew = [user, ...userAll];
        // render lại giao diện bao gồm phần tử mới
        setUserAll(userAllNew);
        // set lại value input đến rỗng
        setInputName('');
    }

    const handleDelete = (idUser) => {
        // 1. lấy ra id cần xóa
        console.log(idUser);
        // 2. xóa phần tử trong mảng users với id đã nhận
        const userFilterData = userAll.filter(element => element.id !== idUser);
        // 3. render dữ liệu
        setUserAll(userFilterData);

    }

    const handleShowFormEdit = (idUser) => {
        // 1. thay đổi giao diện form submit(thay đổi text)
        setIsEditting(true);
        // 2. tìm ra object cần edit
        const userEditting = userAll.find((element) => element.id === idUser);
        // 3. đưa thông tin user name vào ô i
        setInputName(userEditting.name);

        // 4. lưu thông tin user đang edit đến state dành cho useEditting
        setUserEdditing(userEditting);
        
    }


    if(userAll.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <h2>Không Có Dữ Liệu User</h2>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            <h1>CRUD USER</h1>
            <div className="row">
                {/* phần nhập thông tin */}
                <div className="input_wrapper mb-5">
                    <div className="col-6">
                        <div className="mb-3">
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="name"
                                    className="form-label"
                                >
                                    Name
                                </label>
                                <input
                                    value={inputName}
                                    onChange={handleChangeName}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Nhập tên"

                                />
                                <button className="btn btn-primary mt-3">
                                    {isEditting ? 'Update' : 'Add'}
                                </button>
                            </form>
                        </div>
                    </div>


                </div>

                {/* phần hiển thị thông tin */}
                <div className="col-6">
                    <h2>Thông Tin User</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userAll.map((user, index) =>
                                    <tr key={user.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>
                                            <button 
                                                onClick={() => handleShowFormEdit(user.id)}
                                                className="btn btn-primary me-3">
                                                Edit
                                            </button>
                                            <button 
                                                data-id={user.id}
                                                className="btn btn-danger" 
                                                onClick={ () => handleDelete(user.id) }
                                                        
                                                >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )

                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );

}









const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<CrudUser />);