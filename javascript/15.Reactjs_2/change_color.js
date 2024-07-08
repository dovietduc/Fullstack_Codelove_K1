function ChangeColor() {

    const colorAllBox = ['lightgray', 'lightgreen', 'lightsalmon'];

    // khi người dùng click thì chúng ta thay đổi mầu sắc
    const [colorWrapper, setColorWrapper] = React.useState(colorAllBox[0]);

    function handleChangeColor(colorBox) {
        return function() {
            setColorWrapper(colorBox);
        }
    }

    const colorObject = {
        background: colorWrapper
    };


    return (

        <div className="container">
            <div className="box_wrapper" style={colorObject}>

                {/* chúng ta phải render tất cả các box ở đây */}
                {
                    colorAllBox.map(
                        function(color, index) {
                            return (
                                <div className='box' onClick={handleChangeColor(color)} key={index}></div>
                            );
                        }
                    )
                }
                
            </div>
        </div>
    );
}




const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<ChangeColor/>);
