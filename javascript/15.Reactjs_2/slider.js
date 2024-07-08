function Slider() {

    const imageSlider = ['1.avif', '2.jpg', '3.jpg', '4.jpg'];
    const [indexActive, setIndexActive] = React.useState(0);

    function renderImage() {

        const renderImage = imageSlider.map(
            function(imageElement, index){
                if(index == indexActive) {
                    return <img src={'images/' + imageElement} alt="" />;
                } else {
                    return <img src={'images/' + imageElement} alt="" className="hide"/>;
                }
            }
        );

        console.log(renderImage);

        return (
            <>
                {renderImage}
            </>
        );
        
    }

    return (
        <div className="container">

            <div className="content">

                <div className="slider_top">
                    <div className="images">
                        {renderImage()}

                    </div>
                    <div className="icon_click">
                        <button className="next">Next</button>
                        <button className="previous">Previous</button>
                    </div>

                </div>


                <div className="dots">
                    <button className="active"></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

            </div>

        </div>
    );
}


const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Slider />);