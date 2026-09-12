```js
// Generate a random 3-digit number
const randomNumber = Math.floor(Math.random() * 900) + 100;

// Create the password
const password = "SchoolSucks" + randomNumber;

// Manual console command:
// Type getPassword() in the browser console to reveal the password.
window.getPassword = function () {
  console.log("Password = " + password);
};

// Get page elements
const input = document.getElementById("passwordInput");
const button = document.getElementById("confirmButton");
const error = document.getElementById("error");

// Check the password
function checkPassword() {
  const enteredPassword = input.value.trim();

  if (enteredPassword === password) {

    // Save successful access
    localStorage.setItem("passwordPassed", "true");

    // Go to the actual SchoolPorted homepage
    window.location.replace("/");

  } else {

    error.textContent = "Incorrect password.";

    input.value = "";

    input.focus();
  }
}

// Confirm button
button.addEventListener("click", checkPassword);

// Enter key
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

// Automatically focus the password box
input.focus();
```
