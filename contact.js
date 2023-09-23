//DECLARATIONS
const backBtn = document.querySelector('.back-btn')
const registerBtn = document.querySelector('.register-btn1')


//BACK TO HOMEPAGE LOGIC
backBtn.addEventListener('click', function() {
    window.location.href = 'index.html'
});


//NAVIGATE TO REGISTER PAGE
registerBtn.addEventListener('click', function() {
  window.location.href = 'register.html'
})