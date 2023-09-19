//VARIABLES
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const bodys = document.querySelectorAll('.question')


//TOGGLE MENU BUTTON
menuBtn.addEventListener('click', function() {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})


//ACCORDION TOGGLE
bodys.forEach(function(body) {
    const btn = body.querySelector('.question-head')

    btn.addEventListener('click', function() {
        bodys.forEach(function(item) {
            if (item !== body) {
                item.classList.remove('open')
            }
        })

        body.classList.toggle('open')
    })
})