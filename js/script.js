
const buttonMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('header .container nav ul');

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile-active');

    const links = document.querySelector('.links')
    links.addEventListener('click', () => {
        menu.classList.remove('menu-mobile-active');
    })
});