// Function to check if the welcome-header is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function onScroll() {
    const welcomeHeader = document.querySelector('.welcome-header');
    
    if (isElementInViewport(welcomeHeader)) {
        welcomeHeader.style.opacity = 1;
        window.removeEventListener('scroll', onScroll); // Remove the scroll event listener after animation
    }
}

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', onScroll);

// Store email when the form is submitted
const signUpForm = document.querySelector('.welcome-container form');
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = signUpForm.querySelector('input[type="text"]');
    const email = emailInput.value;

    // Store the email in local storage
    localStorage.setItem('userEmail', email);
});