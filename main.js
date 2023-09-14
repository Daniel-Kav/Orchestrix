const form = document.querySelector('#form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirm-password');
const zipcode = document.getElementById('zipcode');
const country = document.getElementById('country');
const countryError = document.getElementById("country-error"); // Declare countryError here

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

// Event listeners for validation
const fields = document.querySelectorAll("input");
fields.forEach((field) => {
    field.addEventListener("blur", () => {
        field.checkValidity();
    });
});

// Form submision handler
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
