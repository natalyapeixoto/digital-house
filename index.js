const btnMenu = document.querySelector('.nav-burguer')
const  menu = document.querySelector('.mobile-menu')

btnMenu.addEventListener('click', function(e){
    e.preventDefault()
    menu.classList.toggle('show-menu')
})