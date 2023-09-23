//DECLARATIONS
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const bodys = document.querySelectorAll(".question");
const registerBtn = document.querySelector('.register-btn1')
const registerBtn2 = document.querySelector('.register-btn2')


//TOGGLE MENU BUTTON
menuBtn.addEventListener("click", function () {
  menu.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("open");
});


//ACCORDION TOGGLE
bodys.forEach(function (body) {
  const btn = body.querySelector(".question-head");

  btn.addEventListener("click", function () {
    bodys.forEach(function (item) {
      if (item !== body) {
        item.classList.remove("open");
      }
    });

    body.classList.toggle("open");
  });
});


//TIMER COUNTDOWN
function calculateTimeLeft() {
  const targetDate = new Date("2023-09-24T23:59:59").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const totalSeconds = Math.floor(difference / 1000);
    const daysAsHours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      daysAsHours: daysAsHours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  return {
    daysAsHours: 0,
    minutes: 0,
    seconds: 0,
  };
}

function updateTimer() {
  const timeLeft = calculateTimeLeft();
  document.getElementById("daysashours").textContent = timeLeft.daysAsHours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = timeLeft.minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = timeLeft.seconds
    .toString()
    .padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial update


//NAVIGATE TO REGISTER PAGE
registerBtn.addEventListener('click', function() {
  window.location.href = 'register.html'
})

registerBtn2.addEventListener('click', function() {
  window.location.href = 'register.html'
})