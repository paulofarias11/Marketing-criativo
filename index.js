const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.navbar-container');

botaoMenu.addEventListener('click', () => { 
    menu.classList.toggle('navbar--ativa');
})