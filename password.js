// Generate random password
const randomNumber = Math.floor(Math.random() * 900) + 100;
const password = `SchoolSucks${randomNumber}`;

// Print password to console
console.log(`Password = ${password}`);

// Create overlay
const overlay = document.createElement("div");
overlay.id = "passwordOverlay";
overlay.innerHTML = `
    <div id="passwordBox">
        <h2>Enter Password</h2>

        <input
            type="text"
            id="passwordInput"
            placeholder="Enter password..."
        >

        <button id="passwordButton">
            Confirm
        </button>

        <p id="passwordError"></p>
    </div>
`;

document.body.appendChild(overlay);

// Styles
const style = document.createElement("style");
style.textContent = `
#passwordOverlay{
    position:fixed;
    inset:0;
    width:100vw;
    height:100vh;
    background:#111;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999999;
    font-family:Arial,sans-serif;
}

#passwordBox{
    background:#222;
    padding:30px;
    border-radius:12px;
    width:320px;
    text-align:center;
    box-shadow:0 0 20px rgba(0,0,0,.5);
}

#passwordBox h2{
    color:white;
    margin-bottom:15px;
}

#passwordInput{
    width:100%;
    padding:10px;
    box-sizing:border-box;
    margin-bottom:10px;
    border:none;
    border-radius:6px;
}

#passwordButton{
    width:100%;
    padding:10px;
    border:none;
    border-radius:6px;
    cursor:pointer;
}

#passwordError{
    color:red;
    margin-top:10px;
}
`;
document.head.appendChild(style);

// Check password
document.getElementById("passwordButton").addEventListener("click", () => {
    const entered = document.getElementById("passwordInput").value;

    if (entered === password) {
        document.getElementById("passwordOverlay").remove();
    } else {
        document.getElementById("passwordError").textContent =
            "Incorrect password";
    }
});

// Enter key support
document.getElementById("passwordInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.getElementById("passwordButton").click();
    }
});
