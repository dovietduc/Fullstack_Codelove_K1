

function initHandleCounter(oiptions) {

    // định danh vùng của ứng dụng
    const couterWrapperSelector = document.querySelector(`.${oiptions.container}`);
    const buttonIncrementSelector = couterWrapperSelector.querySelector('.increment');
    const spanSlelector = couterWrapperSelector.querySelector('span');


    function handlIncrement() {
        spanSlelector.innerHTML = +spanSlelector.innerHTML + 1;
    }


    buttonIncrementSelector.addEventListener('click', handlIncrement);


}










const couterWrapperObject = new initHandleCounter(
    { container: 'couter_wrapper' }
);


const couterWrapperObject2 = new initHandleCounter(
    { container: 'couter_wrapper_2' }
);
