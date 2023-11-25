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
        displayQuote(); // Call the displayQuote function when the welcome header is in the viewport
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

function displayQuote() {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            const containerEl = document.querySelector('#quote');

            const quoteEl = document.createElement('p');
            quoteEl.classList.add('quote');
            const authorEl = document.createElement('p');
            authorEl.classList.add('author');

            quoteEl.textContent = data.content;
            authorEl.textContent = data.author;

            containerEl.appendChild(quoteEl);
            containerEl.appendChild(authorEl);
        });
}

// Call displayQuote immediately if the welcome header is already in the viewport
if (isElementInViewport(document.querySelector('.welcome-header'))) {
    displayQuote();
}

// Check if the DOM content is loaded before executing the script
document.addEventListener('DOMContentLoaded', async () => {
    const userName = localStorage.getItem('userName');
    const loginControls = document.getElementById('loginControls');
    const playControls = document.getElementById('playControls');

    if (userName) {
        document.getElementById('customerName').textContent = userName;
        loginControls.style.display = 'none';
        playControls.style.display = 'block';
    } else {
        loginControls.style.display = 'block';
        playControls.style.display = 'none';

        // Check if the current page is one of the restricted pages
        const restrictedPages = ['checkout.html', 'contact.html', 'faq.html', 'inventory.html'];
        const currentLocation = window.location.pathname.split('/').pop(); // Get the current page name

        if (restrictedPages.includes(currentLocation)) {
            // Redirect to the home page for non-logged-in users
            window.location.href = 'index.html';
        }
    }
});

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}

async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.ok) {
        localStorage.setItem('userName', userName);
        document.querySelector('#customerName').textContent = userName;
        setDisplay('loginControls', 'none');
        setDisplay('playControls', 'block');
    } else {
        const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
}

function order() {
    // Assuming order() is a placeholder for an action when the user clicks an "Order" button
    // You can replace it with the actual functionality you want.
}

function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}

// Other functions remain unchanged

function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
        playControlEl.style.display = display;
    }
}


  