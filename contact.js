// DECLARATIONS
const backBtn = document.querySelector(".back-btn");
const registerBtn = document.querySelector(".register-btn1");

// BACK TO HOMEPAGE LOGIC
backBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

// NAVIGATE TO REGISTER PAGE
registerBtn.addEventListener("click", function () {
  window.location.href = "register.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const teamName = document.getElementById("team").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if any of the input fields is empty
    if (!teamName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      first_name: teamName,
      email: email,
      message: message,
    };

    // Use the fetch API to make the POST request
    fetch("https://backend.getlinked.ai/hackathon/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("formData:", formData);
          alert("Message sent successfully");
        } else {
          alert("Message not sent");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  });
});
