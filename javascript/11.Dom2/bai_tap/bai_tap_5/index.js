const buttonAddSelector = document.querySelector('.add');
const inputSelector = document.querySelector('.input_text');
const ulSelector = document.querySelector('ul');
const allButton = document.querySelectorAll('ul li button');



// Event bubbling

function buildHtml() {
    return ` <li>
    <span>Hit the text</span>
    <button>delete</button>
    </li>`
}

function handleAddForm(event) {
    event.preventDefault();
    // 1. lấy value input
    const valueInput = inputSelector.value;

    // 2. tạo ra mã html để insert vào dom
    const htmlTodo =  ` <li>
    <span>${valueInput}</span>
    <button>delete</button>
    </li>`;
    ulSelector.insertAdjacentHTML('beforeend', htmlTodo);


}

function handleDelete(event) {
    const clicked  = event.target;
    clicked.parentElement.remove();
}



buttonAddSelector.addEventListener('click', handleAddForm);
for (let i = 0; i < allButton.length; i++) {
    const element = allButton[i];
    element.addEventListener('click', handleDelete);
}


