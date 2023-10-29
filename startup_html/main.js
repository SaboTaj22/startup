// main.js

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the button for toggling the navigation menu
    const navbarToggle = document.querySelector(".navbar-toggler");
    
    // Select the collapsible navigation menu
    const navbarMenu = document.querySelector(".navbar-collapse");

    // Add a click event listener to the toggle button
    navbarToggle.addEventListener("click", function () {
        // Toggle the 'show' class on the collapsible menu
        navbarMenu.classList.toggle("show");
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Add your form validation logic here
    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate the form fields (you can use regular expressions, etc.)
    if (firstName === "" || email === "" || subject === "" || message === "") {
        alert("All required fields must be filled out.");
        return;
    }

    // If all fields are valid, you can submit the form to your backend or perform other actions
    alert("Form submitted successfully!");
    
    // Redirect the user to the "contact.html" page
    window.location.href = "contact.html";
});
