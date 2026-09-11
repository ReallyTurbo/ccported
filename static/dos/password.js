// Generate a random 3-digit number
const randomNumber = Math.floor(Math.random() * 900) + 100;

// Create password
const password = "SchoolSucks" + randomNumber;

// Show password in browser console
console.log("Password = " + password);

// Get HTML elements
const passwordInput = document.getElementById("passwordInput");
const confirmButton = document.getElementById("confirmButton");
const errorMessage = document.getElementById("error");

// Check password
function checkPassword() {

  const enteredPassword = passwordInput.value;

  if (enteredPassword === password) {

    // Remember that this visitor passed
    localStorage.setItem("passwordPassed", "true");

    // Go to the main site
    window.location.href = "/";

  } else {

    errorMessage.textContent = "Incorrect password.";

    passwordInput.value = "";

    passwordInput.focus();
  }
}

// Confirm button
confirmButton.addEventListener("click", checkPassword);

// Allow Enter key
passwordInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    checkPassword();
  }

});
