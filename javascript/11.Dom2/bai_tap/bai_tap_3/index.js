// 1. render ra giao diện --- bài toán đã có -- copy -- paste

// 2. xác định ra dữ liệu lưu trữ -- dựa vào yêu cầu bài toán (giải quyết bài toán)


// 3. tiến hành coding

const container = document.querySelector('.container');
const colors = [
    'lightgray',
    'lightgreen',
    'lightsalmon'
];

// 1 biến thay đổi theo mầu sắc
let colorChange = 'lightgray';



function renderBoxView() {
    let htmlBox = '';
    for(let i = 0; i < colors.length; i++) {
        htmlBox = htmlBox + `<div class="box" data-color="${colors[i]}">

                            </div>`;
    }

    const htmlRender = 
    `
        <div class="box_wrapper" style="background: ${colorChange}">
          ${htmlBox}
        </div>
    `;

    container.innerHTML = htmlRender;
}


function handleChangeColor(event) {
    const clicked = event.target;

    if(clicked.classList.contains('box')) {
        // 1. lấy ra mầu sắc của box click
        const colorClick = clicked.getAttribute('data-color');
        colorChange = colorClick;
        // 2. thay đổi biến theo mầu sắc box click
    }



    // render lại giao diện
    renderBoxView();
}





renderBoxView();
container.addEventListener('click', handleChangeColor);