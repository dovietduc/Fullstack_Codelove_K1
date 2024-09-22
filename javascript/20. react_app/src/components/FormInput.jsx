// muốn truyền dữ liệu từ con lên cha thì chúng ta sẽ truyền thông qua props
// giá trị truyền từ cha sẽ là 1 hàm
// mục đích trong con sẽ gọi hàm đấy --> callback

function FormInput(props) {

    const {valueInput, handleSubmit, handleInput} = props;
    

    const handleChange = function(event) {
        const valueInput = event.target.value;
        // goi ham khai bao o tren cha
        handleInput(valueInput);
    
    }

    const handleSubmitChild = function(event) {
        event.preventDefault();
        handleSubmit();        
        
    }


    return (
        <div className="input_wrapper mb-5">
            <div className="col-12">
                <div className="mb-3">
                    <form onSubmit={handleSubmitChild}>
                        <label
                            htmlFor="name"
                            className="form-label"
                        >
                            Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={valueInput}
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Nhập tên"

                        />
                        <button className="btn btn-primary mt-3">
                            Add
                        </button>
                    </form>
                </div>
            </div>

        </div>

    );
}

export default FormInput;