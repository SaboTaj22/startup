document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const userNameDisplay = document.getElementById('userNameDisplay'); // Element to display the user's name

    // Read and display the user name
    const userName = localStorage.getItem('userName');
    if (userName) {
        userNameDisplay.textContent = userName; // Display the user's name if it exists in localStorage
    }

    // Read and populate the user email
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        emailInput.value = userEmail; // Populate the email field if it exists in localStorage
    }

    // Handle form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get user input
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;

        // Construct the user's full name
        const fullName = `${firstName} ${lastName}`;

        // Display the user's full name
        userNameDisplay.textContent = fullName;

        // Save the user's name and email in localStorage
        localStorage.setItem('userName', fullName);
        localStorage.setItem('userEmail', email);
    });
});



