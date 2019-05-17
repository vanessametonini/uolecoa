const btnMenu = document.querySelector('.menu-click'),
    btnMenuClose = document.querySelector('.menu-click.close-button'),
    menu = document.querySelector('.menu-wrapper-mobile.specials');

const mobileMenu = function (event) {
    event.preventDefault();
    menu.classList.toggle('show-submenu');
    btnMenu.classList.toggle('hidden');
    btnMenuClose.classList.toggle('hidden');
}

btnMenu.addEventListener('click', mobileMenu);
btnMenuClose.addEventListener('click', mobileMenu);