import users from './data/user.js';


function CrudUser() {


    const [userAll, setUserAll] = React.useState(users);
    const [inputName, setInputName] = React.useState('');


    const handleChangeName = (event) => setInputName(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            id: crypto.randomUUID(),
            name: inputName
        }
        // tạo state mới
        const userAllNew = [...userAll, user];
        // render lại giao diện bao gồm phần tử mới
        setUserAll(userAllNew);
        // set lại value input đến rỗng
        setInputName('');
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
                                <button className="btn btn-primary mt-3">Submit</button>
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
                                            <button className="btn btn-primary me-3">Edit</button>
                                            <button className="btn btn-danger">Delete</button>
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