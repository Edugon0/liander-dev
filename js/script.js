//Menu
const buttonMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('header .container nav ul');
const buttonEnviarMensagem = document.querySelector('.enviar-mensagem');

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile-active');

    const lines = document.querySelectorAll('header .container .button-menu-mobile .line');
    
    lines.forEach(line => line.classList.toggle('menu-active'));
    const links = document.querySelector('.links')
    links.addEventListener('click', () => {
        menu.classList.remove('menu-mobile-active');
    })
});
