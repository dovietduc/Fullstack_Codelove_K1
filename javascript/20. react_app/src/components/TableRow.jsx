function TableRow({user, index, handleDelete}) {


    function handleDelete() {
        handleDelete();        
    }

    return (
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
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default TableRow;