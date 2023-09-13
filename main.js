const form = document.querySelector('#form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirm-password');
const zipcode = document.getElementById('zipcode');
const country = document.getElementById('country');

form.addEventListener('submit',() => {
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


    if (country === "" || country === null) {
        
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
