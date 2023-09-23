//DECLARATIONS
const registerBtn = document.querySelector('.register-btn1')
const backBtn = document.querySelector('.back-btn')
const submitBtn = document.querySelector('.submit-btn')
const overlay = document.querySelector('.overlay')

//NAVIGATE TO REGISTER PAGE
registerBtn.addEventListener('click', function() {
    window.location.href = 'register.html'
})

submitBtn.addEventListener('submit', function(e)  {
    e.preventDefault
    overlay.classList.add('open')
})

backBtn.addEventListener('click', function() {
    overlay.classList.remove('open')
})