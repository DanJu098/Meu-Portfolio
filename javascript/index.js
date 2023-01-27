const botaoMenu = document.querySelector('.cabecalho_menu')
const menu = document.querySelector('.lista')

botaoMenu.addEventListener('click', ()=>{
    menu.classList.toggle('lista--ativo')
})