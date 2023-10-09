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
