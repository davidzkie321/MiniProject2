document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // demonstration only, assume that the password is "password123"
    if (password === "password123") {
      // valid password
      alert("You are now signed in.");
      let passwordInput = document.getElementById("password");
      passwordInput.classList.remove("is-invalid");
    } else {
      // invalid pass word
      let passwordInput = document.getElementById("password");
      passwordInput.classList.add("is-invalid");

      let errorFeedback = document.querySelector(".invalid-feedback");
      if (!errorFeedback) {
        errorFeedback = document.createElement("div");
        errorFeedback.className = "invalid-feedback";
        errorFeedback.innerHTML = "Invalid password. Please try again.";

        let formGroup = passwordInput.closest(".mb-3");
        formGroup.appendChild(errorFeedback);
      }
    }
  });
