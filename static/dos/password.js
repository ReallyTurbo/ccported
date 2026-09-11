// Generate a random 3-digit number
const randomNumber = Math.floor(Math.random() * 900) + 100;

// Create the password
const password = "SchoolSucks" + randomNumber;

// Print the password to the browser console
console.log("Password = " + password);

// Get the elements
const input = document.getElementById("passwordInput");
const button = document.getElementById("confirmButton");
const error = document.getElementById("error");

// Check the password
function checkPassword() {

  const enteredPassword = input.value;

  if (enteredPassword === password) {

    // Remember that this browser has passed
    localStorage.setItem("passwordPassed", "true");

    // Return to the DOS page
    window.location.href = "/dos/";

  } else {

    // Show error
    error.textContent = "Incorrect password.";

    // Clear input
    input.value = "";

    // Put cursor back in input
    input.focus();
  }
}

// Confirm button
button.addEventListener("click", checkPassword);

// Allow Enter key to confirm
input.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    checkPassword();
  }

});
