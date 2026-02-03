document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const button = document.getElementById("btn");

    if (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission refresh
            const email = emailInput.value;
            const password = passwordInput.value;
            console.log("Email:", email);
            console.log("Password:", password);

            // Minimal validation feedback
            if (!email || !password) {
                alert("Please fill in all fields");
            } else {
                alert("Login clicked! (Check console for values)");
            }
        });
    }
});
