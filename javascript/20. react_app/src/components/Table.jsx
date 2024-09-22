
import TableRow from './TableRow';
function Table(props) {

    const { users: userAll, handleDelete} = props;

    function handleDeleteChild(userId) {
        handleDelete(userId);        
    }


    return (

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
                                    className="btn btn-primary me-3">
                                    Edit
                                </button>
                                <button
                                    data-id={user.id}
                                    className="btn btn-danger"
                                    onClick={() => {handleDeleteChild(user.id)}}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )

                }


            </tbody>
        </table>


    );
}

export default Table;