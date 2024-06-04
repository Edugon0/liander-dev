//Menu
const buttonMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('header .container nav ul');

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile-active');

    const links = document.querySelector('.links')
    links.addEventListener('click', () => {
        menu.classList.remove('menu-mobile-active');
    })
});


//modal

const img_modal = document.querySelector('.img-project-dialog')
const modal = document.querySelector('dialog')
const fechar_modal = document.querySelector('.fechar-modal')
img_modal.addEventListener('click', () => {
    modal.showModal()
})

fechar_modal.addEventListener('click', () => {
    modal.close()
})