const form = document.getElementById("signup-form");

        // Validation functions
        function validateEmail() {
            const email = document.getElementById("email");
            const emailError = document.getElementById("email-error");
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!email.value.match(emailPattern)) {
                email.setCustomValidity("Invalid email address");
                emailError.style.display = "block";
            } else {
                email.setCustomValidity("");
                emailError.style.display = "none";
            }
        }

        function validatePassword() {
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirm-password");
            const passwordError = document.getElementById("password-error");
            const confirmError = document.getElementById("confirm-password-error");

            if (password.value.length < 8) {
                password.setCustomValidity("Password must be at least 8 characters long");
                passwordError.style.display = "block";
            } else {
                password.setCustomValidity("");
                passwordError.style.display = "none";
            }

            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords do not match");
                confirmError.style.display = "block";
            } else {
                confirmPassword.setCustomValidity("");
                confirmError.style.display = "none";
            }
        }

        // Event listeners for validation
        const fields = document.querySelectorAll("input");
        fields.forEach((field) => {
            field.addEventListener("blur", () => {
                field.checkValidity();
            });
        });

        // Form submission handler
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission for this example
            fields.forEach((field) => field.checkValidity());

            // Check if there are no validation errors
            if (form.checkValidity()) {
                alert("High five! Form submitted successfully.");
            }
        });