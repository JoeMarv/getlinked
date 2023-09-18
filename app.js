//VARIABLES
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')


//TOGGLE MENU BUTTON
menuBtn.addEventListener('click', function() {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})