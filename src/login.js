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
                // Send credentials to backend
                fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                })
                .then(async (res) => {
                    if (res.ok) {
                        const data = await res.json();
                        console.log('Login success:', data);
                        alert('Login successful');
                    } else {
                        let errMsg = 'Login failed';
                        try {
                            const err = await res.json();
                            errMsg = err.message || errMsg;
                        } catch (e) {}
                        console.warn('Login error:', res.status, errMsg);
                        alert(errMsg);
                    }
                })
                .catch((error) => {
                    console.error('Network/error contacting server:', error);
                    alert('Could not contact server. Is it running on http://localhost:3000 ?');
                });
            }
        });
    }
});
