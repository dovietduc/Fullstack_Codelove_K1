function ShowHideText() {

    const [isShow, setIsShow] = React.useState(true);
    function handeShow() {
        setIsShow(true);
    }

    function handeHide() 
    {
        // set bin state isShow tren core useState den false;
        setIsShow(false);
        // component re-render -> ham ShowHideText render lai
    }

    function handeToogle() {
        setIsShow(!isShow);
    }

    // thay đổi dữ liệu trước khi nhờ bablel compiler -> trả về value

    function classChangeHelper() {
        let classChange = '';
        if(!isShow) {
            classChange = 'hide';
        } 
        return classChange;
    }

    return (
        <div className="container">

            <p className={classChangeHelper()}>This is Text</p>

            <div className="button">
                <button onClick={handeShow}>Show</button>
                <button onClick={handeHide}>Hide</button>
                <button onClick={handeToogle}>Toogle</button>
            </div>
        </div>
    );
    
}



const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<ShowHideText/>);
