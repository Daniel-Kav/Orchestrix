const form = document.querySelector('#form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirm-password');
const zipcode = document.getElementById('zipcode');
const country = document.getElementById('country');
const countryError = document.getElementById("country-error"); // Declare countryError here

function validateEmail() {
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

    if (country.value === "" || country.value === null) { // Use .value to get the country's value
        countryError.style.display = "block";
    } else {
        countryError.style.display = "none";
    }
});
