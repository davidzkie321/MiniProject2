document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    let email = document.getElementById("email").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let dateOfBirth = document.getElementById("date-of-birth").value;
    let preferences = [];
    let preferenceCheckboxes = document.getElementsByName("preferences");
    for (let i = 0; i < preferenceCheckboxes.length; i++) {
      if (preferenceCheckboxes[i].checked) {
        preferences.push(preferenceCheckboxes[i].value);
      }
    }

    // Validate form fields
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");
    let errorFeedback = document.getElementById("password-error-feedback");

    if (password !== confirmPassword) {
      if (!errorFeedback) {
        errorFeedback = document.createElement("div");
        errorFeedback.id = "password-error-feedback";
        errorFeedback.className = "invalid-feedback";
        errorFeedback.innerHTML = "Passwords do not match.";

        let formGroup = passwordInput.closest(".mb-3");
        formGroup.appendChild(errorFeedback);
      }
      passwordInput.classList.add("is-invalid");
      confirmPasswordInput.classList.add("is-invalid");
      return;
    } else {
      if (errorFeedback) {
        errorFeedback.remove();
      }
      passwordInput.classList.remove("is-invalid");
      confirmPasswordInput.classList.remove("is-invalid");
    }

    // Account creation success
    alert(
      "Account created successfully! Welcome, " +
        firstName +
        " " +
        lastName +
        "."
    );
  });
