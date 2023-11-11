document.addEventListener('DOMContentLoaded', function () {
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    const userNameDisplay = document.getElementById('userNameDisplay');

    // Read and display the user name
    const userName = localStorage.getItem('userName');
    if (userName) {
        userNameDisplay.textContent = `${userName}`; // Display the user's name if it exists in localStorage
    }

    // Function to update the display of selected items
    function updateSelectedItemsDisplay() {
        const selectedItemsDisplay = document.getElementById('selectedItemsDisplay');
        selectedItemsDisplay.innerHTML = '';

        if (selectedItems.length === 0) {
            selectedItemsDisplay.textContent = 'Cart Empty';
        } else {
            selectedItems.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `${item.name} - $${item.price}`;
                selectedItemsDisplay.appendChild(itemDiv);
            });
        }
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            if (!selectedItems.some(item => item.name === itemName)) {
                selectedItems.push({ name: itemName, price: itemPrice });
                localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
                updateSelectedItemsDisplay();
            }
        });
    });

    const submitOrderButton = document.getElementById('submitOrder');
    submitOrderButton.addEventListener('click', function () {
        // Save the order in local storage along with the user's name
        const order = {
            userName: userName || 'Guest', // Use 'Guest' if userName is not available
            items: selectedItems
        };
        localStorage.setItem('order', JSON.stringify(order));

        // Optional: Clear the selected items array
        selectedItems = [];
        localStorage.removeItem('selectedItems');
        updateSelectedItemsDisplay();
    });

    // Display the selected items on page load
    updateSelectedItemsDisplay();

    const clearSelectedItemsButton = document.getElementById('clearSelectedItemsButton');
    clearSelectedItemsButton.addEventListener('click', function () {
        selectedItems = [];
        localStorage.removeItem('selectedItems');
        updateSelectedItemsDisplay();
    });
});




