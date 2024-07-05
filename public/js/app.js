document.addEventListener('DOMContentLoaded', () => {

    const btnMenu = document.querySelector('#btn-menu');
    const menu = document.querySelector('.menu');
    btnMenu.addEventListener('click', e => {
        e.preventDefault();

        menu.classList.toggle('active')
    });


});


