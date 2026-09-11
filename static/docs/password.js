// Generate a random 3-digit number
const randomNumber = Math.floor(Math.random() * 900) + 100;

// Create the password
const password = `SchoolSucks${randomNumber}`;

// Print the password to the browser console
console.log(`Password = ${password}`);

// Get elements
const input = document.getElementById("passwordInput");
const button = document.getElementById("confirmButton");
const error = document.getElementById("error");

// Check password
function checkPassword() {

  const enteredPassword = input.value;

  if (enteredPassword === password) {

    // Remember that this visitor passed
    localStorage.setItem("passwordPassed", "true");

    // Go to the main site
    window.location.href = "/";

  } else {

    error.textContent = "Incorrect password.";

    input.value = "";
    input.focus();

  }
}

// Button
button.addEventListener("click", checkPassword);

// Enter key
input.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    checkPassword();
  }

});
