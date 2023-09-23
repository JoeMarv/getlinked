//DECLARATIONS
const registerBtn = document.querySelector(".register-btn1");
const backBtn = document.querySelector(".back-btn");
const submitBtn = document.querySelector(".submit-btn");
const overlay = document.querySelector(".overlay");

//NAVIGATE TO REGISTER PAGE
registerBtn.addEventListener("click", function () {
  window.location.href = "register.html";
});

submitBtn.addEventListener("submit", function (e) {
  e.preventDefault;
  overlay.classList.add("open");
});

backBtn.addEventListener("click", function () {
  overlay.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const teamName = document.getElementById("team").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const projectTopic = document.getElementById("project").value.trim();
    const category = document.getElementById("category").value;
    const groupSize = document.getElementById("size").value;
    const privacyPolicyAccepted = document.getElementById("radio").checked;

    // Your validation logic for empty fields here

    if (
      !teamName ||
      !phone ||
      !email ||
      !projectTopic ||
      category === "select" ||
      groupSize === "select" ||
      !privacyPolicyAccepted
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      email: email,
      team_name: teamName,
      phone_number: phone,
      project_topic: projectTopic,
      group_size: groupSize,
      privacy_policy_accepted: privacyPolicyAccepted,
      category: category,
    };

    fetch("https://backend.getlinked.ai/hackathon/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("Registration successful");
          alert("Registration successful");
        } else {
          console.error(
            "Registration failed. HTTP Status Code:",
            response.status
          );
          alert("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });                openFailedModal();

  });

  // Define openSuccessModal and openFailedModal functions here for displaying modals
});
