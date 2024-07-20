// Làm bài tập Tab
// Bước 1: tìm giao diện html css tab

function Tabs() {

    const TabsMenu = [
        'Home',
        'Profile',
        'Contact'
    ];
    const contentTab = [
        'Home Content',
        'Profile Content',
        'Contact Content'
    ];
    const [selectIndex, setSelectIndex] = React.useState(0);

    // check class active
    function setActive(indexCheck) {
        let classList = 'nav-link ';
        if(+selectIndex === indexCheck) {
            classList = classList + 'active'
        }
        return classList;
    }


    // function khai bào
    function handleTabSelect(index) {
       
        return function() {
            setSelectIndex(index);
        }
        
    }
   
    return (

        <React.Fragment>
            <div class="container">
                <nav>
                    <div class="nav nav-tabs">
                        {
                            TabsMenu.map(
                                function(item, index) {
                                    return (
                                        <button
                                            data-index={index}
                                            onClick={handleTabSelect(index)}
                                            class={setActive(index)} >
                                            {item}
                                        </button>
                                    )
                                }
                            )
                        }
                    </div>
                </nav>

                <div class="tab-content">
                    {
                        contentTab.map(
                            function(item, index) {
                                return (
                                    <div 
                                        class={index === +selectIndex ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                        {item}</div>
                                )
                            }
                        )
                    }
                </div>
            </div>

        </React.Fragment>

    );
}



const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Tabs />);