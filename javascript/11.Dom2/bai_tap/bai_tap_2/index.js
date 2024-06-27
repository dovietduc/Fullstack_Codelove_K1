const buttonSelector = document.querySelector('button');
const modalWrapp = document.querySelector('.wrapper_modal');
const close = document.querySelector('.close');




function showModal() {
    modalWrapp.classList.remove('hide');
}

function hideModal() {
    modalWrapp.classList.add('hide');
}



buttonSelector.addEventListener('click', showModal);
close.addEventListener('click', hideModal);



