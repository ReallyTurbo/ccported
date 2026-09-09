const input = document.getElementById("password");
const button = document.getElementById("submit");
const message = document.getElementById("message");

button.addEventListener("click", checkPassword);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkPassword();
  }
});

async function checkPassword() {
  const password = input.value.trim();

  if (!password) {
    message.textContent = "Enter a password.";
    return;
  }

  button.disabled = true;
  button.textContent = "Checking...";
  message.textContent = "";

  try {
    const response = await fetch("/api/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: password
      })
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("passwordPassed", "true");

      // Go to your actual website
      window.location.href = "/";
    } else {
      message.textContent = data.message || "Incorrect password.";
      button.disabled = false;
      button.textContent = "Continue";
      input.value = "";
      input.focus();
    }

  } catch (error) {
    console.error(error);

    message.textContent = "Could not check password.";
    button.disabled = false;
    button.textContent = "Continue";
  }
}
